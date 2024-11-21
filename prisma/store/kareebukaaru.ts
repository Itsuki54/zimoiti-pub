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
  id: 'ownerId_hanarei',
  email: 'hanarei@example.com',
  name: '華 玲',
  salt: '',
  password: 'password_hanarei',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_kareebukaaru',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_kareebukaaru',
  name: 'カレーブカール',

  phone: '99-9546-3371',
  email: 'kareebukaaru@example.com',
  genre: 'カレー',
  furigana: 'かれーぷかーる',
  tags: 'インド,インドカレー',
  url: 'https://www.kareebukaaru.co.jp',
  image: '/store/kareebukaaru.png',
  barrier: false,
  light: 2,
  lively: 3,
  location: '繁華街',
  language: '010110100',
  birthday: false,
  mobile: false,
  wifi: true,
  pet: false,
  takeout: false,
  smoking: false,
  stamp: true,
  point: true,
  invoice: false,
  kids: false,
  freeDrink: 'null',
  otoshi: 100,
  serviceFee: 100,
  bring: 2,
  unlimited: 100,
  buffet: 810,
  outlet: 4,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_kareebukaaru',
  inside: false,
  outside: true,
  capacity: 8,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_supaisukaree',
  name: 'スパイスカレー',
  genre: 'カレー',
  description: '本格的なスパイスカレーです',
  readyTime: '10分',
  allergen: '0100111010011101111101010000',
  image: '/menu/supaisukaree.png',
  price: 780,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_mangoorasshii',
  name: 'マンゴーラッシー',
  genre: 'ドリンク',
  description: 'カレーといえばマンゴーラッシー',
  readyTime: '17分',
  allergen: '0011001010101110001100100000',
  image: '/menu/mangoorasshii.png',
  price: 1070,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_kareebukaaru',
  street: 'いちょう通り',
  city: '東京都',
  state: '足立区',
  zip: '546-3371',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_kareebukaaru',
  day: '0100110',
  open: '8:00',
  close: '19:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_kareebukaaru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_kareebukaaru',
  day: '0111001',
  start: '18:00',
  end: '21:00',
  tag: 'ディナー',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_kareebukaaru',

  phone: '99-9546-3371',
  email: 'kareebukaaru@example.com',
  url: 'https://www.kareebukaaru.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_kareebukaaru',
  madori: '店内',
  smoking: true,
  table: true,
  seats: 11,
  maximum: 17,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_kareebukaaru',
  inside: true,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_kareebukaaru',
  gender: '共用',
  wayou: false,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_kareebukaaru',
  card: '1100101',
  cash: true,
  QR: '010100',
  transit: true,
  IDPay: true,
  QuickPay: false,
  Nanaco: true,
  Edy: true,
  WAON: false,
  Pitapa: false,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
