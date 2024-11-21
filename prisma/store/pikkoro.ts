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
  id: 'ownerId_yamamototakeshi',
  email: 'yamamototakeshi@example.com',
  name: '山本健',
  password: 'password_yamamototakeshi',
  type: UserRole.OWNER,
  storeId: 'storeId_itarianbarupikkoro',
  settingId: 'settingId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_itarianbarupikkoro',
  recommned: false,
  ownerId: 'ownerId_yamamototakeshi',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_itarianbarupikkoro',
  name: 'イタリアンバル ピッコロ',
  addressId: 'addressId_itarianbarupikkoro',
  phone: '99-6581-0550',
  email: 'itarianbarupikkoro@example.com',
  genre: 'イタリア料理',
  url: 'https://www.itarianbarupikkoro.co.jp',
  image: '/store/pikkoro.jpg',
  barrier: true,
  light: 2,
  lively: 1,
  location: '繁華街',
  language: '000110101',
  birthday: false,
  mobile: true,
  wifi: false,
  pet: true,
  takeout: true,
  smoking: false,
  stamp: true,
  point: true,
  invoice: false,
  kids: false,
  freeDrink: 'お茶',
  otoshi: 400,
  serviceFee: 100,
  bring: 3,
  unlimited: 300,
  buffet: 1720,
  outlet: 27,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_itarianbarupikkoro",
  // parkingId: "parkingId_itarianbarupikkoro",
  // timeId: "timeId_itarianbarupikkoro",
};

export const sampleParking: Parking = {
  id: 'parkingId_itarianbarupikkoro',
  inside: false,
  outside: false,
  capacity: 3,
  storeId: 'storeId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_marugeriitapiza',
  name: 'マルゲリータピザ',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '10分',
  allergen: '1111100111111000001111110101',
  image: '/menu/pizz.jpg',
  price: 650,
  storeId: 'storeId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_karubonaara',
  name: 'カルボナーラ',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '11分',
  allergen: '0010010000000110111010110010',
  image: '/menu/carubo.jpg',
  price: 430,
  storeId: 'storeId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_itarianbarupikkoro',
  street: 'さくら通り',
  city: '東京都',
  state: '世田谷区',
  zip: '581-0550',
  storeId: 'storeId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_itarianbarupikkoro',
  day: '1100001',
  open: '10:00',
  close: '21:00',
  tag: '通常営業時間',
  storeId: 'storeId_itarianbarupikkoro',
  parkingId: 'parkingId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_itarianbarupikkoro',
  day: '0110001',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',
  menuId: 'menuId_marugeriitapiza',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_itarianbarupikkoro',
  storeId: 'storeId_itarianbarupikkoro',
  phone: '99-6581-0550',
  email: 'itarianbarupikkoro@example.com',
  url: 'https://www.itarianbarupikkoro.co.jp/reserve',
  timeId: 'timeId_itarianbarupikkoro',
};

export const sampleCourse: Course = {
  id: 'courseId_itariansettokoosu',
  name: 'イタリアンセットコース',
  description: '前菜からデザートまで楽しめます。',
  genre: 'イタリア料理',
  image: '/courseMenu/itarian.jpg',
  price: 1640,
  storeId: 'storeId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_burusuketta',
  name: 'ブルスケッタ',
  description: '新鮮なトマトを使用。',
  allergen: '0111010011010111001011111010',
  image: '/courseMenu/doria.jpg',
  courseId: 'courseId_itariansettokoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_teiramisu',
  name: 'ティラミス',
  description: '本場の味を再現。',
  allergen: '0011011111100010001010100010',
  image: '/courseMenu/tiramisu.jpg',
  courseId: 'courseId_itariansettokoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_itarianbarupikkoro',
  madori: '',
  smoking: false,
  table: false,
  seats: 9,
  maximum: 21,
  storeId: 'storeId_itarianbarupikkoro',
  toiletId: 'toiletId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_itarianbarupikkoro',
  inside: false,
  outside: true,
  storeId: 'storeId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_itarianbarupikkoro',
  gender: '共用',
  wayou: true,
  washlet: true,
  toiletId: 'toiletId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_itarianbarupikkoro',
  card: '0100000',
  cash: true,
  QR: '110001',
  transit: true,
  IDPay: true,
  QuickPay: false,
  Nanaco: true,
  Edy: false,
  WAON: false,
  Pitapa: true,
  UNIONPAY: true,
  storeId: 'storeId_itarianbarupikkoro',
  createdAt: new Date(),
  updatedAt: new Date(),
};
