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
  id: 'ownerId_katousei',
  email: 'katousei@example.com',
  name: '加藤正',
  password: 'password_katousei',
  type: UserRole.OWNER,
  storeId: 'storeId_chuukaryouriryuunosu',
  settingId: 'settingId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_chuukaryouriryuunosu',
  recommned: true,
  ownerId: 'ownerId_katousei',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_chuukaryouriryuunosu',
  name: '中華料理 龍の巣',
  addressId: 'addressId_chuukaryouriryuunosu',
  phone: '99-2771-2080',
  email: 'chuukaryouriryuunosu@example.com',
  genre: '中華料理',
  url: 'https://www.chuukaryouriryuunosu.co.jp',
  image: '/store/ryuunosu.jpg',
  barrier: false,
  light: 1,
  lively: 2,
  location: '繁華街',
  language: '001101101',
  birthday: true,
  mobile: false,
  wifi: true,
  pet: false,
  takeout: true,
  smoking: false,
  stamp: false,
  point: true,
  invoice: false,
  kids: true,
  freeDrink: '水',
  otoshi: 400,
  serviceFee: 200,
  bring: 1,
  unlimited: 100,
  buffet: 1480,
  outlet: 17,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_chuukaryouriryuunosu",
  // parkingId: "parkingId_chuukaryouriryuunosu",
  // timeId: "timeId_chuukaryouriryuunosu",
};

export const sampleParking: Parking = {
  id: 'parkingId_chuukaryouriryuunosu',
  inside: false,
  outside: true,
  capacity: 12,
  storeId: 'storeId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_maaboudoufu',
  name: '麻婆豆腐',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '6分',
  allergen: '1011110111011010011110110110',
  image: '/menu/ma-bodoufu.jpg',
  price: 660,
  storeId: 'storeId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_ebichiri',
  name: 'エビチリ',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '11分',
  allergen: '1000011011010110100101000011',
  image: '/menu/ebichiri.jpg',
  price: 550,
  storeId: 'storeId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_chuukaryouriryuunosu',
  street: 'もみじ通り',
  city: '東京都',
  state: '中野区',
  zip: '771-2080',
  storeId: 'storeId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_chuukaryouriryuunosu',
  day: '0100010',
  open: '6:00',
  close: '20:00',
  tag: '通常営業時間',
  storeId: 'storeId_chuukaryouriryuunosu',
  parkingId: 'parkingId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_chuukaryouriryuunosu',
  day: '0001111',
  start: '6:00',
  end: '8:00',
  tag: 'モーニング',
  menuId: 'menuId_maaboudoufu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_chuukaryouriryuunosu',
  storeId: 'storeId_chuukaryouriryuunosu',
  phone: '99-2771-2080',
  email: 'chuukaryouriryuunosu@example.com',
  url: 'https://www.chuukaryouriryuunosu.co.jp/reserve',
  timeId: 'timeId_chuukaryouriryuunosu',
};

export const sampleCourse: Course = {
  id: 'courseId_chuukadinaakoosu',
  name: '中華ディナーコース',
  description: '様々な中華料理を楽しめます。',
  genre: '中華料理',
  image: '/courseMenu/chuuka.jpg',
  price: 1900,
  storeId: 'storeId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_subuta',
  name: '酢豚',
  description: '酸味と甘味が絶妙。',
  allergen: '1010100001001000000011110001',
  image: '/courseMenu/subuta.jpg',
  courseId: 'courseId_chuukadinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_harumakiki',
  name: '春巻き',
  description: 'サクサクの皮が美味。',
  allergen: '0101000011111011101101101111',
  image: '/courseMenu/harumaki.jpg',
  courseId: 'courseId_chuukadinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_chuukaryouriryuunosu',
  madori: '',
  smoking: false,
  table: false,
  seats: 9,
  maximum: 9,
  storeId: 'storeId_chuukaryouriryuunosu',
  toiletId: 'toiletId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_chuukaryouriryuunosu',
  inside: false,
  outside: true,
  storeId: 'storeId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_chuukaryouriryuunosu',
  gender: '共用',
  wayou: false,
  washlet: true,
  toiletId: 'toiletId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_chuukaryouriryuunosu',
  card: '0010100',
  cash: false,
  QR: '000001',
  transit: false,
  IDPay: false,
  QuickPay: false,
  Nanaco: false,
  Edy: true,
  WAON: false,
  Pitapa: true,
  UNIONPAY: false,
  storeId: 'storeId_chuukaryouriryuunosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};
