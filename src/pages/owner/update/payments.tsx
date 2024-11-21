import Header from '@/components/owner/Header';
import OwnerLayout from '@/layouts/Owner';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import {
  binaryToCard,
  binaryToQRPayments,
  cardToBinary,
  qrPaymentsToBinary,
} from '@/utils/binarychange/payments';
import {
  Payment,
  Prisma,
  Store,
  User,
} from '@prisma/client';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  useEffect,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';

const creditCards = [
  'VISA',
  'Mastercard',
  'JCB',
  'American Express',
  'Diners Club',
  'Discover',
  'UnionPay',
];

const mobilePayments = [
  'LINE Pay',
  'PayPay',
  '楽天ペイ',
  'd払い',
  'メルペイ',
  'au PAY',
];

type paymentData = {
  card: '';
  cash: false;
  QR: '';
  transit: false;
  IDPay: false;
  QuickPay: false;
  Nanaco: false;
  Edy: false;
  WAON: false;
  Pitapa: false;
  UNIONPAY: false;
};

type StoreWithPayment = Prisma.StoreGetPayload<{
  include: {
    payments: true;
  };
}>;

export default function Payments({
  store,
  payment,
}: {
  store: StoreWithPayment;
  payment?: Payment;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<paymentData>();

  const router = useRouter();
  const [cards, setCards] = useState<string[]>([]);
  const [qr, setQR] = useState<string[]>([]);

  useEffect(() => {
    if (payment) {
      setQR(binaryToQRPayments(payment.QR));
      setCards(binaryToCard(payment.card));
    }
  }, [payment]);

  const onSubmit = async (data: paymentData) => {
    const load = toast.loading('登録中...');
    try {
      if (payment) {
        const response = await fetch('/api/payment', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            card: cardToBinary(cards),
            QR: qrPaymentsToBinary(qr),
            paymentId: payment.id,
          }),
        });
        const resdata = await response.json();
        if (resdata.error) {
          toast.error(resdata.error, {
            id: load,
          });
        }
        else {
          toast.success('お支払い方法を登録しました！', {
            id: load,
          });
          router.push('/owner/update');
        }
      }
      else {
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            card: cardToBinary(cards),
            QR: qrPaymentsToBinary(qr),
            storeId: store.id,
          }),
        });
        const resdata = await response.json();
        if (resdata.error) {
          toast.error(resdata.error, {
            id: load,
          });
        }
        else {
          toast.success('お支払い方法を登録しました！', {
            id: load,
          });
          router.push('/owner/update');
        }
      }
    }
    catch (error) {
      toast.error('エラーが発生しました', {
        id: load,
      });
      console.error('Error creating entity:', error);
    }
  };
  return (
    <OwnerLayout header={<Header />}>
      <NextHeadSeo
        title='支払い方法 - じもイチ管理画面'
        description='支払い方法 - じもイチ管理画面'
      />
      <Link
        href='/owner/update'
        className='text-white flex flex-row items-center my-4 gap-2'
      >
        <IoIosArrowBack className='text-white' size={25} />
        店舗情報変更
      </Link>
      <div className='fixed bottom-0 left-0 right-0 max-w-7xl mx-auto px-8 py-4 bg-white rounded-t text-primary shadow-lg flex items-center justify-end'>
        <button
          className='bg-primary text-white font-bold rounded-lg px-4 py-2 duration-150 hover:opacity-80'
          onClick={handleSubmit(onSubmit)}
        >
          保存
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-white'>
          <div className='flex items-center gap-3'>
            <input
              id='cash'
              type='checkbox'
              className='h-6 w-6 font-bold'
              {...register('cash')}
            />
            <label className='text-lg font-bold' htmlFor='cash'>
              現金
            </label>
          </div>
          <div className='bg-500 h-5'></div>
          <h1 className='text-2xl font-bold '>クレジットカード</h1>
          <div className='bg-500 h-5'></div>
          <div className='grid gap-2 grid-cols-3'>
            {creditCards.map(card => (
              <div className='flex items-center gap-3'>
                <input
                  id={card}
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  checked={cards.includes(card)}
                  onChange={e => {
                    if (e.target.checked) {
                      setCards([...cards, card]);
                    }
                    else {
                      setCards(cards.filter(c => c !== card));
                    }
                  }}
                />
                <label className='text-lg font-bold' htmlFor={card}>
                  {card}
                </label>
              </div>
            ))}
          </div>
          <div className='bg-500 h-5'></div>
          <div className='flex-col gap-1'>
            <h1 className='text-2xl font-bold'>モバイル決済</h1>
            <div className='bg-500 h-5'></div>
            <div className='grid gap-2 grid-cols-3'>
              {mobilePayments.map(payment => (
                <div className='flex items-center gap-3'>
                  <input
                    id={payment}
                    type='checkbox'
                    className='h-6 w-6 font-bold'
                    checked={qr.includes(payment)}
                    onChange={e => {
                      if (e.target.checked) {
                        setQR([...qr, payment]);
                      }
                      else {
                        setQR(qr.filter(q => q !== payment));
                      }
                    }}
                  />
                  <label className='text-lg font-bold' htmlFor={payment}>
                    {payment}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-500 h-5'></div>
          <div className='flex-col gap-1'>
            <h1 className='text-2xl font-bold '>電子マネー</h1>
            <div className='bg-500 h-5'></div>
            <div className='grid gap-2 grid-cols-3'>
              <div className='flex items-center gap-3'>
                <input
                  id='transit'
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  {...register('transit')}
                />
                <label className='text-lg font-bold' htmlFor='transit'>
                  交通系IC
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id='nanaco'
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  {...register('Nanaco')}
                />
                <label className='text-lg font-bold' htmlFor='nanaco'>
                  nanaco
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id='edy'
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  {...register('Edy')}
                />
                <label className='text-lg font-bold' htmlFor='edy'>
                  楽天Edy
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id='quicpay'
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  {...register('QuickPay')}
                />
                <label className='text-lg font-bold' htmlFor='quicpay'>
                  QUICPay
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id='pitapa'
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  {...register('Pitapa')}
                />
                <label className='text-lg font-bold' htmlFor='pitapa'>
                  PiTaPa
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id='waon'
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  {...register('WAON')}
                />
                <label className='text-lg font-bold' htmlFor='waon'>
                  WAON
                </label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  id='IDPay'
                  type='checkbox'
                  className='h-6 w-6 font-bold'
                  {...register('IDPay')}
                />
                <label className='text-lg font-bold' htmlFor='IDPay'>
                  iD
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </OwnerLayout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/owner/signin',
        permanent: false,
      },
    };
  }
  if (session.user.type !== 'OWNER') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/user?id=${session.user.uid}`,
  );
  if (res.status !== 200) {
    return {
      redirect: {
        destination: '/owner/signin',
        permanent: false,
      },
    };
  }
  const owner: { data: User; status: string; } = await res.json();
  if (!owner.data.storeId) {
    return {
      redirect: {
        destination: '/owner/init',
        permanent: false,
      },
    };
  }
  const storeData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/store?id=${owner.data.storeId}`,
  );
  const store: { data: StoreWithPayment; status: string; } = await storeData.json();
  if (!store.data) {
    return {
      redirect: {
        destination: '/owner/init',
        permanent: false,
      },
    };
  }
  if (!store.data.payments) {
    return {
      props: {
        store: store.data,
        payment: null,
      },
    };
  }
  const payment = await fetch(
    `${process.env.NEXTAUTH_URL}/api/payment?id=${store.data.payments.id}`,
  );
  const paymentData: { data: Payment; status: string; } = await payment.json();
  if (!paymentData.data) {
    return {
      props: {
        store: store.data,
        payment: null,
      },
    };
  }
  return {
    props: {
      store: store.data,
      payment: paymentData.data,
    },
  };
}
