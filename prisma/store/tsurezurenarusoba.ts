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
  id: 'ownerId_zento',
  email: 'zento@example.com',
  name: '然 徒',
  salt: '',
  password: 'password_zento',
  type: UserRole.OWNER,
  isSubscribed: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_tsurezurenarusoba',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_tsurezurenarusoba',
  name: '徒然なるそば',

  phone: '99-9787-5679',
  email: 'tsurezurenarusoba@example.com',
  genre: 'そば',
  furigana: 'つれずれなるそば',
  tags: '冷たい,日本そば',
  url: 'https://www.tsurezurenarusoba.co.jp',
  image: '/store/tsurezurenarusoba.png',
  barrier: true,
  light: 1,
  lively: 2,
  location: 'オフィス街',
  language: '010010111',
  birthday: false,
  mobile: false,
  wifi: true,
  pet: true,
  takeout: true,
  smoking: false,
  stamp: true,
  point: true,
  invoice: true,
  kids: true,
  freeDrink: '水',
  otoshi: 300,
  serviceFee: 400,
  bring: 4,
  unlimited: 300,
  buffet: 1410,
  outlet: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_tsurezurenarusoba',
  inside: true,
  outside: true,
  capacity: 6,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_kakesoba',
  name: 'かけそば',
  genre: '麺',
  description: '手打ちの8割そばです',
  readyTime: '6分',
  allergen: '0011010011110100111010101100',
  image: '/menu/kakesoba.png',
  price: 1020,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_sobasetto',
  name: 'そばセット',
  genre: '麺',
  description: '足りない人にはセットがおすすめ',
  readyTime: '5分',
  allergen: '0111101010111110110011011011',
  image: '/menu/sobasetto.png',
  price: 830,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_tsurezurenarusoba',
  street: 'さくら通り',
  city: '東京都',
  state: '足立区',
  zip: '787-5679',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_tsurezurenarusoba',
  day: '0001001',
  open: '10:00',
  close: '21:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_tsurezurenarusoba',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_tsurezurenarusoba',
  day: '1111000',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_tsurezurenarusoba',

  phone: '99-9787-5679',
  email: 'tsurezurenarusoba@example.com',
  url: 'https://www.tsurezurenarusoba.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_tsurezurenarusoba',
  madori: '店内',
  smoking: true,
  table: false,
  seats: 8,
  maximum: 10,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_tsurezurenarusoba',
  inside: true,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_tsurezurenarusoba',
  gender: '別',
  wayou: false,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_tsurezurenarusoba',
  card: '0111011',
  cash: true,
  QR: '100011',
  transit: false,
  IDPay: true,
  QuickPay: true,
  Nanaco: false,
  Edy: true,
  WAON: false,
  Pitapa: true,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
