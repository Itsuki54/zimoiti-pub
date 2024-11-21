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
  id: 'ownerId_takahashiyuu',
  email: 'takahashiyuu@example.com',
  name: '高橋優',
  password: 'password_takahashiyuu',
  type: UserRole.OWNER,
  storeId: 'storeId_indoresutoranmaharaja',
  settingId: 'settingId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_indoresutoranmaharaja',
  recommned: true,
  ownerId: 'ownerId_takahashiyuu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_indoresutoranmaharaja',
  name: 'インドレストラン マハラジャ',
  addressId: 'addressId_indoresutoranmaharaja',
  phone: '99-2730-6809',
  email: 'indoresutoranmaharaja@example.com',
  genre: 'インド料理',
  url: 'https://www.indoresutoranmaharaja.co.jp',
  image: '/store/maharaja.jpg',
  barrier: true,
  light: 2,
  lively: 1,
  location: '繁華街',
  language: '111100010',
  birthday: false,
  mobile: true,
  wifi: false,
  pet: true,
  takeout: false,
  smoking: false,
  stamp: false,
  point: false,
  invoice: false,
  kids: false,
  freeDrink: null,
  otoshi: 200,
  serviceFee: 400,
  bring: 1,
  unlimited: 200,
  buffet: 1140,
  outlet: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
  paymentId: 'paymentId_indoresutoranmaharaja',
  parkingId: 'parkingId_indoresutoranmaharaja',
  timeId: 'timeId_indoresutoranmaharaja',
};

export const sampleParking: Parking = {
  id: 'parkingId_indoresutoranmaharaja',
  inside: false,
  outside: false,
  capacity: 13,
  storeId: 'storeId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_bataachikinkaree',
  name: 'バターチキンカレー',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '17分',
  allergen: '1001011001000100000000001000',
  image: '/menu/currey.jpg',
  price: 560,
  // storeId: "storeId_indoresutoranmaharaja",
  // createdAt: new Date(),
  // updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_nan',
  name: 'ナン',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '20分',
  allergen: '1000001101001000111011101001',
  image: '/menu/nan.jpg',
  price: 1020,
  storeId: 'storeId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_indoresutoranmaharaja',
  street: 'さくら通り',
  city: '東京都',
  state: '新宿区',
  zip: '730-6809',
  storeId: 'storeId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_indoresutoranmaharaja',
  day: '1101010',
  open: '6:00',
  close: '22:00',
  tag: '通常営業時間',
  storeId: 'storeId_indoresutoranmaharaja',
  parkingId: 'parkingId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_indoresutoranmaharaja',
  day: '1001000',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',
  menuId: 'menuId_bataachikinkaree',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_indoresutoranmaharaja',
  storeId: 'storeId_indoresutoranmaharaja',
  phone: '99-2730-6809',
  email: 'indoresutoranmaharaja@example.com',
  url: 'https://www.indoresutoranmaharaja.co.jp/reserve',
  timeId: 'timeId_indoresutoranmaharaja',
};

export const sampleCourse: Course = {
  id: 'courseId_indiansupesharukoosu',
  name: 'インディアンスペシャルコース',
  description: '本場の味を堪能。',
  genre: 'インド料理',
  image: '/courseMenu/india.jpg',
  price: 2950,
  storeId: 'storeId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_tandoriichikin',
  name: 'タンドリーチキン',
  description: 'スパイシーな味わい。',
  allergen: '1001001100110011011001110100',
  image: '/courseMenu/chikin.jpg',
  courseId: 'courseId_indiansupesharukoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_masarachai',
  name: 'マサラチャイ',
  description: '香り高いインド風ミルクティー。',
  allergen: '0101100101000100011001111110',
  image: '/courseMenu/masarachai.jpg',
  courseId: 'courseId_indiansupesharukoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_indoresutoranmaharaja',
  madori: '',
  smoking: false,
  table: false,
  seats: 5,
  maximum: 9,
  storeId: 'storeId_indoresutoranmaharaja',
  toiletId: 'toiletId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_indoresutoranmaharaja',
  inside: true,
  outside: false,
  storeId: 'storeId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_indoresutoranmaharaja',
  gender: '別',
  wayou: true,
  washlet: true,
  toiletId: 'toiletId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_indoresutoranmaharaja',
  card: '1110100',
  cash: true,
  QR: '111010',
  transit: true,
  IDPay: true,
  QuickPay: false,
  Nanaco: true,
  Edy: true,
  WAON: true,
  Pitapa: false,
  UNIONPAY: true,
  storeId: 'storeId_indoresutoranmaharaja',
  createdAt: new Date(),
  updatedAt: new Date(),
};
