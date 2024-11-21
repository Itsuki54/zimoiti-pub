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
  id: 'ownerId_bunhebi',
  email: 'bunhebi@example.com',
  name: '文 蛇',
  password: 'password_bunhebi',
  salt: '',
  type: UserRole.OWNER,
  isSubscribed: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_monmonja',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_monmonja',
  name: 'もんもんじゃ',

  phone: '99-6934-9476',
  email: 'monmonja@example.com',
  genre: 'もんじゃ',
  furigana: 'ももんじゃ',
  tags: '日本風,あつあつ',
  url: 'https://www.monmonja.co.jp',
  image: '/store/monmonja.png',
  barrier: false,
  light: 1,
  lively: 2,
  location: '繁華街',
  language: '101100010',
  birthday: true,
  mobile: true,
  wifi: true,
  pet: false,
  takeout: true,
  smoking: true,
  stamp: false,
  point: false,
  invoice: false,
  kids: true,
  freeDrink: 'お茶',
  otoshi: 300,
  serviceFee: 100,
  bring: 1,
  unlimited: 200,
  buffet: 2280,
  outlet: 20,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_monmonja',
  inside: false,
  outside: true,
  capacity: 5,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_chiizumonja',
  name: 'チーズもんじゃ',
  genre: 'もんじゃ',
  description: 'チーズともんじゃのマリアージュ',
  readyTime: '14分',
  allergen: '1000010011110100110111101101',
  image: '/menu/chiizumonja.png',
  price: 390,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_gaarikkuraisu',
  name: 'ガーリックライス',
  genre: 'ご飯',
  description: 'ガーリックが効いています',
  readyTime: '8分',
  allergen: '1011001100001010110110101111',
  image: '/menu/gaarikkuraisu.png',
  price: 710,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_monmonja',
  street: 'さくら通り',
  city: '東京都',
  state: '江東区',
  zip: '934-9476',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_monmonja',
  day: '1011001',
  open: '6:00',
  close: '23:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_monmonja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_monmonja',
  day: '0101011',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_monmonja',

  phone: '99-6934-9476',
  email: 'monmonja@example.com',
  url: 'https://www.monmonja.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_monmonja',
  madori: '店内',
  smoking: false,
  table: true,
  seats: 9,
  maximum: 15,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_monmonja',
  inside: true,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_monmonja',
  gender: '共用',
  wayou: false,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_monmonja',
  card: '0000101',
  cash: true,
  QR: '110001',
  transit: false,
  IDPay: false,
  QuickPay: true,
  Nanaco: false,
  Edy: false,
  WAON: false,
  Pitapa: true,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
