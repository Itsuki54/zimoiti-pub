import Footer from '@/components/user/Footer';
import Header from '@/components/user/Header';
import { Noto_Sans_JP } from 'next/font/google';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function Layout({
  home = false,
  className,
  children,
}: {
  home?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={home ? 'bg-white' : 'bg-primary'}>
      <Toaster position='bottom-right' />
      <style jsx global>
        {`
          :root {
            --notojp-font: ${notoSansJP.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col'>
        {!home && <Header />}
        <main
          className={twMerge(
            className,
            'max-w-7xl w-full mx-auto min-h-screen',
            !home && 'px-4',
          )}
        >
          {children}
        </main>
        {!home && <Footer />}
      </div>
    </div>
  );
}
