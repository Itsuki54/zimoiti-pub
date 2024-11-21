import Header from '@/components/owner/Header';
import OwnerLayout from '@/layouts/Owner';
import NextHeadSeo from 'next-head-seo';
import { useState } from 'react';

export default function qna() {
  const steps = [
    {
      title: '更新箇所はどこですか？',
      type: 'checkbox',
      options: [
        {
          id: 'basic-info',
          title: '店舗情報',
        },
        {
          id: 'eat',
          title: '食事関係',
        },
        {
          id: 'payments',
          title: '決済方法',
        },
      ],
    },
    {
      title: '店舗情報：どの項目を更新しますか？',
      type: 'checkbox',
      options: [
        {
          id: 'store-name',
          title: '店舗名',
        },
        {
          id: 'store-address',
          title: '住所',
        },
        {
          id: 'store-phone',
          title: '電話番号',
        },
      ],
    },
  ];
  const [step, setStep] = useState(1);
  return (
    <OwnerLayout header={<Header />}>
      <NextHeadSeo
        title='一問一答 - じもイチ管理画面'
        description='一問一答 - じもイチ管理画面'
      />
      <div className='max-w-xl mx-auto bg-white p-6 my-8'>
        <h2 className='text-xl font-bold mb-4'>
          Q{step}: {steps[step - 1].title}
        </h2>
        {steps[step - 1].options.map(option => (
          <div key={option.id} className='mb-2 text-lg'>
            <input
              type={steps[step - 1].type}
              id={option.id}
              className='rounded text-primary focus:ring-primary'
            />
            <label className='ml-2' htmlFor={option.id}>
              {option.title}
            </label>
          </div>
        ))}
        <button
          className='my-4 w-full bg-primary text-white px-6 rounded-lg duration-150 hover:opacity-80 text-center py-2.5'
          onClick={e => {
            e.preventDefault();
            if (step === steps.length) {
              return;
            }
            setStep(step + 1);
          }}
        >
          {step === steps.length ? '完了' : '次へ'}
        </button>
      </div>
    </OwnerLayout>
  );
}
