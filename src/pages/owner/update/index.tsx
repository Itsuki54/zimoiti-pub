import Header from '@/components/owner/Header';
import { RadioButton } from '@/components/owner/RadioButton';
import OwnerLayout from '@/layouts/Owner';
import {
  Menu,
  Store,
  User,
} from '@prisma/client';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import NextHeadSeo from 'next-head-seo';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  SetStateAction,
  use,
  useEffect,
  useState,
} from 'react';
import {
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import { authOptions } from '../../api/auth/[...nextauth]';
import store from '../../api/store';

const JoyRideNoSSR = dynamic(() => import('react-joyride'), { ssr: false });

export enum Option {
  TYME = 'time',
  NUMBER = 'number',
}

const languages: string[] = [
  '英語',
  'アラビア語',
  'ヒンディー語',
  '中国語',
  'フランス語',
  'インドネシア語',
  'スペイン語',
  'ドイツ語',
  '韓国語',
];

type StoreData = {
  name: string;
  addressId?: string;
  phone: string;
  email: string;
  genre: string;
  url?: string;
  image?: string;
  barrier: boolean;
  light: number;
  lively: number;
  location?: string;
  language?: string; // 2進数
  birthday: boolean;
  mobile: boolean;
  wifi: boolean;
  pet: boolean;
  takeout: boolean;
  smoking: boolean;
  stamp: boolean;
  point: boolean;
  invoice: boolean;
  kids: boolean;
  freeDrink: boolean;
  reservation: boolean;
  otoshi: number;
  serviceFee: number;
  bring: boolean;
  morning: boolean;
  lunch: boolean;
  dinner: boolean;
  unlimited: number;
  buffet: number;
  outlet: boolean;
  projector: boolean;
};

interface BooleanOptions {
  barrier: boolean;
  birthday: boolean;
  mobile: boolean;
  wifi: boolean;
  pet: boolean;
  takeout: boolean;
  smoking: boolean;
  stamp: boolean;
  point: boolean;
  invoice: boolean;
  kids: boolean;
}

type StoreWithCourses = Store & { courses: Menu[]; };

export default function Update({
  store,
  owner,
}: {
  store: StoreWithCourses;
  owner: User;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<StoreData>();
  const joyrideLocale = {
    back: '戻る',
    close: '閉じる',
    last: '完了',
    next: '次へ',
    skip: 'スキップ',
  };
  const steps = [
    {
      target: '#basic-info',
      content: '店舗の基本情報を確認しましょう。',
      placementBeacon: 'top-start',
      locale: joyrideLocale,
    },
    {
      target: '#eat',
      content: 'メニュー情報などを追加しましょう。',
      placementBeacon: 'top-start',
      locale: joyrideLocale,
    },
  ];

  const onSubmit: SubmitHandler<StoreData> = async data => {
    const loading = toast.loading('保存中...');
    if (!data.name || !data.phone || !data.email || !data.genre) {
      toast.error('必須項目を入力してください。', {
        id: loading,
      });
      return;
    }
    const res = await fetch('/api/store', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        storeId: store.id,
        userId: owner.id,
      }),
    });
    const result = await res.json();
    if (res.status === 200) {
      toast.success('保存しました。', {
        id: loading,
      });
    }
    else {
      toast.error('エラーが発生しました。', {
        id: loading,
      });
    }
  };

  useEffect(() => {
    if (store) {
      setValue('name', store.name);
      setValue('phone', store.phone);
      setValue('email', store.email);
      setValue('genre', store.genre);
      setValue('url', store.url || '');
      setValue('barrier', store.barrier);
      setValue('light', store.light);
      setValue('lively', store.lively);
      setValue('birthday', store.birthday);
      setValue('mobile', store.mobile);
      setValue('wifi', store.wifi);
      setValue('pet', store.pet);
      setValue('takeout', store.takeout);
      setValue('smoking', store.smoking);
      setValue('stamp', store.stamp);
      setValue('point', store.point);
      setValue('invoice', store.invoice);
      setValue('kids', store.kids);
      setValue('freeDrink', store.freeDrink);
      setValue('reservation', store.reservation);
      setValue('otoshi', store.otoshi);
      setValue('serviceFee', store.serviceFee);
      setValue('bring', store.bring);
      setValue('morning', store.morning);
      setValue('lunch', store.lunch);
      setValue('dinner', store.dinner);
      setValue('unlimited', store.unlimited);
      setValue('buffet', store.buffet);
      setValue('outlet', store.outlet);
    }
  }, [store]);

  const [isCourse, setIsCourse] = useState(store.courses.length > 0);
  return (
    <OwnerLayout header={<Header />}>
      <NextHeadSeo
        title='更新 - じもイチ管理画面'
        description='更新 - じもイチ管理画面'
      />
      <JoyRideNoSSR
        // @ts-ignore
        steps={steps}
        run={!owner.readTutorial}
        continuous
        showProgress
        callback={async data => {
          if (data.status === 'finished') {
            await fetch('/api/user', {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: owner.id,
                readTutorial: true,
              }),
            });
          }
        }}
      />
      <div className='fixed bottom-0 left-0 right-0 max-w-7xl mx-auto px-8 py-4 bg-white rounded-t text-primary shadow-lg flex items-center justify-end'>
        <button
          className='bg-primary text-white font-bold rounded-lg px-4 py-2 duration-150 hover:opacity-80'
          onClick={handleSubmit(onSubmit)}
        >
          保存
        </button>
      </div>
      <div className='p-4 text-white'>
        <div id='basic-info'>
          <h1 className='text-3xl font-bold my-4'>店舗情報</h1>
          <div className='flex gap-8 items-center justify-start my-4'>
            <div className='flex flex-col gap-1'>
              <text className='text-lg font-bold'>店名</text>
              <input
                className='text-black h-8 rounded-md w-60 font-bold'
                defaultValue={store.name}
                {...register('name')}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <text className='text-lg font-bold'>ジャンル</text>
              <input
                className='text-black h-8 rounded-md w-60 font-bold'
                defaultValue={store.genre}
                {...register('genre')}
              />
            </div>
          </div>
          <div className='flex gap-8 items-center justify-start my-4'>
            <div className='flex flex-col gap-1'>
              <text className='text-lg font-bold'>住所</text>
              <input
                className='text-black h-8 rounded-md w-60 font-bold'
                {...register('addressId')}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <text className='text-lg font-bold'>電話番号</text>
              <input
                type='tel'
                className='text-black h-8 rounded-md w-60 font-bold'
                defaultValue={store.phone}
                {...register('phone')}
              />
            </div>
          </div>
          <div className='flex gap-8 items-center justify-start my-4'>
            <div className='flex flex-col gap-1'>
              <text className='text-lg font-bold'>メールアドレス</text>
              <input
                type='email'
                className='text-black h-8 rounded-md w-60 font-bold'
                value={store.email}
                {...register('email')}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <text className='text-lg font-bold'>URL</text>
              <input
                className='text-black h-8 rounded-md w-60 font-bold'
                defaultValue={store.url || ''}
                {...register('url')}
              />
            </div>
          </div>
          <div className='flex gap-8 items-center justify-start my-4'>
            <div className='flex flex-col gap-1'>
              <text className='text-lg font-bold'>画像</text>
              <input
                className='text-black h-8 rounded-md w-60 font-bold'
                defaultValue={store.image || ''}
                {...register('image')}
              />
            </div>
          </div>
        </div>
        <div id='eat'>
          <h1 className='text-3xl font-bold mt-8 mb-4'>お食事関係</h1>
          <RadioSelect
            label='キッズメニュー'
            className='my-6'
            setSelected={(value: boolean) => setValue('kids', value)}
            defaultValue={store.kids}
          />
          <Link
            href='/owner/menu'
            className='px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
          >
            メニュー一覧を見る
          </Link>
          <RadioSelect
            label='コース料理'
            className='my-6'
            setSelected={(value: boolean) => setIsCourse(value)}
            defaultValue={isCourse}
          />
          {isCourse && (
            <Link
              href='/owner/course'
              className='px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
            >
              コース料理を見る
            </Link>
          )}
          <div className='flex-col'>
            <div className='flex my-6 gap-6'>
              <RadioSelect
                label='持ち込み'
                className='flex-col'
                setSelected={(value: boolean) => setValue('bring', value)}
                defaultValue={store.bring}
              />
              <RadioSelect
                label='持ち帰り'
                className='flex-col'
                setSelected={(value: boolean) => setValue('takeout', value)}
                defaultValue={store.takeout}
              />
            </div>
            <div className='flex my-6 gap-6'>
              <RadioSelect
                label='無料ドリンク'
                className='flex-col'
                setSelected={(value: boolean) => setValue('freeDrink', value)}
                defaultValue={store.freeDrink}
              />
              <RadioSelect
                label='予約'
                className='flex-col'
                setSelected={(value: boolean) => setValue('reservation', value)}
                defaultValue={store.reservation}
              />
            </div>
            <div className='flex my-6 gap-6'>
              <Input
                label='飲み放題'
                option={Option.NUMBER}
                unit='分'
                className='flex-col'
                setInputValue={(value: number) => setValue('unlimited', value)}
              />
              <Input
                label='食べ放題'
                option={Option.NUMBER}
                unit='分'
                className='flex-col'
                setInputValue={(value: number) => setValue('buffet', value)}
              />
            </div>
            <div className='flex my-6 gap-6'>
              <Input
                label='お通し'
                option={Option.NUMBER}
                unit='円'
                className='flex-col'
                setInputValue={(value: number) => setValue('otoshi', value)}
              />
              <Input
                label='サービス料'
                option={Option.NUMBER}
                unit='%'
                className='flex-col'
                setInputValue={(value: number) => setValue('serviceFee', value)}
              />
            </div>
          </div>
        </div>
        <div className='py-4'>
          <div className='bg-500 h-5'></div>
          <h1 className='text-3xl font-bold '>店内関係</h1>
          <div className='bg-500 h-5'></div>
          <div className='py-3'>
            <h3 className='text-lg font-bold'>営業時間</h3>
            <TimeInput label='月曜日' option='time' className='my-4' />
            <TimeInput label='火曜日' option='time' className='my-4' />
            <TimeInput label='水曜日' option='time' className='my-4' />
            <TimeInput label='木曜日' option='time' className='my-4' />
            <TimeInput label='金曜日' option='time' className='my-4' />
            <TimeInput label='土曜日' option='time' className='my-4' />
            <TimeInput label='日曜日' option='time' className='my-4' />
            <RadioSelect
              label='モーニング'
              className='my-4 flex-col'
              defaultValue={store.morning}
              setSelected={(value: boolean) => setValue('morning', value)}
            />
            <RadioSelect
              label='ランチ'
              className='my-4 flex-col'
              defaultValue={store.lunch}
              setSelected={(value: boolean) => setValue('lunch', value)}
            />
            <RadioSelect
              label='ディナー'
              className='my-4 flex-col'
              defaultValue={store.dinner}
              setSelected={(value: boolean) => setValue('dinner', value)}
            />
          </div>
          <div className='py-3'>
            <div className='flex mb-6 gap-6'>
              <Input
                label='席数'
                option={Option.NUMBER}
                unit='席'
                className='flex-col'
              />
              <Input
                label='個室数'
                option={Option.NUMBER}
                unit='数'
                className='flex-col'
              />
            </div>
            <div className='flex my-6 gap-6'>
              <RadioSelect label='トイレ' className='flex-col' />
              <RadioSelect label='男女別' className='flex-col' />
            </div>
            <div className='flex my-6 gap-6'>
              <RadioSelect label='洋式' className='flex-col' />
              <RadioSelect label='和式' className='flex-col' />
            </div>
            <div className='flex my-6 gap-6'>
              <RadioSelect label='多目的' className='flex-col' />
              <RadioSelect label='ウォシュレット' className='flex-col' />
            </div>
          </div>
          <div className='py-3'>
            <h3 className='text-lg font-bold'>バリアフリー</h3>
            <div className='flex my-6 gap-6'>
              <RadioSelect label='手すり' className='flex-col' />
              <RadioSelect label='スロープ' className='flex-col' />
            </div>

            <div className='flex  items-center gap-4'>
              <h2 className='text-lg font-bold '>雰囲気</h2>
              <div className='flex-col gap-1'>
                <div className='flex gap-1 items-center'>
                  <div className='flex w-40 justify-between'>
                    <h2 className='text-l font-bold '>照明</h2>
                    <h2 className='text-l font-bold '>暗</h2>
                  </div>
                  <RadioButton
                    label=''
                    value='yes'
                    checked={watch('light') === 0}
                    onChange={value => {
                      setValue('light', 0);
                    }}
                  />
                  <RadioButton
                    label=''
                    value='no'
                    checked={watch('light') === 1}
                    onChange={value => {
                      setValue('light', 1);
                    }}
                  />
                  <RadioButton
                    label=''
                    value='no'
                    checked={watch('light') === 2}
                    onChange={value => {
                      setValue('light', 2);
                    }}
                  />
                  <h2 className='text-l font-bold '>明</h2>
                </div>
                <div className='bg-500 h-5'></div>

                <div className='flex gap-1 items-center'>
                  <div className='flex w-40 justify-between'>
                    <h2 className='text-l font-bold '>賑やかさ</h2>
                    <h2 className='text-l font-bold '>静か</h2>
                  </div>{' '}
                  <RadioButton
                    label=''
                    value='yes'
                    checked={watch('lively') === 0}
                    onChange={value => {
                      setValue('lively', 0);
                    }}
                  />
                  <RadioButton
                    label=''
                    value='no'
                    checked={watch('lively') === 1}
                    onChange={value => {
                      setValue('lively', 1);
                    }}
                  />
                  <RadioButton
                    label=''
                    value='no'
                    checked={watch('lively') === 2}
                    onChange={value => {
                      setValue('lively', 2);
                    }}
                  />
                  <h2 className='text-l font-bold '>賑やか</h2>
                </div>
              </div>
            </div>
            <div className='bg-500 h-5'></div>
            <Link
              href='/owner/update/languages'
              className='px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
            >
              言語対応の設定を開く
            </Link>
            <div className='bg-500 h-8'></div>

            <div className='flex-col gap-1'>
              <RadioSelect
                label='利用できるコンセント'
                setSelected={(value: boolean) => setValue('outlet', value)}
                defaultValue={store.outlet}
              />
              <div className='bg-500 h-5'></div>
              <RadioSelect
                label='バースデーサービス'
                setSelected={(value: boolean) => setValue('birthday', value)}
                defaultValue={store.birthday}
              />
              <div className='bg-500 h-5'></div>
              <RadioSelect
                label='ペットの入店可'
                setSelected={(value: boolean) => setValue('pet', value)}
                defaultValue={store.pet}
              />
              <div className='bg-500 h-5'></div>
              <RadioSelect
                label='プロジェクター'
                setSelected={(value: boolean) => setValue('projector', value)}
                defaultValue={store.projector}
              />
              <div className='bg-500 h-5'></div>
              <RadioSelect
                label='喫煙'
                setSelected={(value: boolean) => setValue('smoking', value)}
                defaultValue={store.smoking}
              />
            </div>
            <div className='bg-500 h-5'></div>
            <div>
              <h1 className='text-3xl font-bold '>店外関係</h1>
              <div className='bg-500 h-5'></div>
              <div className='flex gap-1'>
                <text className='text-lg font-bold '>立地</text>
                <input className='text-black h-8 rounded-md w-32 font-bold' />
              </div>
              <div>
                <div className='bg-500 h-5'></div>
                <Link
                  href='/owner/update/parkings'
                  className='px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
                >
                  駐車場の設定を開く
                </Link>
              </div>
            </div>
            <div className='bg-500 h-5'></div>

            <div className='flex-col gap-1 mb-20'>
              <h1 className='text-3xl font-bold my-4'>支払い関係</h1>
              <div className='bg-500 h-5'></div>
              <Link
                href='/owner/update/payments'
                className='px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
              >
                支払い方法の設定を開く
              </Link>
              <div className='my-4 flex flex-col'>
                <div className='flex my-6 gap-6'>
                  <RadioSelect
                    label='モバイルオーダー'
                    className='flex flex-col'
                    setSelected={(value: boolean) => setValue('mobile', value)}
                    defaultValue={store.mobile}
                  />
                  <RadioSelect
                    label='ポイントカード'
                    className='flex flex-col'
                    setSelected={(value: boolean) => setValue('point', value)}
                    defaultValue={store.point}
                  />
                </div>
                <div className='flex my-6 gap-6'>
                  <RadioSelect
                    label='スタンプカード'
                    className='flex flex-col'
                    setSelected={(value: boolean) => setValue('stamp', value)}
                    defaultValue={store.stamp}
                  />
                  <RadioSelect
                    label='レシート発行'
                    className='flex flex-col'
                    setSelected={(value: boolean) => setValue('invoice', value)}
                    defaultValue={store.invoice}
                  />
                </div>
                <div className='flex my-6 gap-6'>
                  <RadioSelect
                    label='領収書発行'
                    className='flex flex-col'
                    setSelected={(value: boolean) => setValue('invoice', value)}
                    defaultValue={store.invoice}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwnerLayout>
  );
}

export function RadioSelect({
  label,
  yes,
  no,
  className,
  defaultValue,
  setSelected,
}: {
  label: string;
  yes?: string;
  no?: string;
  className?: string;
  defaultValue: boolean;
  setSelected: Function;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={twMerge('flex gap-1', className)}>
      <h2 className='text-lg font-bold'>{label}</h2>
      <div className='flex flex-row'>
        <RadioButton
          label={yes || 'あり'}
          value='yes'
          checked={value}
          onChange={() => {
            setSelected(true);
            setValue(true);
          }}
        />
        <RadioButton
          label={no || 'なし'}
          value='no'
          checked={!value}
          onChange={() => {
            setSelected(false);
            setValue(false);
          }}
        />
      </div>
    </div>
  );
}

export function Input({
  label,
  option,
  unit,
  className,
  defaultValue,
  setInputValue,
}: {
  label: string;
  option: Option;
  unit?: string;
  className?: string;
  defaultValue?: number;
  setInputValue: Function;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={twMerge('flex', className)}>
      <RadioSelect
        label={label}
        className='flex-col mb-4'
        defaultValue={!!value}
        setSelected={(value: boolean) => {
          if (value) {
            setValue(0);
          }
          else {
            setValue(undefined);
            setInputValue(undefined);
          }
        }}
      />
      <div className='flex gap-1 justify-between'>
        <div className='gap-1'>
          <input
            type={option}
            className='text-black h-8 rounded-md w-32 font-bold bg-white disabled:bg-gray-400'
            disabled={value === undefined}
            defaultValue={value}
            onChange={e => {
              setValue(parseInt(e.target.value));
              setInputValue(parseInt(e.target.value));
            }}
          />
          {unit && <text className='ml-2 font-bold'>{unit}</text>}
        </div>
      </div>
    </div>
  );
}

export function TimeInput({
  label,
  option,
  className,
}: {
  label: string;
  option: string;
  className?: string;
}) {
  return (
    <div className={twMerge('flex', className)}>
      <RadioSelect label={label} yes='営業' no='休み' />
      <input
        type={option}
        className='text-black h-8 rounded-md w-32 font-bold'
      />
      <text className='font-bold px-3 justify-center items-center'>〜</text>
      <input
        type={option}
        className='text-black h-8 rounded-md w-32 font-bold'
      />
    </div>
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
  return {
    props: {
      store: store.data,
      owner: owner.data,
    },
  };
}
