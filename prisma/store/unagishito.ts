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
  id: 'ownerId_juuunagijirou',
  email: 'juuunagijirou@example.com',
  name: '重 鰻二郎',
  salt: '',
  password: 'password_juuunagijirou',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_unagishito',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_unagishito',
  name: '鰻しと',

  phone: '99-0744-6492',
  email: 'unagishito@example.com',
  genre: '日本食',
  furigana: 'うなぎしと',
  tags: 'うなぎ,新鮮',
  url: 'https://www.unagishito.co.jp',
  image: '/store/unagishito.png',
  barrier: false,
  light: 3,
  lively: 1,
  location: 'オフィス街',
  language: '111010100',
  birthday: false,
  mobile: false,
  wifi: true,
  pet: false,
  takeout: true,
  smoking: true,
  stamp: false,
  point: false,
  invoice: false,
  kids: true,
  freeDrink: '水',
  otoshi: 100,
  serviceFee: 200,
  bring: 2,
  unlimited: 300,
  buffet: 1080,
  outlet: 9,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_unagishito',
  inside: false,
  outside: false,
  capacity: 8,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_unajuu',
  name: '鰻重',
  genre: '鰻',
  description: 'ふっくらとした鰻を使用しました',
  readyTime: '15分',
  allergen: '0010101101111100011011111010',
  image: '/menu/unajuu.png',
  price: 880,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_kimosuii',
  name: '肝吸い',
  genre: 'お汁',
  description: '美味しい出汁を取りました',
  readyTime: '23分',
  allergen: '0100011111010010100111001101',
  image: '/menu/kimosuii.png',
  price: 800,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_unagishito',
  street: 'いちょう通り',
  city: '東京都',
  state: '渋谷区',
  zip: '744-6492',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_unagishito',
  day: '0001101',
  open: '9:00',
  close: '21:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_unagishito',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_unagishito',
  day: '0101110',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_unagishito',

  phone: '99-0744-6492',
  email: 'unagishito@example.com',
  url: 'https://www.unagishito.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_unagishito',
  madori: '店内',
  smoking: true,
  table: true,
  seats: 10,
  maximum: 17,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_unagishito',
  inside: false,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_unagishito',
  gender: '別',
  wayou: true,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_unagishito',
  card: '1011001',
  cash: true,
  QR: '000111',
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
