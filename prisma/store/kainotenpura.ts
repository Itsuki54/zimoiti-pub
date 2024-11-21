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
  id: 'ownerId_tenfurao',
  email: 'tenfurao@example.com',
  name: '天 符羅尾',
  salt: '',
  password: 'password_tenfurao',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_kainotenpura',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_kainotenpura',
  name: '櫂の天ぷら',

  phone: '99-0959-1664',
  email: 'kainotenpura@example.com',
  genre: '日本食',
  furigana: 'かいのてんぷら',
  tags: 'うどん,てんぷら',
  url: 'https://www.kainotenpura.co.jp',
  image: '/store/kainotenpura.png',
  barrier: true,
  light: 2,
  lively: 2,
  location: '繁華街',
  language: '011001011',
  birthday: false,
  mobile: false,
  wifi: true,
  pet: true,
  takeout: true,
  smoking: false,
  stamp: false,
  point: false,
  invoice: false,
  kids: true,
  freeDrink: '水',
  otoshi: 300,
  serviceFee: 300,
  bring: 2,
  unlimited: 200,
  buffet: 1330,
  outlet: 11,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_kainotenpura',
  inside: true,
  outside: false,
  capacity: 2,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_tenpuramoriawase',
  name: '天ぷら盛り合わせ',
  genre: '揚げ物',
  description: 'さまざまな天ぷらを用意しました',
  readyTime: '11分',
  allergen: '1011010101101010100101011101',
  image: '/menu/tenpuramoriawase.png',
  price: 450,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_udon',
  name: 'うどん',
  genre: '麺',
  description: '天ぷらによく合います',
  readyTime: '9分',
  allergen: '1111011101001001110000011010',
  image: '/menu/udon.png',
  price: 630,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_kainotenpura',
  street: 'いちょう通り',
  city: '東京都',
  state: '中央区',
  zip: '959-1664',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_kainotenpura',
  day: '1100001',
  open: '6:00',
  close: '20:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_kainotenpura',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_kainotenpura',
  day: '1001110',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_kainotenpura',

  phone: '99-0959-1664',
  email: 'kainotenpura@example.com',
  url: 'https://www.kainotenpura.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_kainotenpura',
  madori: '店内',
  smoking: true,
  table: true,
  seats: 5,
  maximum: 14,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_kainotenpura',
  inside: false,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_kainotenpura',
  gender: '別',
  wayou: false,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_kainotenpura',
  card: '1000100',
  cash: false,
  QR: '111110',
  transit: true,
  IDPay: true,
  QuickPay: true,
  Nanaco: true,
  Edy: false,
  WAON: true,
  Pitapa: true,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
