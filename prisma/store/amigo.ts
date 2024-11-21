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
  id: 'ownerId_matsumotomegumi',
  email: 'matsumotomegumi@example.com',
  name: '松本恵',
  password: 'password_matsumotomegumi',
  type: UserRole.OWNER,
  storeId: 'storeId_mekishikankafeamiigo',
  settingId: 'settingId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSetting: Setting = {
  id: 'settingId_mekishikankafeamiigo',
  recommned: false,
  ownerId: 'ownerId_matsumotomegumi',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleStore: Store = {
  id: 'storeId_mekishikankafeamiigo',
  name: 'メキシカンカフェ アミーゴ',
  addressId: 'addressId_mekishikankafeamiigo',
  phone: '99-3189-8534',
  email: 'mekishikankafeamiigo@example.com',
  genre: 'メキシコ料理',
  url: 'https://www.mekishikankafeamiigo.co.jp',
  image: '/store/amigo.jpg',
  barrier: true,
  light: 3,
  lively: 1,
  location: '繁華街',
  language: '111000111',
  birthday: false,
  mobile: true,
  wifi: true,
  pet: false,
  takeout: false,
  smoking: false,
  stamp: false,
  point: true,
  invoice: true,
  kids: false,
  freeDrink: 'お茶',
  otoshi: 300,
  serviceFee: 300,
  bring: 2,
  unlimited: 100,
  buffet: 1660,
  outlet: 11,
  createdAt: new Date(),
  updatedAt: new Date(),
  // paymentId: "paymentId_mekishikankafeamiigo",
  // parkingId: "parkingId_mekishikankafeamiigo",
  // timeId: "timeId_mekishikankafeamiigo",
};

export const sampleParking: Parking = {
  id: 'parkingId_mekishikankafeamiigo',
  inside: false,
  outside: true,
  capacity: 14,
  storeId: 'storeId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu1: Menu = {
  id: 'menuId_takosu',
  name: 'タコス',
  genre: '惣菜',
  description: '新鮮な素材をカラッと揚げました。',
  readyTime: '10分',
  allergen: '0001110001001010100011000000',
  image: '/menu/takosu.jpg',
  price: 350,
  storeId: 'storeId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleMenu2: Menu = {
  id: 'menuId_nachosu',
  name: 'ナチョス',
  genre: '鍋料理',
  description: '甘辛のタレで仕上げました。',
  readyTime: '23分',
  allergen: '0010100110000111101100001100',
  image: '/menu/nachosu.jpg',
  price: 530,
  storeId: 'storeId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleAddress: Address = {
  id: 'addressId_mekishikankafeamiigo',
  street: 'さくら通り',
  city: '東京都',
  state: '新宿区',
  zip: '189-8534',
  storeId: 'storeId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleTime: Time = {
  id: 'timeId_mekishikankafeamiigo',
  day: '1010101',
  open: '7:00',
  close: '19:00',
  tag: '通常営業時間',
  storeId: 'storeId_mekishikankafeamiigo',
  parkingId: 'parkingId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleServiceTime: ServiceTime = {
  id: 'serviceTimeId_mekishikankafeamiigo',
  day: '1010101',
  start: '18:00',
  end: '21:00',
  tag: 'ディナー',
  menuId: 'menuId_takosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleReserve: Reserve = {
  id: 'reserveId_mekishikankafeamiigo',
  storeId: 'storeId_mekishikankafeamiigo',
  phone: '99-3189-8534',
  email: 'mekishikankafeamiigo@example.com',
  url: 'https://www.mekishikankafeamiigo.co.jp/reserve',
  timeId: 'timeId_mekishikankafeamiigo',
};

export const sampleCourse: Course = {
  id: 'courseId_mekishikandinaakoosu',
  name: 'メキシカンディナーコース',
  description: 'メキシコの味を満喫できます。',
  genre: 'メキシコ料理',
  image: '/courseMenu/mekisiko.jpg',
  price: 3350,
  storeId: 'storeId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu1: CourseMenu = {
  id: 'courseMenuId_chirikonkan',
  name: 'チリコンカン',
  description: '新鮮なトマトを使用。',
  allergen: '1110101101010000111001111001',
  image: '/courseMenu/tomato.jpg',
  courseId: 'courseId_mekishikandinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleCourseMenu2: CourseMenu = {
  id: 'courseMenuId_churosu',
  name: 'チュロス',
  description: '甘さ控えめ。',
  allergen: '1010001101010001011011000010',
  image: '/courseMenu/chorosu.jpg',
  courseId: 'courseId_mekishikandinaakoosu',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleSeat: Seat = {
  id: 'seatId_mekishikankafeamiigo',
  madori: '',
  smoking: false,
  table: true,
  seats: 6,
  maximum: 10,
  storeId: 'storeId_mekishikankafeamiigo',
  toiletId: 'toiletId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToilet: Toilet = {
  id: 'toiletId_mekishikankafeamiigo',
  inside: true,
  outside: false,
  storeId: 'storeId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const sampleToiletType: ToiletType = {
  id: 'toiletTypeId_mekishikankafeamiigo',
  gender: '共用',
  wayou: false,
  washlet: true,
  toiletId: 'toiletId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const samplePayment: Payment = {
  id: 'paymentId_mekishikankafeamiigo',
  card: '0100000',
  cash: false,
  QR: '100100',
  transit: true,
  IDPay: true,
  QuickPay: false,
  Nanaco: false,
  Edy: false,
  WAON: false,
  Pitapa: true,
  UNIONPAY: false,
  storeId: 'storeId_mekishikankafeamiigo',
  createdAt: new Date(),
  updatedAt: new Date(),
};
