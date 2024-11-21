import Layout from '@/layouts/User';
import {
  Course,
  Menu,
  Payment,
  Store,
} from '@prisma/client';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { GetServerSideProps } from 'next/types';
import { useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa6';

type StoreWithPayments = Store & { payments: { id: number; }; };

export default function StoreDetails({
  storeId,
  name,
  furigana,
  tags,
  open,
  thumbnail,
  menu,
  course,
  atmosphere,
  payments,
}: {
  storeId: string;
  name: string;
  furigana: string;
  tags: string[];
  open: boolean;
  thumbnail: string;
  menu: { name: string; price: number; image: string; }[];
  course: { name: string; price: number; image: string; }[];
  atmosphere: { light: number; lively: number; };
  payments?: {
    cash: boolean;
    creditCard: string[];
    electronicMoney: string[];
    qrCode: string[];
  };
}) {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <Layout>
      <NextHeadSeo
        title={`${name} - じもイチ`}
        description={`${name} - じもイチ`}
      />
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
              <Link href={`/store/${storeId}`} className='text-gray-500'>
                {name}
              </Link>
            </li>
          </ol>
        </nav>
        <div className='relative flex flex-col lg:flex-row items-start gap-8 my-6'>
          <img
            src={thumbnail}
            alt={name}
            className='h-48 aspect-video object-cover'
          />
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold my-1'>{name}</h1>
            <p className='text-md text-gray-500 my-1'>{furigana}</p>
            <p className='text-md text-gray-500 my-1'>{tags.join(', ')}</p>
            <p className='text-md text-gray-500 my-1'>
              〇〇県〇〇市〇〇町１−２−３
            </p>
          </div>
          {bookmarked ? (
            <button
              onClick={() => setBookmarked(false)}
              className='absolute top-2 right-2 lg:top-0 lg:right-0 border border-primary rounded-full'
            >
              <FaRegBookmark className='p-3 text-5xl text-primary duration-150 hover:opacity-80' />
            </button>
          ) : (
            <button
              onClick={() => setBookmarked(true)}
              className='absolute top-2 right-2 lg:top-0 lg:right-0 border border-gray-400 rounded-full'
            >
              <FaRegBookmark className='p-3 text-5xl text-gray-400 duration-150 hover:opacity-80' />
            </button>
          )}
        </div>
        <div className='my-6' id='menu'>
          <h2 className='text-2xl font-bold my-1'>メニュー</h2>
          <p>キッズメニュー：あり</p>
          <div className='flex flex-wrap gap-2'>
            {menu.map((m, index) => (
              <div className='flex flex-col my-2'>
                <img
                  src={m.image}
                  alt={m.name}
                  className='aspect-square w-32 object-cover mb-2'
                />
                <p>¥{m.price}</p>
                <p>{m.name}</p>
              </div>
            ))}
          </div>
          <Link
            href={`/store/${storeId}/menu`}
            className='inline-block my-4 bg-primary text-white px-6 rounded-lg duration-150 hover:opacity-80 text-center py-2.5'
          >
            メニューをもっと見る
          </Link>
        </div>
        <div className='my-6' id='course'>
          <h2 className='text-2xl font-bold my-1'>コース</h2>
          <div className='flex flex-wrap gap-2'>
            {course.map((c, index) => (
              <div className='flex flex-col my-2'>
                <img
                  src={c.image}
                  alt={c.name}
                  className='aspect-square w-32 object-cover mb-2'
                />
                <p>¥{c.price}</p>
                <p>{c.name}</p>
              </div>
            ))}
          </div>
          <Link
            href={`/store/${storeId}/course`}
            className='inline-block my-4 bg-primary text-white px-6 rounded-lg duration-150 hover:opacity-80 text-center py-2.5'
          >
            コースをもっと見る
          </Link>
        </div>
        <div className='my-6' id='atmosphere'>
          <h2 className='text-2xl font-bold my-1'>雰囲気</h2>
          <table className='text-lg'>
            <tbody>
              <tr>
                <th className='text-left'>照明</th>
                <td className='text-right'>暗い</td>
                <td className='flex gap-2 my-2 mx-4'>
                  <input
                    type='radio'
                    className='text-primary mr-2 focus:ring-primary'
                    name='light'
                    value='dark'
                    checked={atmosphere.light === 0}
                    disabled
                  />
                  <input
                    type='radio'
                    className='text-primary mr-2 focus:ring-primary'
                    name='light'
                    value='normal'
                    checked={atmosphere.light === 1}
                    disabled
                  />
                  <input
                    type='radio'
                    className='text-primary mr-2 focus:ring-primary'
                    name='light'
                    value='bright'
                    checked={atmosphere.light === 2}
                    disabled
                  />
                </td>
                <td className='text-left'>明るい</td>
              </tr>
              <tr>
                <th className='text-left pr-4'>賑やかさ</th>
                <td className='text-right'>賑やか</td>
                <td className='flex gap-2 my-2 mx-4'>
                  <input
                    type='radio'
                    className='text-primary mr-2 focus:ring-primary'
                    name='lively'
                    value='lively'
                    checked={atmosphere.lively === 0}
                    disabled
                  />
                  <input
                    type='radio'
                    className='text-primary mr-2 focus:ring-primary'
                    name='lively'
                    value='normal'
                    checked={atmosphere.lively === 1}
                    disabled
                  />
                  <input
                    type='radio'
                    className='text-primary mr-2 focus:ring-primary'
                    name='lively'
                    value='quiet'
                    checked={atmosphere.lively === 2}
                    disabled
                  />
                </td>
                <td className='text-left'>静か</td>
              </tr>
            </tbody>
          </table>
        </div>
        {payments && (
          <div className='my-6' id='payments'>
            <h2 className='text-2xl font-bold my-1'>決済方法</h2>
            {payments.cash && <h3 className='text-xl font-bold my-2'>現金</h3>}
            {payments.creditCard && (
              <>
                <h3 className='text-xl font-bold my-2'>クレジットカード</h3>
                <p>{payments.creditCard.join(', ')}</p>
              </>
            )}
            {payments.electronicMoney && (
              <>
                <h3 className='text-xl font-bold my-2'>クレジットカード</h3>
                <p>{payments.electronicMoney.join(', ')}</p>
              </>
            )}
            {payments.qrCode && (
              <>
                <h3 className='text-xl font-bold my-2'>QRコード決済</h3>
                <p>{payments.qrCode.join(', ')}</p>
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { storeId } = ctx.query;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/store?id=${storeId}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const store: { status: string; data: StoreWithPayments; } = await res.json();
  console.log(store);
  const menures = await fetch(
    `${process.env.NEXTAUTH_URL}/api/menu?id=${storeId}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const menu: { status: string; data: Menu[]; } = await menures.json();
  const courseres = await fetch(
    `${process.env.NEXTAUTH_URL}/api/course?id=${storeId}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const course: { status: string; data: Course[]; } = await courseres.json();
  console.log(store.data);
  /*const paymentsres = await fetch(
    `${process.env.NEXTAUTH_URL}/api/payment?id=${store.data.payments.id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  //const payments: { status: string; data: Payment } = await paymentsres.json();
  */
  return {
    props: {
      storeId,
      name: store.data.name,
      furigana: store.data.furigana,
      tags: store.data.tags?.split(', ') || [],
      open: false,
      thumbnail: store.data.image,
      menu: menu.data,
      course: course.data,
      atmosphere: {
        light: store.data.light,
        lively: store.data.lively,
      },
      // PaymentsをPropsの型に変換する関数が必要
      payments: null,
    },
  };
};
