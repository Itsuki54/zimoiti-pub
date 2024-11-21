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
  id: 'ownerId_tanakarei',
  email: 'tanakarei@example.com',
  name: '田中麗',
  password: 'password_tanakarei',
  type: UserRole.OWNER,
  storeId: 'storeId_kankokuizakayasouru',
  settingId: 'settingId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_kankokuizakayasouru',
  recommned: false,
  ownerId: 'ownerId_tanakarei',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_kankokuizakayasouru',
  name: '韓国居酒屋 ソウル',
  addressId: 'addressId_kankokuizakayasouru',
  phone: '99-5609-0076',
  email: 'kankokuizakayasouru@example.com',
  genre: '韓国料理',
  url: 'https://www.kankokuizakayasouru.co.jp',
  image: '/store/soul.jpg',
  barrier: false,
  light: 2,
  lively: 1,
  location: '住宅街',
  language: '001010101',
  birthday: false,
  mobile: true,
  wifi: true,
  pet: true,
  takeout: true,
  smoking: false,
  stamp: false,
  point: false,
  invoice: false,
  kids: true,
  freeDrink: '水',
  otoshi: 200,
  serviceFee: 400,
  bring: 4,
  unlimited: 200,
  buffet: 1270,
  outlet: 14,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_kankokuizakayasouru",
  // parkingId: "parkingId_kankokuizakayasouru",
  // timeId: "timeId_kankokuizakayasouru",
};

export const sampleParking: Parking = {
  id: 'parkingId_kankokuizakayasouru',
  inside: true,
  outside: true,
  capacity: 6,
  storeId: 'storeId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_bibinba',
  name: 'ビビンバ',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '15分',
  allergen: '1011010011011100010101110000',
  image: '/menu/kbibinnba.jpg.jpg',
  price: 1060,
  storeId: 'storeId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_chijimi',
  name: 'チヂミ',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '9分',
  allergen: '0110101101111111000100001001',
  image: '/menu/tijimi.jpg',
  price: 810,
  storeId: 'storeId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_kankokuizakayasouru',
  street: 'さくら通り',
  city: '東京都',
  state: '足立区',
  zip: '609-0076',
  storeId: 'storeId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_kankokuizakayasouru',
  day: '1010011',
  open: '6:00',
  close: '20:00',
  tag: '通常営業時間',
  storeId: 'storeId_kankokuizakayasouru',
  parkingId: 'parkingId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_kankokuizakayasouru',
  day: '1010001',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',
  menuId: 'menuId_bibinba',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_kankokuizakayasouru',
  storeId: 'storeId_kankokuizakayasouru',
  phone: '99-5609-0076',
  email: 'kankokuizakayasouru@example.com',
  url: 'https://www.kankokuizakayasouru.co.jp/reserve',
  timeId: 'timeId_kankokuizakayasouru',
};

export const sampleCourse: Course = {
  id: 'courseId_kankokudinaakoosu',
  name: '韓国ディナーコース',
  description: '韓国料理を堪能できるコース。',
  genre: '韓国料理',
  image: '/courseMenu/tijimi.jpg',
  price: 1420,
  storeId: 'storeId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_kimuchi',
  name: 'キムチ',
  description: '自家製の発酵キムチ。',
  allergen: '1001101111101010110110000011',
  image: '/courseMenu/kkimuti.jpg',
  courseId: 'courseId_kankokudinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_samugetan',
  name: 'サムゲタン',
  description: '健康的な薬膳スープ。',
  allergen: '0011101010000110000011111100',
  image: '/courseMenu/samugetan.jpg',
  courseId: 'courseId_kankokudinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_kankokuizakayasouru',
  madori: '',
  smoking: false,
  table: true,
  seats: 12,
  maximum: 19,
  storeId: 'storeId_kankokuizakayasouru',
  toiletId: 'toiletId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_kankokuizakayasouru',
  inside: true,
  outside: true,
  storeId: 'storeId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_kankokuizakayasouru',
  gender: '共用',
  wayou: false,
  washlet: true,
  toiletId: 'toiletId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_kankokuizakayasouru',
  card: '1100001',
  cash: false,
  QR: '011011',
  transit: true,
  IDPay: false,
  QuickPay: false,
  Nanaco: false,
  Edy: true,
  WAON: false,
  Pitapa: false,
  UNIONPAY: true,
  storeId: 'storeId_kankokuizakayasouru',
  createdAt: new Date(),
  updatedAt: new Date(),
};
