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
  id: 'ownerId_pasutaabbondio',
  email: 'pasutaabbondio@example.com',
  name: 'パ スタアッボンディオ',
  salt: '',
  password: 'password_pasutaabbondio',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_pasutaabbondiopasuta',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_pasutaabbondiopasuta',
  name: 'セグイ・イル・トゥオ・クオーレ・パスタ',

  phone: '99-9105-8636',
  email: 'pasutaabbondiopasuta@example.com',
  genre: 'パスタ',
  furigana: 'ぱすたあっぼんでぃお',
  tags: 'イタリア,イタリアンパスタ',
  url: 'https://www.pasutaabbondiopasuta.co.jp',
  image: '/store/pasutaabbondio.png',
  barrier: false,
  light: 3,
  lively: 2,
  location: '住宅街',
  language: '001100010',
  birthday: true,
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
  otoshi: 400,
  serviceFee: 300,
  bring: 1,
  unlimited: 300,
  buffet: 1660,
  outlet: 29,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_pasutaabbondiopasuta',
  inside: false,
  outside: true,
  capacity: 14,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_kuriimupasuta',
  name: 'クリームパスタ',
  genre: '麺',
  description: '和風のクリームパスタ',
  readyTime: '22分',
  allergen: '1010001011101011110111111111',
  image: '/menu/kuriimupasuta.png',
  price: 550,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_burokkoriitotorinopasuta',
  name: 'ブロッコリーと鳥のパスタ',
  genre: '麺',
  description: '創作料理です',
  readyTime: '19分',
  allergen: '1000110100110101110111000100',
  image: '/menu/burokkoriitotorinopasuta.png',
  price: 1010,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_pasutaabbondiopasuta',
  street: 'さくら通り',
  city: '東京都',
  state: '練馬区',
  zip: '105-8636',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_pasutaabbondiopasuta',
  day: '1001110',
  open: '10:00',
  close: '20:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_pasutaabbondiopasuta',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_pasutaabbondiopasuta',
  day: '1111000',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_pasutaabbondiopasuta',

  phone: '99-9105-8636',
  email: 'pasutaabbondiopasuta@example.com',
  url: 'https://www.pasutaabbondiopasuta.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_pasutaabbondiopasuta',
  madori: '店内',
  smoking: false,
  table: false,
  seats: 11,
  maximum: 25,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_pasutaabbondiopasuta',
  inside: true,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_pasutaabbondiopasuta',
  gender: '共用',
  wayou: true,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_pasutaabbondiopasuta',
  card: '0001011',
  cash: false,
  QR: '001011',
  transit: false,
  IDPay: true,
  QuickPay: true,
  Nanaco: true,
  Edy: true,
  WAON: false,
  Pitapa: false,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
