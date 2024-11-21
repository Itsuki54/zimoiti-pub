import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface OwnerLayoutProps {
  header: ReactNode;

  children: ReactNode;
}

export default function OwnerLayout({ header, children }: OwnerLayoutProps) {
  return (
    <div className='bg-primary min-h-screen'>
      <Toaster position='bottom-right' />
      <header>{header}</header>
      <main className='max-w-7xl px-4 mx-auto'>{children}</main>
    </div>
  );
}
