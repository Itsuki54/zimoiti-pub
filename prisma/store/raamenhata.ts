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
  id: 'ownerId_hataraa',
  email: 'hataraa@example.com',
  name: '波多 ラー',
  password: 'password_hataraa',
  salt: '',
  type: UserRole.OWNER,
  isSubscribed: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_raamenhata',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_raamenhata',
  name: 'ラーメン波多',

  phone: '99-0178-8072',
  email: 'raamenhata@example.com',
  genre: '中華',
  furigana: 'らーめんはた',
  tags: 'ラーメン,次郎系',
  url: 'https://www.raamenhata.co.jp',
  image: '/store/raamenhata.png',
  barrier: true,
  light: 1,
  lively: 3,
  location: '住宅街',
  language: '101101011',
  birthday: false,
  mobile: true,
  wifi: true,
  pet: false,
  takeout: false,
  smoking: false,
  stamp: true,
  point: false,
  invoice: true,
  kids: false,
  freeDrink: 'null',
  otoshi: 400,
  serviceFee: 200,
  bring: 3,
  unlimited: 100,
  buffet: 2450,
  outlet: 6,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_raamenhata',
  inside: true,
  outside: false,
  capacity: 6,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_chuukasoba',
  name: '中華そば',
  genre: 'ラーメン',
  description: 'あっさりながら満足感があります',
  readyTime: '10分',
  allergen: '1011110001110101111100001101',
  image: '/menu/chuukasoba.png',
  price: 490,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_hanetsukigyouza',
  name: '羽付き餃子',
  genre: '餃子',
  description: 'パリパリな皮の中にはジューシーな肉汁が溢れてきます',
  readyTime: '12分',
  allergen: '1101010100100110110011000001',
  image: '/menu/hanetsukigyouza.png',
  price: 1000,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_raamenhata',
  street: 'もみじ通り',
  city: '東京都',
  state: '江東区',
  zip: '178-8072',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_raamenhata',
  day: '0101101',
  open: '6:00',
  close: '23:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_raamenhata',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_raamenhata',
  day: '0110100',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_raamenhata',

  phone: '99-0178-8072',
  email: 'raamenhata@example.com',
  url: 'https://www.raamenhata.co.jp/reserve',
};

export const sampleSeat: Seat = {
  id: 'seatId_raamenhata',
  madori: '店内',
  smoking: true,
  table: true,
  seats: 6,
  maximum: 16,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_raamenhata',
  inside: false,
  outside: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_raamenhata',
  gender: '共用',
  wayou: true,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_raamenhata',
  card: '0111010',
  cash: true,
  QR: '001101',
  transit: false,
  IDPay: false,
  QuickPay: false,
  Nanaco: true,
  Edy: false,
  WAON: true,
  Pitapa: true,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
