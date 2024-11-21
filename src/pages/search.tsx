import StoreSummary from '@/components/user/StoreSummary';
import Layout from '@/layouts/User';
import { search } from '@/lib/meilisearch';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';
import {
  useEffect,
  useState,
} from 'react';

type SearchItem = {
  id: string;
  name: string;
  furigana: string;
  tags: string;
  image: string;
};

export default function Search({
  items,
  page,
  itemsCount,
}: {
  items: SearchItem[];
  page: number;
  itemsCount: number;
}) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  useEffect(() => {
    if (router.query.keyword) {
      setSearch(router.query.keyword as string);
    }
  }, [router.query.keyword]);
  return (
    <Layout>
      <NextHeadSeo title='検索 - じもイチ' description='検索 - じもイチ' />
      <div className='bg-white p-6 mx-5 my-8'>
        <nav className='text-sm mb-4'>
          <ol className='list-none p-0 inline-flex'>
            <li className='flex items-center'>
              <Link href='/' className='text-gray-500'>
                トップ
              </Link>
              <svg
                className='h-5 w-5 text-gray-500'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M9 5l7 7-7 7'></path>
              </svg>
            </li>
            <li className='flex items-center'>
              <Link href='/search' className='text-gray-500'>
                検索
              </Link>
            </li>
          </ol>
        </nav>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col gap-3'>
            <Link
              href='/search_map'
              className='bg-primary text-white px-6 rounded-lg duration-150 hover:opacity-80 text-center py-2.5'
            >
              地図で検索
            </Link>
            <div>
              <label className='text-lg font-bold' htmlFor='keyword'>
                キーワード
              </label>
              <input
                id='keyword'
                type='text'
                className='w-full rounded-lg focus:ring-primary focus:border-primary'
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    router.push(`/search?keyword=${search}`);
                  }
                }}
              />
            </div>
            <div>
              <label className='text-lg font-bold'>営業時間</label>
              <div className='flex items-center my-1'>
                <input
                  type='radio'
                  id='open'
                  name='business_hours'
                  value='open'
                  className='text-primary mr-2 focus:ring-primary'
                />
                <label htmlFor='open'>営業中</label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='radio'
                  id='close'
                  name='business_hours'
                  value='close'
                  className='text-primary mr-2 focus:ring-primary'
                />
                <label htmlFor='close'>営業時間外</label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='radio'
                  id='time_search'
                  name='business_hours'
                  value='time_search'
                  className='text-primary mr-2 focus:ring-primary'
                />
                <label htmlFor='time_search'>営業時間</label>
              </div>
              <div className='flex items-center gap-1'>
                <input
                  id='start_time'
                  type='time'
                  className='w-full rounded-lg focus:ring-primary focus:border-primary'
                />
                <span>〜</span>
                <input
                  id='end_time'
                  type='time'
                  className='w-full rounded-lg focus:ring-primary focus:border-primary'
                />
              </div>
            </div>
            <div>
              <label className='text-lg font-bold'>店舗情報</label>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  id='smoking'
                  name='store_info'
                  value='smoking'
                  className='text-primary mr-2 focus:ring-primary rounded'
                />
                <label htmlFor='smoking'>喫煙所</label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  id='buffet'
                  name='store_info'
                  value='buffet'
                  className='text-primary mr-2 focus:ring-primary rounded'
                />
                <label htmlFor='buffet'>食べ放題</label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  id='unlimited'
                  name='store_info'
                  value='unlimited'
                  className='text-primary mr-2 focus:ring-primary rounded'
                />
                <label htmlFor='unlimited'>飲み放題</label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  id='bring'
                  name='store_info'
                  value='bring'
                  className='text-primary mr-2 focus:ring-primary rounded'
                />
                <label htmlFor='bring'>持ち込み</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 col-span-1 lg:col-span-2'>
            {items.map(item => (
              <StoreSummary
                id={item.id}
                name={item.name}
                furigana={item.furigana}
                tags={[item.tags]}
                open={true}
                thumbnail={item.image}
                images={['https://picsum.photos/1280/720']}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  await search
    .index('ji_store')
    .updateFilterableAttributes(['light', 'lively', 'mobile', 'wifi']);
  await search
    .index('es_items')
    .updateSortableAttributes(['createdAt', 'updatedAt']);
  await search
    .index('ji_store')
    .updateSearchableAttributes(['name', 'furigana', 'genre']);
  const { keyword, page = 1 } = ctx.query;
  const wh: string[] = [];
  const ct: string[] = [];
  const or: string[] = [];
  const items = await search.index('ji_store').search(keyword as string, {
    attributesToRetrieve: ['id', 'name', 'furigana', 'tags', 'image'],
    attributesToHighlight: [],
    attributesToCrop: [],
    limit: 24 * Number(page),
    offset: 24 * (Number(page) - 1),
  });
  const itemsCount = items.estimatedTotalHits;
  if (!items) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      items: JSON.parse(JSON.stringify(items.hits)),
      itemsCount,
    },
  };
};
