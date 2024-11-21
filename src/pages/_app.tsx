import '@/styles/globals.css';
import { APIProvider } from '@vis.gl/react-google-maps';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
        <Component {...pageProps} />
      </APIProvider>
    </SessionProvider>
  );
}
