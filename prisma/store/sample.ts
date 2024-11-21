import {
  Address,
  Setting,
  Store,
} from '@prisma/client';

export const sampleOwner: Owner = {
  id: 'sample-owner-1',
  email: 'sample-owner-1',
  name: 'sample-owner-1',
  password: 'sample-owner-password-1',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'sample-setting-1',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'sample-store-1',
  name: 'sample-store-1',

  phone: '000-0000-0000',
  email: '',
  genre: '',
  url: null,
  image: null,

  barrier: false,
  light: 0,
  lively: 0,
  location: '',
  language: '',
  birthday: false,
  mobile: false,
  wifi: false,
  pet: false,
  takeout: false,
  smoking: false,
  stamp: false,
  point: false,
  invoice: false,
  kids: false,
  freeDrink: null,
  otoshi: 0,
  serviceFee: 0,
  bring: 0,
  unlimited: 0,
  buffet: 0,
  outlet: 0,

  createdAt: new Date(),
  updatedAt: new Date(),
};
