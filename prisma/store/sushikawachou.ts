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
  id: 'ownerId_sukei',
  email: 'sukei@example.com',
  name: '酢 慧',
  salt: '',
  password: 'password_sukei',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_sushikawachou',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_sushikawachou',
  name: 'すし川彫',

  phone: '99-8947-8246',
  email: 'sushikawachou@example.com',
  genre: 'すし',
  furigana: 'すしかわさき',
  tags: '板前,ネタ',
  url: 'https://www.sushikawachou.co.jp',
  image: '/store/sushikawachou.png',
  barrier: true,
  light: 1,
  lively: 2,
  location: '住宅街',
  language: '001010000',
  birthday: false,
  mobile: true,
  wifi: true,
  pet: true,
  takeout: true,
  smoking: false,
  stamp: true,
  point: true,
  invoice: true,
  kids: true,
  freeDrink: 'null',
  otoshi: 300,
  serviceFee: 100,
  bring: 3,
  unlimited: 200,
  buffet: 1260,
  outlet: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_sushikawachou',
  inside: false,
  outside: false,
  capacity: 10,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_sushimoriawase',
  name: '寿司盛り合わせ',
  genre: '寿司',
  description: 'いろいろなネタを用意しています',
  readyTime: '4分',
  allergen: '1001010011111011101111100001',
  image: '/menu/sushimoriawase.png',
  price: 940,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_kaniikurasaamonkaisendonburi',
  name: 'かにいくらサーモン海鮮丼',
  genre: '丼',
  description: '新鮮でお得な海鮮丼です',
  readyTime: '7分',
  allergen: '0001100001001111101101110001',
  image: '/menu/kaniikurasaamonkaisendonburi.png',
  price: 750,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_sushikawachou',
  street: 'さくら通り',
  city: '東京都',
  state: '練馬区',
  zip: '947-8246',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_sushikawachou',
  day: '1111001',
  open: '7:00',
  close: '23:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_sushikawachou',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_sushikawachou',
  day: '1110110',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_sushikawachou',

  phone: '99-8947-8246',
  email: 'sushikawachou@example.com',
  url: 'https://www.sushikawachou.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_sushikawachou',
  madori: '店内',
  smoking: false,
  table: false,
  seats: 5,
  maximum: 23,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_sushikawachou',
  inside: false,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_sushikawachou',
  gender: '別',
  wayou: true,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_sushikawachou',
  card: '1011110',
  cash: true,
  QR: '100101',
  transit: true,
  IDPay: false,
  QuickPay: true,
  Nanaco: true,
  Edy: true,
  WAON: true,
  Pitapa: true,
  UNIONPAY: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};
