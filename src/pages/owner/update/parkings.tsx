import Header from '@/components/owner/Header';
import DaysOfWeekButtons from '@/components/owner/WeekButtons';
import OwnerLayout from '@/layouts/Owner';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { binaryToDays } from '@/utils/binarychange/week';
import {
  Parking,
  Payment,
  Prisma,
  Store,
  User,
} from '@prisma/client';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';
import {
  Input,
  Option,
  RadioSelect,
} from './index';

type parkingData = {
  inside: boolean;
  outside: boolean;
  capacity: number;
};

type ParkingWithTime = Prisma.ParkingGetPayload<{
  include: {
    time: true;
  };
}>;

type StoreWithParking = Prisma.StoreGetPayload<{
  include: {
    parkings: true;
  };
}>;

type TimeData = {
  day: string;
  price: number;
  open: string;
  close: string;
};

export default function Payments({
  store,
  parking,
}: {
  store: Store;
  parking?: ParkingWithTime;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<parkingData>();

  const router = useRouter();

  useEffect(() => {
    if (parking) {
      setValue('inside', parking.inside);
      setValue('outside', parking.outside);
      setValue('capacity', parking.capacity);
      const timeData: TimeData[] = [];
      parking.time.forEach(time => {
        timeData.push({
          day: time.day,
          price: time.price || 0,
          open: time.open,
          close: time.close,
        });
      });
      setTimes(timeData);
    }
    else {
      setValue('inside', false);
      setValue('outside', false);
      setValue('capacity', 0);
    }
  }, [parking]);

  const [times, setTimes] = useState<TimeData[]>([]);

  const onSubmit = async (data: parkingData) => {
    const load = toast.loading('登録中...');
    try {
      if (parking) {
        for (const time of parking.time) {
          await fetch('/api/time/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: time.id,
            }),
          });
        }
        for (const time of times) {
          const added = await fetch('/api/time', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...time,
              parkingId: parking.id,
            }),
          });
          const addedData = await added.json();
          if (addedData.error) {
            toast.error(addedData.error, {
              id: load,
            });
            return;
          }
        }
        const response = await fetch('/api/parking', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            parkingId: parking.id,
            storeId: store.id,
          }),
        });
        const resdata = await response.json();
        if (resdata.error) {
          toast.error(resdata.error, {
            id: load,
          });
        }
        else {
          toast.success('駐車場情報を登録しました！', {
            id: load,
          });
          router.push('/owner/update');
        }
      }
      else {
        const response = await fetch('/api/parking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            storeId: store.id,
          }),
        });
        const resdata = await response.json();
        if (resdata.error) {
          toast.error(resdata.error, {
            id: load,
          });
        }
        else {
          for (const time of times) {
            const added = await fetch('/api/time', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...time,
                parkingId: resdata.data.id,
              }),
            });
          }
          toast.success('駐車場情報を登録しました！', {
            id: load,
          });
          router.push('/owner/update');
        }
      }
    }
    catch (error) {
      toast.error('エラーが発生しました', {
        id: load,
      });
      console.error('Error creating entity:', error);
    }
  };
  return (
    <OwnerLayout header={<Header />}>
      <NextHeadSeo
        title='駐車場 - じもイチ管理画面'
        description='駐車場 - じもイチ管理画面'
      />
      <Link
        href='/owner/update'
        className='text-white flex flex-row items-center my-4 gap-2'
      >
        <IoIosArrowBack className='text-white' size={25} />
        店舗情報変更
      </Link>
      <div className='fixed bottom-0 left-0 right-0 max-w-7xl mx-auto px-8 py-4 bg-white rounded-t text-primary shadow-lg flex items-center justify-end'>
        <button
          className='bg-primary text-white font-bold rounded-lg px-4 py-2 duration-150 hover:opacity-80'
          onClick={handleSubmit(onSubmit)}
        >
          保存
        </button>
      </div>
      <div>
        <div className='text-white'>
          <div className='flex-col gap-1 pb-20'>
            <h1 className='text-3xl font-bold'>駐車場情報</h1>
            <div className='flex gap-6 my-4'>
              <RadioSelect
                label='屋内'
                className='flex flex-col'
                setSelected={(value: boolean) => setValue('inside', value)}
                defaultValue={parking?.inside || false}
              />
              <RadioSelect
                label='屋外'
                className='flex flex-col'
                setSelected={(value: boolean) => setValue('outside', value)}
                defaultValue={parking?.outside || false}
              />
            </div>
            <div className='flex gap-6 my-4'>
              <Input
                label='台数'
                option={Option.NUMBER}
                unit='台'
                className='flex flex-col'
                defaultValue={parking?.capacity || 0}
                setInputValue={(value: number) => setValue('capacity', value)}
              />
            </div>
            <h1 className='text-3xl font-bold mt-8 mb-4'>料金設定</h1>
            {times.map((time, index) => (
              <div key={index}>
                <div className='flex items-center justify-between'>
                  <div>
                    <h2 className='text-lg font-bold '>時間{index + 1}</h2>
                    <DaysOfWeekButtons
                      defaultValue={binaryToDays(time.day)}
                      setValue={(value: string) => {
                        const newTime = [...times];
                        newTime[index].day = value;
                        setTimes(newTime);
                      }}
                      className='my-4'
                    />
                    <div className='gap-1 flex'>
                      <h2 className='text-lg font-bold '>料金</h2>
                      <input
                        type={Option.NUMBER}
                        className='text-black h-8 rounded-md w-32 font-bold'
                        value={time.price}
                        onChange={e => {
                          const newTime = [...times];
                          newTime[index].price = parseInt(e.target.value);
                          setTimes(newTime);
                        }}
                      />
                      <text className='font-bold '>円</text>
                    </div>
                    <div className='bg-500 h-5'></div>
                    <div className='flex gap-1'>
                      <h3 className='text-lg font-bold '>時間</h3>
                      <input
                        type={Option.TYME}
                        className='text-black h-8 rounded-md w-32 font-bold'
                        value={time.open}
                        onChange={e => {
                          const newTime = [...times];
                          newTime[index].open = e.target.value;
                          setTimes(newTime);
                        }}
                      />
                      <text className='font-bold px-3 justify-center items-center'>
                        〜
                      </text>
                      <input
                        type={Option.TYME}
                        className='text-black h-8 rounded-md w-32 font-bold'
                        value={time.close}
                        onChange={e => {
                          const newTime = [...times];
                          newTime[index].close = e.target.value;
                          setTimes(newTime);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className='bg-white text-black font-bold rounded-lg px-4 py-2 duration-150 hover:opacity-80 my-4'
                      onClick={() => {
                        const newTime = [...times];
                        newTime.splice(index, 1);
                        setTimes(newTime);
                      }}
                    >
                      削除
                    </button>
                  </div>
                </div>
                <hr className='my-4' />
              </div>
            ))}
            <button
              className='bg-white text-black font-bold rounded-lg px-4 py-2 duration-150 hover:opacity-80 my-4'
              onClick={() => setTimes([...times, { day: '', price: 0, open: '', close: '' }])}
            >
              時間を追加
            </button>
          </div>
        </div>
      </div>
    </OwnerLayout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/owner/signin',
        permanent: false,
      },
    };
  }
  if (session.user.type !== 'OWNER') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/user?id=${session.user.uid}`,
  );
  if (res.status !== 200) {
    return {
      redirect: {
        destination: '/owner/signin',
        permanent: false,
      },
    };
  }
  const owner: { data: User; status: string; } = await res.json();
  if (!owner.data.storeId) {
    return {
      redirect: {
        destination: '/owner/init',
        permanent: false,
      },
    };
  }
  const storeData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/store?id=${owner.data.storeId}`,
  );
  const store: { data: StoreWithParking; status: string; } = await storeData.json();
  if (!store.data) {
    return {
      redirect: {
        destination: '/owner/init',
        permanent: false,
      },
    };
  }
  if (!store.data.parkings) {
    return {
      props: {
        store: store.data,
        parking: null,
      },
    };
  }
  const parking = await fetch(
    `${process.env.NEXTAUTH_URL}/api/parking?id=${store.data.parkings.id}`,
  );
  const parkingData: { data: ParkingWithTime; status: string; } = await parking.json();
  if (!parkingData.data) {
    return {
      props: {
        store: store.data,
        parking: null,
      },
    };
  }
  return {
    props: {
      store: store.data,
      parking: parkingData.data,
    },
  };
}
