import Layout from '@/layouts/User';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      }
      else {
        toast.success('ユーザーを作成しました！');
        router.push('/signin?redirected=true');
      }
    }
    catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError('An error occurred');
    }
  };

  return (
    <Layout>
      <NextHeadSeo
        title='新規登録 - じもイチ'
        description='新規登録 - じもイチ'
      />
      <form
        onSubmit={handleSignUp}
        className='max-w-xl mx-auto bg-white p-6 my-8'
      >
        <h1 className='text-2xl font-bold mb-8'>新規登録</h1>
        {error && <p className='my-2 text-red-500'>{error}</p>}
        <div className='mb-4'>
          <label className='text-lg font-bold' htmlFor='email'>
            メールアドレス
          </label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full rounded-lg focus:ring-primary focus:border-primary'
          />
        </div>
        <div className='mb-4'>
          <label className='text-lg font-bold' htmlFor='password'>
            パスワード
          </label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='w-full rounded-lg focus:ring-primary focus:border-primary'
          />
        </div>
        <button
          type='submit'
          className='bg-primary text-white w-full rounded-lg duration-150 hover:opacity-80 text-center py-2.5'
        >
          登録
        </button>
        <p className='mt-4 text-center'>
          <Link href='/signin' className='text-primary'>
            ログインはこちら
          </Link>
        </p>
      </form>
    </Layout>
  );
}
