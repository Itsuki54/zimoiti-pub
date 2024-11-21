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
  id: 'ownerId_satoutakashiosamu',
  email: 'satoutakashiosamu@example.com',
  name: '佐藤貴治',
  password: 'password_satoutakashiosamu',
  type: UserRole.OWNER,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  settingId: 'settingId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_gyouzasenmontenyoshiko',
  recommned: true,
  ownerId: 'ownerId_satoutakashiosamu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_gyouzasenmontenyoshiko',
  name: '餃子専門店よいこ',
  addressId: 'addressId_gyouzasenmontenyoshiko',
  phone: '99-3495-2361',
  email: 'gyouzasenmontenyoshiko@example.com',
  genre: '中華',
  url: 'https://www.gyouzasenmontenyoshiko.co.jp',
  image: '/store/yoiko.jpg',
  barrier: true,
  light: 3,
  lively: 2,
  location: 'オフィス街',
  language: '010000110',
  birthday: true,
  mobile: false,
  wifi: true,
  pet: true,
  takeout: true,
  smoking: true,
  stamp: true,
  point: true,
  invoice: true,
  kids: true,
  freeDrink: null,
  otoshi: 200,
  serviceFee: 400,
  bring: 2,
  unlimited: 300,
  buffet: 2170,
  outlet: 8,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_gyouzasenmontenyoshiko",
  // parkingId: "parkingId_gyouzasenmontenyoshiko",
  // timeId: "timeId_gyouzasenmontenyoshiko",
};

export const sampleParking: Parking = {
  id: 'parkingId_gyouzasenmontenyoshiko',
  inside: true,
  outside: true,
  capacity: 14,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_gyouza',
  name: '餃子',
  genre: '惣菜',
  description: 'よく焼きで仕上げました。',
  readyTime: '17分',
  allergen: '0000100010010000011111011101',
  image: '/menu/gyouza.jpg',
  price: 940,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_edamame',
  name: '枝豆',
  genre: '惣菜',
  description: 'おつまみにぴったりです。',
  readyTime: '17分',
  allergen: '0011000010000011110100010101',
  image: '/menu/edamame.jpg',
  price: 520,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_gyouzasenmontenyoshiko',
  street: 'もみじ通り',
  city: '東京都',
  state: '港区',
  zip: '495-2361',
  storeId: 'storeId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_gyouzasenmontenyoshiko',
  day: '1101111',
  open: '10:00',
  close: '20:00',
  tag: '通常営業時間',
  storeId: 'storeId_gyouzasenmontenyoshiko',
  parkingId: 'parkingId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_gyouzasenmontenyoshiko',
  day: '0011000',
  start: '18:00',
  end: '21:00',
  tag: 'ディナー',
  menuId: 'menuId_gyouza',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_gyouzasenmontenyoshiko',
  storeId: 'storeId_gyouzasenmontenyoshiko',
  phone: '99-3495-2361',
  email: 'gyouzasenmontenyoshiko@example.com',
  url: 'https://www.gyouzasenmontenyoshiko.co.jp/reserve',
  timeId: 'timeId_gyouzasenmontenyoshiko',
};

export const sampleCourse: Course = {
  id: 'courseId_5hinkoosu',
  name: '5品コース',
  description: 'このコースで',
  genre: '中華',
  image: '/courseMenu/ychuuka.jpg',
  price: 2980,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_chaahan',
  name: 'チャーハン',
  description: '香ばしく仕上げました。',
  allergen: '1100011001010010111101110101',
  image: '/courseMenu/cha-hann.jpg',
  courseId: 'courseId_5hinkoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_namurumoriawase',
  name: 'ナムル盛り合わせ',
  description: 'ゼンマイナムル、もやしナムル、ほうれん草ナムル、人参ナムルを含みます。',
  allergen: '1010101010100000001011010110',
  image: '/courseMenu/ynamuru.jpg',
  courseId: 'courseId_5hinkoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_gyouzasenmontenyoshiko',
  madori: '',
  smoking: true,
  table: true,
  seats: 13,
  maximum: 20,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  toiletId: 'toiletId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_gyouzasenmontenyoshiko',
  inside: false,
  outside: true,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_gyouzasenmontenyoshiko',
  gender: '共用',
  wayou: true,
  washlet: true,
  toiletId: 'toiletId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_gyouzasenmontenyoshiko',
  card: '0111000',
  cash: false,
  QR: '011110',
  transit: true,
  IDPay: true,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: true,
  Pitapa: false,
  UNIONPAY: true,
  storeId: 'storeId_gyouzasenmontenyoshiko',
  createdAt: new Date(),
  updatedAt: new Date(),
};
