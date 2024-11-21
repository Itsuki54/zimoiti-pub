import Header from '@/components/owner/Header';
import { db } from '@/lib/prisma';
import NextHeadSeo from 'next-head-seo';
import { useForm } from 'react-hook-form';

import { ImageUploader } from '@/components/common/ImageUploader';
import getLocationByAddress from '@/components/common/LocationToAddress';
import OwnerLayout from '@/layouts/Owner';
import { User } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';
import {
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { authOptions } from '../api/auth/[...nextauth]';

interface props {
  ownerId: string;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  genre: string;
  location: string;
  url: string;
  image: string;
};

export default function Init({ ownerId }: props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [image, setImage] = useState<string>('');
  useEffect(() => {
    console.log('image', image);
  }, [image]);
  const onSubmit = async (data: any) => {
    const load = toast.loading('登録中...');
    const geocoded = await getLocationByAddress(data.location);
    try {
      const response = await fetch('/api/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          url: data.url || null,
          image: image || null,
          userId: ownerId,
          lat: geocoded?.lat,
          lng: geocoded?.lng,
        }),
      });
      const resdata = await response.json();
      if (resdata.error) {
        toast.error(resdata.error, {
          id: load,
        });
      }
      else {
        toast.success('店舗を登録しました！', {
          id: load,
        });
        router.push('/owner');
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
        title='店舗登録 - じもイチ管理画面'
        description='店舗登録 - じもイチ管理画面'
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto'>
          <ImageUploader id={ownerId} setImage={setImage} image={image} />
          <div className='flex flex-col'>
            <label className='text-white text-lg font-bold mb-2 mt-4'>
              店名
            </label>
            <input
              className='w-full rounded-lg focus:ring-primary focus:border-primary'
              {...register('name', { required: true })}
            />
            {errors.name && <span className='text-white mt-2'>店名は必須です</span>}
          </div>
          <div className='flex flex-col'>
            <label className='text-white text-lg font-bold mb-2 mt-4'>
              店舗メールアドレス
            </label>
            <input
              className='w-full rounded-lg focus:ring-primary focus:border-primary'
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className='text-white mt-2'>
                店舗メールアドレスは必須です
              </span>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='text-white text-lg font-bold mb-2 mt-4'>
              店舗電話番号
            </label>
            <input
              className='w-full rounded-lg focus:ring-primary focus:border-primary'
              {...register('phone', { required: true })}
            />
            {errors.phone && <span className='text-white mt-2'>店舗電話番号は必須です</span>}
          </div>
          <div className='flex flex-col'>
            <label className='text-white text-lg font-bold mb-2 mt-4'>
              ジャンル
            </label>
            <input
              className='w-full rounded-lg focus:ring-primary focus:border-primary'
              {...register('genre', { required: true })}
            />
            {errors.genre && <span className='text-white mt-2'>ジャンルは必須です</span>}
          </div>
          <div className='flex flex-col'>
            <label className='text-white text-lg font-bold mb-2 mt-4'>
              住所
            </label>
            <input
              className='w-full rounded-lg focus:ring-primary focus:border-primary'
              {...register('location', { required: true })}
            />
            {errors.location && <span className='text-white mt-2'>住所は必須です</span>}
          </div>
          <div className='flex flex-col'>
            <label className='text-white text-lg font-bold mb-2 mt-4'>
              URL
            </label>
            <input
              className='w-full rounded-lg focus:ring-primary focus:border-primary'
              {...register('url')}
            />
          </div>
          <button
            type='submit'
            className='my-8 w-full px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
          >
            登録
          </button>
        </form>
      </div>
    </OwnerLayout>
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
  return {
    props: {
      ownerId: owner.data.id,
    },
  };
};
