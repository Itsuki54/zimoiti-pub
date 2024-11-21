import Header from '@/components/owner/Header';
import OwnerLayout from '@/layouts/Owner';
import {
  Store,
  User,
} from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { IoStorefrontSharp } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { MdAnalytics } from 'react-icons/md';
import { MdHomeWork } from 'react-icons/md';
import { TbReload } from 'react-icons/tb';
import { authOptions } from '../api/auth/[...nextauth]';

interface props {
  owner: User;
  store: Store;
}

export default function App({ owner, store }: props) {
  return (
    <OwnerLayout
      header={<Header />}
      children={<OwnerManegement owner={owner} store={store} />}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
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
};

const OwnerManegement = ({ owner, store }: { owner: User; store: Store; }) => {
  return (
    <div className='text-white p-10 flex-col min-h-screen'>
      <NextHeadSeo title='じもイチ管理画面' description='じもイチ管理画面' />
      <div>
        <h1 className='text-3xl font-bold mb-6'>{store.name}</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <SettingCard
            icon={<TbReload size={80} color='black' />}
            title='更新'
            path='/owner/update'
          />
          <SettingCard
            icon={<IoStorefrontSharp size={80} color='black' />}
            title='店舗情報'
            path='/owner/'
          />
          <SettingCard
            icon={<MdAnalytics size={80} color='black' />}
            title='アナリティクス'
            path='/owner/'
          />
          <SettingCard
            icon={<FaUser size={80} color='black' />}
            title='ユーザー情報'
            path='/owner/'
          />
          <SettingCard
            icon={<MdHomeWork size={80} color='black' />}
            title='店舗切り替え'
            path='/owner/'
          />
          <SettingCard
            icon={<LuLogOut size={80} color='black' />}
            title='ログアウト'
            path='/api/auth/signout'
          />
        </div>
      </div>
    </div>
  );
};

function SettingCard({
  icon,
  title,
  path,
}: {
  icon: React.ReactNode;
  title: string;
  path: string;
}) {
  return (
    <Link
      href={path}
      className='bg-white px-2 py-4 font-bold flex flex-col items-center justify-center text-black rounded-3xl duration-150 hover:opacity-80'
    >
      <div className='flex justify-center items-center'>{icon}</div>
      <div className='font-extrabold text-2xl mt-8'>{title}</div>
    </Link>
  );
}
