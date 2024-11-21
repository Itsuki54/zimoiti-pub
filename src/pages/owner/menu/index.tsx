import { ImageUploader } from '@/components/common/ImageUploader';
import AllergyCard from '@/components/owner/AllergyCard';
import Header from '@/components/owner/Header';
import DaysOfWeekButtons from '@/components/owner/WeekButtons';
import OwnerLayout from '@/layouts/Owner';
import { allergiesToBinary } from '@/utils/binarychange/allergies';
import {
  Menu,
  Store,
  User,
} from '@prisma/client';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';
import Select from 'react-select';
import { authOptions } from '../../api/auth/[...nextauth]';
type menuData = {
  name: string;
  genre: string;
  description: string;
  readyTime: number;
  allergen: string;
  image?: string | null;
  price: number;
  storeId: string;
};

const genres = [
  { value: '1', label: '和食' },
  { value: '2', label: '洋食' },
  { value: '3', label: '中華' },
  { value: '4', label: 'イタリアン' },
  { value: '5', label: 'フレンチ' },
  { value: '6', label: 'その他' },
];

const imageUrls = [
  {
    imageUrl: '/allergy/5063.jpg',
    allergyname: '卵',
    size: 80,
  },
  {
    imageUrl: '/allergy/4809.jpg',
    allergyname: '舞茸',
    size: 100,
  },
  {
    imageUrl: '/allergy/2138.jpg',
    allergyname: 'バナナ',
    size: 100,
  },
  {
    imageUrl: '/allergy/11917.jpg',
    allergyname: 'キウイ',
    size: 100,
  },
  {
    imageUrl: '/allergy/20328.jpg',
    allergyname: '大豆',
    size: 100,
  },
  {
    imageUrl: '/allergy/28732.jpg',
    allergyname: 'アーモンド',
    size: 100,
  },
  {
    imageUrl: '/allergy/28770.jpg',
    allergyname: 'カシューナッツ',
    size: 100,
  },
  {
    imageUrl: '/allergy/29146.jpg',
    allergyname: '牛肉',
    size: 100,
  },
  {
    imageUrl: '/allergy/30018.jpg',
    allergyname: '鮭',
    size: 150,
  },
  {
    imageUrl: '/allergy/31537.jpg',
    allergyname: '鶏肉',
    size: 100,
  },
  {
    imageUrl: '/allergy/35033.jpg',
    allergyname: 'そば',
    size: 100,
  },
  {
    imageUrl: '/allergy/35037.jpg',
    allergyname: 'くるみ',
    size: 100,
  },
  {
    imageUrl: '/allergy/4081.jpg',
    allergyname: 'りんご',
    size: 100,
  },
  {
    imageUrl: '/allergy/5702.jpg',
    allergyname: '牛乳',
    size: 50,
  },
  {
    imageUrl: '/allergy/38226.jpg',
    allergyname: 'いくら',
    size: 100,
  },
  {
    imageUrl: '/allergy/35258.jpg',
    allergyname: '小麦',
    size: 60,
  },
  {
    imageUrl: '/allergy/5854.jpg',
    allergyname: '桃',
    size: 100,
  },
  {
    imageUrl: '/allergy/7545.jpg',
    allergyname: 'えび',
    size: 100,
  },
  {
    imageUrl: '/allergy/7570.jpg',
    allergyname: 'かに',
    size: 100,
  },
  {
    imageUrl: '/allergy/7746.jpg',
    allergyname: '豚肉',
    size: 100,
  },
  {
    imageUrl: '/allergy/8159.jpg',
    allergyname: 'イカ',
    size: 100,
  },
  {
    imageUrl: '/allergy/8519.jpg',
    allergyname: '落花生',
    size: 100,
  },
  {
    imageUrl: '/allergy/1539850.jpg',
    allergyname: 'ごま',
    size: 100,
  },
  {
    imageUrl: '/allergy/22011090.jpg',
    allergyname: '里芋',
    size: 100,
  },
  {
    imageUrl: '/allergy/22619923.jpg',
    allergyname: 'あわび',
    size: 100,
  },
  {
    imageUrl: '/allergy/98.jpg',
    allergyname: 'オレンジ',
    size: 100,
  },
  {
    imageUrl: '/allergy/9200.jpg',
    allergyname: 'ゼラチン',
    size: 120,
  },
  {
    imageUrl: '/allergy/30020.jpg',
    allergyname: 'さば',
    size: 150,
  },
];

export default function AddMenu({
  menu,
  store,
}: {
  menu: Menu[];
  store: Store;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<menuData>();
  const [isOpen, setIsOpen] = useState(false);
  const [allergy, setAllergy] = useState<string[]>([]);
  const [genre, setGenre] = useState<string | null>('');

  const setAllergyList = (type: string, name: string): void => {
    if (type === 'add') {
      setAllergy(prevAllergy => [...prevAllergy, name]);
    }
    else if (type === 'remove') {
      setAllergy(prevAllergy => prevAllergy.filter(a => a !== name));
    }
  };

  const onSubmit = async (data: menuData) => {
    const load = toast.loading('登録中...');
    try {
      const response = await fetch('/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          price: Number(data.price),
          genre: genre,
          allergen: allergiesToBinary(allergy),
          storeId: store.id,
          Store: {
            connect: {
              id: store.id,
            },
          },
        }),
      });
      const resdata = await response.json();
      if (resdata.error) {
        toast.error(resdata.error, {
          id: load,
        });
      }
      else {
        toast.success('メニューを登録しました！', {
          id: load,
        });
        router.push('/owner/menu');
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
        title='メニュー - じもイチ管理画面'
        description='メニュー - じもイチ管理画面'
      />
      <Link
        href='/owner/update'
        className='text-white flex flex-row items-center my-4 gap-2'
      >
        <IoIosArrowBack className='text-white' size={25} />
        店舗情報変更
      </Link>
      {isOpen ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex-col p-4'>
            <div className='flex'>
              <ImageUploader id={''} image={''} />
              <div className='flex-col p-2'>
                <div className='flex gap-8'>
                  <div className='flex-col '>
                    <p className='text-xl font-bold text-white mb-2'>料理名</p>
                    <input
                      type='text'
                      {...register('name')}
                      className='w-60 rounded-lg'
                    />
                  </div>
                  <div className='flex-col'>
                    <p className='text-xl font-bold text-white mb-2'>
                      準備時間
                    </p>
                    <input
                      type='number'
                      className='w-20 rounded-lg'
                      {...register('readyTime')}
                    />
                    <label className='text-white font-bold ml-2'>分</label>
                  </div>
                </div>
                <div className='mt-8'>
                  <div className='flex-col'>
                    <p className='text-xl font-bold text-white mb-2'>価格</p>
                    <input
                      type='number'
                      className='w-25 rounded-lg'
                      {...register('price')}
                    />
                    <label className='text-white font-bold ml-2'>円</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-32'>
              <div className='flex-col'>
                <p className='text-xl font-bold text-white my-4'>曜日</p>
                <div className='flex'>
                  <DaysOfWeekButtons
                    selectedDays={[]}
                    setSelectedDays={() => {}}
                  />
                </div>
              </div>
              <div className='flex-col gap-1'>
                <h3 className='text-xl font-bold text-white my-4'>時間</h3>
                <input
                  type='time'
                  className='text-black h-8 rounded-md w-32 font-bold'
                />
                <text className='font-bold px-3 justify-center items-center text-white'>
                  〜
                </text>
                <input
                  type='time'
                  className='text-black h-8 rounded-md w-32 font-bold'
                />
              </div>
            </div>
            <div className='flex-col'>
              <h3 className='text-xl font-bold text-white my-4'>ジャンル</h3>
              <Select
                options={genres}
                className='w-60'
                onChange={selected => setGenre(selected!.label)}
              />
            </div>
            <div className='flex-col'>
              <h3 className='text-xl font-bold text-white my-4'>備考</h3>
              <textarea
                className='w-96 h-32 rounded-lg'
                {...register('description')}
              />
            </div>
            <div className='flex-col'>
              <h3 className='text-xl font-bold text-white my-4'>アレルギー</h3>
              <details>
                <summary className='text-white'>アレルギーを選択</summary>
                <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 flex-wrap justify-center gap-4 mt-4'>
                  {imageUrls.map((allergy, index) => (
                    <AllergyCard
                      key={index}
                      imageUrl={allergy.imageUrl}
                      allergyname={allergy.allergyname}
                      size={allergy.size}
                      index={index}
                      setAllergy={setAllergyList}
                    />
                  ))}
                </div>
              </details>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between gap-4'>
            <button
              className='my-8 w-full px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
              onClick={() => setIsOpen(false)}
            >
              キャンセル
            </button>
            <button
              type='submit'
              className='my-8 w-full px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
            >
              登録
            </button>
          </div>
        </form>
      ) : (
        <div className='bg-primary h-full my-8'>
          <div className='bg-primary py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
            {menu.map(menu => <MenuCard key={menu.id} menu={menu} />)}
          </div>
          <button
            className='my-8 w-full px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
            onClick={() => setIsOpen(true)}
          >
            メニュー追加
          </button>
        </div>
      )}
    </OwnerLayout>
  );
}

function MenuCard({ menu }: { menu: Menu; }) {
  return (
    <Link href={`/owner/menu/${menu.id}`}>
      <div className='bg-white p-4 rounded-lg flex flex-col justify-center items-start'>
        <div className='w-full'>
          {menu.image ? (
            <img
              src={menu.image}
              alt={menu.name}
              className='object-cover w-full h-40 rounded'
            />
          ) : (
            <div className='bg-gray-200 w-full h-40 rounded flex items-center justify-center'>
              <p className='text-center text-gray-600'>画像なし</p>
            </div>
          )}
        </div>
        <div className='flex-shrink-0 pt-4'>
          <p className='font-bold'>{menu.name}</p>
          <p className='font-bold'>{menu.price}円</p>
        </div>
      </div>
    </Link>
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
  const store: { data: Store; status: string; } = await storeData.json();
  const menuData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/menu?id=${store.data.id}`,
  );
  const menu: { data: Menu[]; status: string; } = await menuData.json();
  return {
    props: {
      store: store.data,
      menu: menu.data,
    },
  };
}
