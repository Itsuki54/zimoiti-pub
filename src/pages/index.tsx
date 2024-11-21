import Footer from '@/components/user/Footer';
import Header from '@/components/user/Header';
import Layout from '@/layouts/User';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  return (
    <Layout home={true} className='h-screen flex flex-col'>
      <NextHeadSeo title='じもイチ' description='じもイチ' />
      <Header showTitle={false} />
      <div className='px-4 flex flex-col flex-grow justify-center items-center text-center'>
        <h1 className='text-5xl font-bold my-8'>じもイチ</h1>
        <div className='max-w-xl flex w-full gap-2 my-8'>
          <input
            type='text'
            className='w-full rounded-lg focus:ring-primary focus:border-primary'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              if (searchText === '') return;
              router.push(`/search?keyword=${searchText}`);
            }}
            className='flex-nowrap flex-shrink-0 bg-primary text-white px-6 rounded-lg duration-150 hover:opacity-80'
          >
            検索
          </button>
        </div>
        <div className='flex gap-3'>
          <Link
            href='/search_map'
            className='flex-nowrap flex-shrink-0 bg-primary text-white px-6 py-2.5 rounded-lg duration-150 hover:opacity-80'
          >
            地図で検索
          </Link>
        </div>
      </div>
      <Footer showTitle={false} />
    </Layout>
  );
}
