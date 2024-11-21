import Header from '@/components/owner/Header';
import OwnerLayout from '@/layouts/Owner';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import {
  binaryToLanguages,
  languagesToBinary,
} from '@/utils/binarychange/languages';
import {
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

const languages = [
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

type paymentData = {
  language: string;
};

export default function Payments({ store }: { store: Store; }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<paymentData>();

  const router = useRouter();
  const [lang, setLang] = useState<string[]>([]);

  useEffect(() => {
    if (store.language) {
      setLang(binaryToLanguages(store.language));
    }
  }, [store]);

  const onSubmit = async (data: paymentData) => {
    const load = toast.loading('登録中...');
    try {
      const response = await fetch('/api/store', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          storeId: store.id,
          language: languagesToBinary(lang),
        }),
      });
      const resdata = await response.json();
      if (resdata.error) {
        toast.error(resdata.error, {
          id: load,
        });
      }
      else {
        toast.success('対応言語を登録しました！', {
          id: load,
        });
        router.push('/owner/update');
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
        title='言語 - じもイチ管理画面'
        description='言語 - じもイチ管理画面'
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-white'>
          <h1 className='text-3xl font-bold'>対応している言語</h1>
          <div className='bg-500 h-5'></div>
          <div className='grid gap-2 grid-cols-3'>
            {languages.map(language => (
              <div className='flex gap-3'>
                <input
                  id={language}
                  type='checkbox'
                  className=' h-6 w-6 font-bold'
                  checked={lang.includes(language)}
                  onChange={e => {
                    if (e.target.checked) {
                      setLang([...lang, language]);
                    }
                    else {
                      setLang(lang.filter(item => item !== language));
                    }
                    setValue('language', languagesToBinary(lang));
                  }}
                />
                <label className='text-lg font-bold' htmlFor={language}>
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
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
  const store: { data: Store; status: string; } = await storeData.json();
  if (!store.data) {
    return {
      redirect: {
        destination: '/owner/init',
        permanent: false,
      },
    };
  }
  return {
    props: {
      store: store.data,
    },
  };
}
