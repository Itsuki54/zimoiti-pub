import { ImageUploader } from '@/components/common/ImageUploader';
import Header from '@/components/owner/Header';
import OwnerLayout from '@/layouts/Owner';
import {
  Course,
  Store,
  User,
} from '@prisma/client';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import NextHeadSeo from 'next-head-seo';
import router, { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Select from 'react-select';
import { authOptions } from '../api/auth/[...nextauth]';
type courseData = {
  name: string;
  genre: string;
  description: string;
  image: string | null;
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

export default function AddCourse({
  course,
  store,
}: {
  course: Course[];
  store: Store;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<courseData>();
  const [isOpen, setIsOpen] = useState(false);
  const [genre, setGenre] = useState<string | null>('');

  const onSubmit = async (data: courseData) => {
    const load = toast.loading('登録中...');
    try {
      const response = await fetch('/api/course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          price: Number(data.price),
          genre: genre,
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
        title='メニュー - じもイチ管理画面'
        description='メニュー - じもイチ管理画面'
      />
      {isOpen ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex-col p-4'>
            <div className='flex'>
              <ImageUploader id={''} image={''} option={''} />
              <div className='flex-col p-2'>
                <div className='flex gap-8'>
                  <div className='flex-col '>
                    <p className='text-xl font-bold text-white'>コース名</p>
                    <input
                      type='text'
                      {...register('name')}
                      className='w-60 rounded-xl'
                    />
                  </div>
                </div>
                <div className='mt-8'>
                  <div className='flex-col'>
                    <p className='text-xl font-bold text-white'>価格</p>
                    <input
                      type='number'
                      className='w-25 rounded-xl'
                      {...register('price')}
                    />
                    <label className='text-white font-bold '>円</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-32'></div>
            <div className='flex-col'>
              <h3 className='text-xl font-bold text-white'>ジャンル</h3>
              <Select
                options={genres}
                className='w-60'
                onChange={selected => setGenre(selected!.label)}
              />
            </div>
            <div className='flex-col'>
              <h3 className='text-xl font-bold text-white'>備考</h3>
              <textarea
                className='w-96 h-32 rounded-xl'
                {...register('description')}
              />
            </div>
          </div>
          <button
            type='submit'
            className='my-8 w-full px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
          >
            登録
          </button>
          <button
            className='my-8 w-full px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
            onClick={() => setIsOpen(false)}
          >
            キャンセル
          </button>
        </form>
      ) : (
        <div className='bg-primary h-full my-8'>
          <div className='bg-primary py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
            {course.map(course => <CourseCard key={course.id} course={course} />)}
          </div>
          <button
            className='my-8 w-full px-4 py-2 bg-white text-black font-bold rounded-lg duration-150 hover:opacity-80'
            onClick={() => setIsOpen(true)}
          >
            コースを追加
          </button>
        </div>
      )}
    </OwnerLayout>
  );
}

function CourseCard({ course }: { course: Course; }) {
  const router = useRouter();

  return (
    <div
      className='bg-white p-4 rounded-xl flex flex-col justify-center items-start'
      onClick={() => router.push(`/owner/courseMenu`, { query: { id: course.id } })}
    >
      <div className=''>
        <img
          src={course.image!}
          alt={course.name}
          className='object-cover w-full h-40 rounded'
        />
      </div>
      <div className='flex-shrink-0 pt-4'>
        <p className='font-bold'>{course.name}</p>
        <p className='font-bold'>{course.price}円</p>
      </div>
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
  const courseData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/course?id=${owner.data.storeId}`,
  );
  const course: { data: Course[]; status: string; } = await courseData.json();
  return {
    props: {
      store: store.data,
      course: course.data,
    },
  };
}
