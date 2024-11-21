import {
  Address,
  Menu,
  Parking,
  Payment,
  Reserve,
  Seat,
  ServiceTime,
  Setting,
  Store,
  Time,
  Toilet,
  ToiletType,
  User,
  UserRole,
} from '@prisma/client';

export const sampleOwner: User = {
  id: 'ownerId_shinonomekyouko',
  email: 'shinonomekyouko@example.com',
  name: '東雲 京子',
  salt: 'sal1',
  password: 'password_shinonomekyouko',
  type: UserRole.OWNER,
  isSubscribed: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_gatsutorikazabana',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_gatsutorikazabana',
  name: '月鳥風花',

  phone: '99-6778-1391',
  email: 'gatsutorikazabana@example.com',
  genre: '和菓子',
  furigana: 'げっちょうふげつ',
  tags: '和菓子,お土産',
  url: 'https://www.gatsutorikazabana.co.jp',
  image: '/store/gatsutorikazabana.png',
  barrier: false,
  light: 1,
  lively: 3,
  location: 'オフィス街',
  language: '000010001',
  birthday: false,
  mobile: false,
  wifi: true,
  pet: false,
  takeout: true,
  smoking: false,
  stamp: true,
  point: false,
  invoice: true,
  kids: true,
  freeDrink: 'お茶',
  otoshi: 300,
  serviceFee: 200,
  bring: 3,
  unlimited: 200,
  buffet: 1940,
  outlet: 23,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_gatsutorikazabana',
  inside: true,
  outside: true,
  capacity: 7,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_matcha',
  name: '抹茶',
  genre: 'お茶',
  description: '深みのある濃い抹茶',
  readyTime: '4分',
  allergen: '1101010010101111000011010011',
  image: '/menu/matcha.png',
  price: 520,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_wagashi',
  name: '和菓子',
  genre: '菓子',
  description: '抹茶のお供にお菓子をどうぞ',
  readyTime: '10分',
  allergen: '0101110010010111111001011010',
  image: '/menu/wagashi.png',
  price: 700,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_gatsutorikazabana',
  street: 'いちょう通り',
  city: '東京都',
  state: '目黒区',
  zip: '778-1391',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_gatsutorikazabana',
  day: '1000000',
  open: '10:00',
  close: '22:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_gatsutorikazabana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_gatsutorikazabana',
  day: '1100110',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_gatsutorikazabana',

  phone: '99-6778-1391',
  email: 'gatsutorikazabana@example.com',
  url: 'https://www.gatsutorikazabana.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_gatsutorikazabana',
  madori: '店内',
  smoking: true,
  table: false,
  seats: 14,
  maximum: 28,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_gatsutorikazabana',
  inside: false,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_gatsutorikazabana',
  gender: '共用',
  wayou: false,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_gatsutorikazabana',
  card: '0100111',
  cash: false,
  QR: '111000',
  transit: false,
  IDPay: false,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: true,
  Pitapa: false,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
