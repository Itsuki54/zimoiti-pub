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
  id: 'ownerId_takahashikenji',
  email: 'takahashikenji@example.com',
  name: '高橋 健二',
  password: 'password_takahashikenji',
  salt: 'salt9',
  type: UserRole.OWNER,
  isSubscribed: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_suteekinoteki',
  recommned: false,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_suteekinoteki',
  name: 'ステーキのテキ',

  phone: '99-0195-1921',
  email: 'suteekinoteki@example.com',
  genre: 'ステーキ',
  furigana: 'すてーきのてき',
  tags: '肉,やすい',
  url: 'https://www.suteekinoteki.co.jp',
  image: '/store/suteeekinoteki.png',
  barrier: true,
  light: 3,
  lively: 2,
  location: '繁華街',
  language: '100000011',
  birthday: false,
  mobile: true,
  wifi: true,
  pet: true,
  takeout: false,
  smoking: true,
  stamp: true,
  point: false,
  invoice: false,
  kids: false,
  freeDrink: 'お茶',
  otoshi: 200,
  serviceFee: 100,
  bring: 3,
  unlimited: 300,
  buffet: 1200,
  outlet: 7,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleParking: Parking = {
  id: 'parkingId_suteekinoteki',
  inside: true,
  outside: false,
  capacity: 12,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_saaroinsuteeki',
  name: 'サーロインステーキ',
  genre: 'ステーキ',
  description: '柔らかくジューシーなサーロインステーキです',
  readyTime: '3分',
  allergen: '0000110011011010010100000000',
  image: '/menu/saaroinsuteeki.png',
  price: 590,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_ribuaisuteeki',
  name: 'リブアイステーキ',
  genre: 'ステーキ',
  description: '濃厚な味わいのリブアイステーキです',
  readyTime: '20分',
  allergen: '0111111011101000110011001101',
  image: '/menu/ribuaisuteeki.png',
  price: 790,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_suteekinoteki',
  street: 'さくら通り',
  city: '東京都',
  state: '中野区',
  zip: '195-1921',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_suteekinoteki',
  day: '1101110',
  open: '7:00',
  close: '19:00',
  tag: '通常営業時間',

  // reserveId: 'reserveId_suteekinoteki',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_suteekinoteki',
  day: '1000100',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_suteekinoteki',

  phone: '99-0195-1921',
  email: 'suteekinoteki@example.com',
  url: 'https://www.suteekinoteki.co.jp/reserve',
};

export const sampleCourse: Course = {
  id: 'courseId_puremiamusuteekikoosu',
  name: 'プレミアムステーキコース',
  description: '最高級のステーキを堪能できる贅沢なコースです',
  genre: 'ステーキ',
  image: '/courseMenu/suteekinotekicourse.png',
  price: 970,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_firesuteeki',
  name: 'フィレステーキ',
  description: '口の中でとろけるようなフィレ肉のステーキです',
  allergen: '0100111101101010011111001000',
  image: '/courseMenu/firesuteeki.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_gaarikkushurinpu',
  name: 'ガーリックシュリンプ',
  description: '香ばしいガーリックが効いたぷりぷりのシュリンプです',
  allergen: '1011011011010001010010010101',
  image: '/courseMenu/gaarikkusyurinpu.png',

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_suteekinoteki',
  madori: '',
  smoking: false,
  table: false,
  seats: 13,
  maximum: 17,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_suteekinoteki',
  inside: false,
  outside: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_suteekinoteki',
  gender: '共用',
  wayou: true,
  washlet: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_suteekinoteki',
  card: '1110001',
  cash: true,
  QR: '010011',
  transit: true,
  IDPay: false,
  QuickPay: false,
  Nanaco: true,
  Edy: true,
  WAON: false,
  Pitapa: false,
  UNIONPAY: true,

  createdAt: new Date(),
  updatedAt: new Date(),
};
