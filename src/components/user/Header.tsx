import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { twMerge } from 'tailwind-merge';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Header({ showTitle = true }: { showTitle?: boolean; }) {
  const { data: session, status } = useSession();
  return (
    <header className='w-full bg-white'>
      <div className={twMerge('max-w-7xl mx-auto py-4 px-4')}>
        <div className='flex justify-between items-center h-8'>
          {showTitle ? (
            <Link className='text-2xl font-bold text-gray-800' href='/'>
              じもイチ
            </Link>
          ) : <div></div>}
          <div className='flex'>
            <nav>
              {status === 'loading' ? <Skeleton width={90} height={35} className='block' /> : session ? (
                <Link
                  className='px-4 py-2 bg-primary text-white rounded-lg duration-150 hover:opacity-80'
                  href='/api/auth/signout'
                >
                  ログアウト
                </Link>
              ) : (
                <Link
                  className='px-4 py-2 bg-primary text-white rounded-lg duration-150 hover:opacity-80'
                  href='/signin'
                >
                  ログイン
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
