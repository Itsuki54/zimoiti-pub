'use client';
import AllergyCard from './AllergyCard';

interface allergy {
  imageUrl: string;
  allergyname: string;
  size: number;
}
const imageUrls: allergy[] = [
  {
    imageUrl: '/allergy/5063.jpg',
    allergyname: '卵',
    size: 80,
  },
  {
    imageUrl: '/allergy/4809.jpg',
    allergyname: '舞茸',
    size: 100,
  },
  {
    imageUrl: '/allergy/2138.jpg',
    allergyname: 'バナナ',
    size: 100,
  },
  {
    imageUrl: '/allergy/11917.jpg',
    allergyname: 'キウイ',
    size: 100,
  },
  {
    imageUrl: '/allergy/20328.jpg',
    allergyname: '大豆',
    size: 100,
  },
  {
    imageUrl: '/allergy/28732.jpg',
    allergyname: 'アーモンド',
    size: 100,
  },
  {
    imageUrl: '/allergy/28770.jpg',
    allergyname: 'カシューナッツ',
    size: 100,
  },
  {
    imageUrl: '/allergy/29146.jpg',
    allergyname: '牛肉',
    size: 100,
  },
  {
    imageUrl: '/allergy/30018.jpg',
    allergyname: '鮭',
    size: 150,
  },
  {
    imageUrl: '/allergy/31537.jpg',
    allergyname: '鶏肉',
    size: 100,
  },
  {
    imageUrl: '/allergy/35033.jpg',
    allergyname: 'そば',
    size: 100,
  },
  {
    imageUrl: '/allergy/35037.jpg',
    allergyname: 'くるみ',
    size: 100,
  },
  {
    imageUrl: '/allergy/4081.jpg',
    allergyname: 'りんご',
    size: 100,
  },
  {
    imageUrl: '/allergy/5702.jpg',
    allergyname: '牛乳',
    size: 50,
  },
  {
    imageUrl: '/allergy/38226.jpg',
    allergyname: 'いくら',
    size: 100,
  },
  {
    imageUrl: '/allergy/35258.jpg',
    allergyname: '小麦',
    size: 60,
  },
  {
    imageUrl: '/allergy/5854.jpg',
    allergyname: '桃',
    size: 100,
  },
  {
    imageUrl: '/allergy/7545.jpg',
    allergyname: 'えび',
    size: 100,
  },
  {
    imageUrl: '/allergy/7570.jpg',
    allergyname: 'かに',
    size: 100,
  },
  {
    imageUrl: '/allergy/7746.jpg',
    allergyname: '豚肉',
    size: 100,
  },
  {
    imageUrl: '/allergy/8159.jpg',
    allergyname: 'イカ',
    size: 100,
  },
  {
    imageUrl: '/allergy/8519.jpg',
    allergyname: '落花生',
    size: 100,
  },
  {
    imageUrl: '/allergy/1539850.jpg',
    allergyname: 'ごま',
    size: 100,
  },
  {
    imageUrl: '/allergy/22011090.jpg',
    allergyname: '里芋',
    size: 100,
  },
  {
    imageUrl: '/allergy/22619923.jpg',
    allergyname: 'あわび',
    size: 100,
  },
  {
    imageUrl: '/allergy/98.jpg',
    allergyname: 'オレンジ',
    size: 100,
  },
  {
    imageUrl: '/allergy/9200.jpg',
    allergyname: 'ゼラチン',
    size: 120,
  },
  {
    imageUrl: '/allergy/30020.jpg',
    allergyname: 'さば',
    size: 150,
  },
];
// const imageUrls: allergy[] = [
//   {
//     imageUrl: "/5063.jpg",
//     allergyname: "卵",
//     size: 80,
//   },
//   {
//     imageUrl: "/4809.jpg",
//     allergyname: "舞茸",
//     size: 100,
//   },
//   {
//     imageUrl: "/2138.jpg",
//     allergyname: "バナナ",
//     size: 100,
//   },
//   {
//     imageUrl: "/11917.jpg",
//     allergyname: "キウイ",
//     size: 100,
//   },
//   {
//     imageUrl: "/20328.jpg",
//     allergyname: "大豆",
//     size: 100,
//   },
//   {
//     imageUrl: "/28732.jpg",
//     allergyname: "アーモンド",
//     size: 100,
//   },
//   {
//     imageUrl: "/28770.jpg",
//     allergyname: "カシューナッツ",
//     size: 100,
//   },
//   {
//     imageUrl: "/29146.jpg",
//     allergyname: "牛肉",
//     size: 100,
//   },
//   {
//     imageUrl: "/30018.jpg",
//     allergyname: "鮭",
//     size: 150,
//   },
//   {
//     imageUrl: "/31537.jpg",
//     allergyname: "鶏肉",
//     size: 100,
//   },
//   {
//     imageUrl: "/35033.jpg",
//     allergyname: "そば",
//     size: 100,
//   },
//   {
//     imageUrl: "/35037.jpg",
//     allergyname: "くるみ",
//     size: 100,
//   },
//   {
//     imageUrl: "/4081.jpg",
//     allergyname: "りんご",
//     size: 100,
//   },
//   {
//     imageUrl: "/5702.jpg",
//     allergyname: "牛乳",
//     size: 50,
//   },
//   {
//     imageUrl: "/38226.jpg",
//     allergyname: "いくら",
//     size: 100,
//   },
//   {
//     imageUrl: "/35258.jpg",
//     allergyname: "小麦",
//     size: 60,
//   },
//   {
//     imageUrl: "/5854.jpg",
//     allergyname: "桃",
//     size: 100,
//   },
//   {
//     imageUrl: "/7545.jpg",
//     allergyname: "えび",
//     size: 100,
//   },
//   {
//     imageUrl: "/7570.jpg",
//     allergyname: "かに",
//     size: 100,
//   },
//   {
//     imageUrl: "/7746.jpg",
//     allergyname: "豚肉",
//     size: 100,
//   },
//   {
//     imageUrl: "/8159.jpg",
//     allergyname: "イカ",
//     size: 100,
//   },
//   {
//     imageUrl: "/8519.jpg",
//     allergyname: "落花生",
//     size: 100,
//   },
//   {
//     imageUrl: "/1539850.jpg",
//     allergyname: "ごま",
//     size: 100,
//   },
//   {
//     imageUrl: "/22011090.jpg",
//     allergyname: "里芋",
//     size: 100,
//   },
//   {
//     imageUrl: "/22619923.jpg",
//     allergyname: "あわび",
//     size: 100,
//   },
//   {
//     imageUrl: "/98.jpg",
//     allergyname: "オレンジ",
//     size: 100,
//   },
//   {
//     imageUrl: "/9200.jpg",
//     allergyname: "ゼラチン",
//     size: 120,
//   },
//   {
//     imageUrl: "/30020.jpg",
//     allergyname: "さば",
//     size: 150,
//   },
// ];

const AllergyGrid: React.FC = () => {
  return (
    <div className=' flex-wrap justify-center gap-4 p-4 grid grid-cols-5'>
      {imageUrls.map((allergy, index) => (
        <AllergyCard
          key={index}
          imageUrl={allergy.imageUrl}
          allergyname={allergy.allergyname}
          size={allergy.size}
          index={index}
        />
      ))}
    </div>
  );
};

export default AllergyGrid;
