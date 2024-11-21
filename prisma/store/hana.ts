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
  id: 'ownerId_suzukiichirou',
  email: 'suzukiichirou@example.com',
  name: '鈴木一郎',
  password: 'password_suzukiichirou',
  type: UserRole.OWNER,
  storeId: 'storeId_wafuudaininguhana',
  settingId: 'settingId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_wafuudaininguhana',
  recommned: false,
  ownerId: 'ownerId_suzukiichirou',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_wafuudaininguhana',
  name: '和風ダイニング 華',
  addressId: 'addressId_wafuudaininguhana',
  phone: '99-9333-9265',
  email: 'wafuudaininguhana@example.com',
  genre: '日本料理',
  url: 'https://www.wafuudaininguhana.co.jp',
  image: '/store/hana.jpg',
  barrier: true,
  light: 2,
  lively: 3,
  location: 'オフィス街',
  language: '111010000',
  birthday: true,
  mobile: true,
  wifi: false,
  pet: true,
  takeout: false,
  smoking: false,
  stamp: true,
  point: false,
  invoice: false,
  kids: true,
  freeDrink: null,
  otoshi: 100,
  serviceFee: 200,
  bring: 3,
  unlimited: 300,
  buffet: 600,
  outlet: 23,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_wafuudaininguhana",
  // parkingId: "parkingId_wafuudaininguhana",
  // timeId: "timeId_wafuudaininguhana",
};

export const sampleParking: Parking = {
  id: 'parkingId_wafuudaininguhana',
  inside: true,
  outside: true,
  capacity: 2,
  storeId: 'storeId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_tenpuramoriawase',
  name: '天ぷら盛り合わせ',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '7分',
  allergen: '1101100010001111111101000100',
  image: '/menu/tenpura.jpg',
  price: 550,
  storeId: 'storeId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_sukiyakinabe',
  name: 'すき焼き鍋',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '19分',
  allergen: '1100111010110100111111010100',
  image: '/menu/nabe.jpg',
  price: 870,
  storeId: 'storeId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_wafuudaininguhana',
  street: 'いちょう通り',
  city: '東京都',
  state: '大田区',
  zip: '333-9265',
  storeId: 'storeId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_wafuudaininguhana',
  day: '0010101',
  open: '6:00',
  close: '19:00',
  tag: '通常営業時間',
  storeId: 'storeId_wafuudaininguhana',
  parkingId: 'parkingId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_wafuudaininguhana',
  day: '1110001',
  start: '11:00',
  end: '14:00',
  tag: 'ランチ',
  menuId: 'menuId_tenpuramoriawase',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_wafuudaininguhana',
  storeId: 'storeId_wafuudaininguhana',
  phone: '99-9333-9265',
  email: 'wafuudaininguhana@example.com',
  url: 'https://www.wafuudaininguhana.co.jp/reserve',
  timeId: 'timeId_wafuudaininguhana',
};

export const sampleCourse: Course = {
  id: 'courseId_wafuuteishokukoosu',
  name: '和風定食コース',
  description: '季節の味を楽しめるコースです。',
  genre: '日本料理',
  image: '/courseMenu/washoku.jpg',
  price: 3110,
  storeId: 'storeId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_gomeshi',
  name: 'ご飯',
  description: 'ふっくらと炊き上げました。',
  allergen: '1010110101111001111001110010',
  image: '/courseMenu/gohann.jpg',
  courseId: 'courseId_wafuuteishokukoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_misoshiru',
  name: '味噌汁',
  description: '自家製味噌を使用しています。',
  allergen: '1010111011011101001110011011',
  image: '/courseMenu/misosiru.jpg',
  courseId: 'courseId_wafuuteishokukoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_wafuudaininguhana',
  madori: '',
  smoking: false,
  table: false,
  seats: 13,
  maximum: 25,
  storeId: 'storeId_wafuudaininguhana',
  toiletId: 'toiletId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_wafuudaininguhana',
  inside: true,
  outside: false,
  storeId: 'storeId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_wafuudaininguhana',
  gender: '共用',
  wayou: true,
  washlet: true,
  toiletId: 'toiletId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_wafuudaininguhana',
  card: '0111100',
  cash: true,
  QR: '100111',
  transit: false,
  IDPay: true,
  QuickPay: true,
  Nanaco: false,
  Edy: false,
  WAON: false,
  Pitapa: false,
  UNIONPAY: true,
  storeId: 'storeId_wafuudaininguhana',
  createdAt: new Date(),
  updatedAt: new Date(),
};
