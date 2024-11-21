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
  id: 'ownerId_yohanamihoe',
  email: 'yohanamihoe@example.com',
  name: '余波 波歩絵',
  salt: 'saki',
  password: 'password_yohanamihoe',
  type: UserRole.OWNER,
  isSubscribed: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_iamparfait',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_iamparfait',
  name: 'i am parfait',

  phone: '99-1598-0300',
  email: 'iamparfait@example.com',
  genre: 'スイーツ',
  furigana: 'あいあむぱふぇ',
  tags: '果物,パフェ',
  url: 'https://www.iamparfait.co.jp',
  image: '/store/iamparfait.png',
  barrier: false,
  light: 3,
  lively: 1,
  location: '住宅街',
  language: '000110100',
  birthday: true,
  mobile: true,
  wifi: true,
  pet: false,
  takeout: true,
  smoking: true,
  stamp: false,
  point: true,
  invoice: true,
  kids: false,
  freeDrink: '水',
  otoshi: 200,
  serviceFee: 400,
  bring: 1,
  unlimited: 300,
  buffet: 1560,
  outlet: 25,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_iamparfait',
  inside: false,
  outside: true,
  capacity: 9,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_beriitochokonopafe',
  name: 'ベリーとチョコのパフェ',
  genre: 'パフェ',
  description: 'インスタ映え間違いありません',
  readyTime: '7分',
  allergen: '0111000111110111001110100010',
  image: '/menu/beriitochokonopafe.png',
  price: 1000,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_konfureekutochoko',
  name: 'コンフレークとチョコ',
  genre: 'パフェ',
  description: 'チョコレートがこぼれちゃってます',
  readyTime: '8分',
  allergen: '1110100010000010001111001000',
  image: '/menu/konfureekutochoko.png',
  price: 1080,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_iamparfait',
  street: 'いちょう通り',
  city: '東京都',
  state: '葛飾区',
  zip: '598-0300',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_iamparfait',
  day: '0001100',
  open: '10:00',
  close: '23:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_iamparfait',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_iamparfait',
  day: '0010010',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_iamparfait',

  phone: '99-1598-0300',
  email: 'iamparfait@example.com',
  url: 'https://www.iamparfait.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_iamparfait',
  madori: '店内',
  smoking: false,
  table: true,
  seats: 12,
  maximum: 28,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_iamparfait',
  inside: false,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_iamparfait',
  gender: '共用',
  wayou: true,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_iamparfait',
  card: '1101100',
  cash: false,
  QR: '011100',
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
