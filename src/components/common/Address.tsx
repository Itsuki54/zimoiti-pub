import { useForm } from 'react-hook-form';

type address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export default function Address(storeId: string) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<address>();

  function onSubmit(data: address) {
    fetch('/api/address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        storeId: storeId,
      }),
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='street'
          {...register('street', { required: true })}
        />
        <input
          type='text'
          placeholder='city'
          {...register('city', { required: true })}
        />
        <input
          type='text'
          placeholder='state'
          {...register('state', { required: true })}
        />
        <input
          type='text'
          placeholder='zip'
          {...register('zip', { required: true })}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
