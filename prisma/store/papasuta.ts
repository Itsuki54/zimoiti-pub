import {
  Address,
  Course,
  CourseMenu,
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

export const sampleUser: User = {
  id: 'ownerId_satoutarou',
  email: 'satoutarou@example.com',
  name: '佐藤 太郎',
  password: 'password_satoutarou',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_papasuta',
  recommned: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_papasuta',
  name: 'パパスタ',

  phone: '99-5027-9867',
  email: 'papasuta@example.com',
  genre: 'イタリアン',
  furigana: 'ぱぱすた',
  tags: 'パスタ,イタリア',
  url: 'https://www.papasuta.co.jp',
  image: '/store/papasutate.png',
  barrier: true,
  light: 1,
  lively: 2,
  location: '住宅街',
  language: '010011010',
  birthday: true,
  mobile: false,
  wifi: true,
  pet: false,
  takeout: false,
  smoking: false,
  stamp: false,
  point: false,
  invoice: true,
  kids: true,
  freeDrink: '水',
  otoshi: 200,
  serviceFee: 300,
  bring: 4,
  unlimited: 200,
  buffet: 1040,
  outlet: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_papasuta',
  inside: false,
  outside: true,
  capacity: 8,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_marugeriitapiza',
  name: 'マルゲリータピザ',
  genre: 'イタリアン',
  description: '新鮮なトマトとバジルを使った伝統的なピザです',
  readyTime: '14分',
  allergen: '0111101100111111110100101111',
  image: '/menu/pizza.png',
  price: 800,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_karubonaara',
  name: 'カルボナーラ',
  genre: 'イタリアン',
  description: 'クリーミーなソースとベーコンが特徴のパスタです',
  readyTime: '14分',
  allergen: '0000010010000010100001011110',
  image: '/menu/karubo.png',
  price: 360,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_papasuta',
  street: 'さくら通り',
  city: '東京都',
  state: '板橋区',
  zip: '027-9867',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_papasuta',
  day: '1101100',
  open: '10:00',
  close: '22:00',
  tag: '通常営業時間',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_papasuta',
  day: '1101101',
  start: '18:00',
  end: '21:00',
  tag: 'ディナー',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_papasuta',

  phone: '99-5027-9867',
  email: 'papasuta@example.com',
  url: 'https://www.papasuta.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_itariandinaakoosu',
  name: 'イタリアンディナーコース',
  description: '季節の食材を使ったフルコース',
  genre: 'イタリアン',
  image: '/courseMenu/papasutacourse.png',
  price: 1750,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_shiifuudopasuta',
  name: 'シーフードパスタ',
  description: '新鮮な海の幸をたっぷり使った贅沢なパスタ',
  allergen: '0001001000101010111110010010',
  image: '/courseMenu/shifood.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_kapureezesarada',
  name: 'カプレーゼサラダ',
  description: 'モッツァレラチーズとトマト、バジルのシンプルなサラダ',
  allergen: '1000101100100110111110000010',
  image: '/courseMenu/kapureeze.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_papasuta',
  madori: '',
  smoking: true,
  table: true,
  seats: 10,
  maximum: 22,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_papasuta',
  inside: false,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_papasuta',
  gender: '共用',
  wayou: false,
  washlet: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_papasuta',
  card: '1001101',
  cash: true,
  QR: '101100',
  transit: true,
  IDPay: false,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: false,
  Pitapa: true,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
