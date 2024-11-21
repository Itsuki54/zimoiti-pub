import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function Footer({ showTitle = true }: { showTitle?: boolean; }) {
  return (
    <header className='bg-white w-full'>
      <div className={twMerge('max-w-7xl mx-auto py-4 px-4')}>
        <div className='flex flex-col md:flex-row gap-3 justify-between text-gray-800'>
          <nav className='flex gap-2'>
            <Link href='/owner'>店舗運営者様向け</Link>
          </nav>
          <p>Copyright &copy; Jimoichi. All Rights Reserved.</p>
        </div>
      </div>
    </header>
  );
}
