'use client';

import getLocationByAddress from '@/components/common/LocationToAddress';
import Layout from '@/layouts/User';
import {
  DrawPolygonByDraggingMode,
  EditableGeoJsonLayer,
} from '@deck.gl-community/editable-layers';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import DeckGL from '@deck.gl/react';
import { Prisma } from '@prisma/client';
import {
  Map,
  Marker,
  useMap,
} from '@vis.gl/react-google-maps';
import NextHeadSeo from 'next-head-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';
import {
  useEffect,
  useMemo,
  useState,
} from 'react';

type storeWithAddress = Prisma.StoreGetPayload<{
  include: { address: true; times: true; };
}>;

type storeWithLocation = storeWithAddress & {
  address: {
    lat: number;
    lng: number;
  };
};

export const DeckGlOverlay = ({ layers }: any) => {
  const deck = useMemo(() => new GoogleMapsOverlay({ interleaved: true }), []);

  const map = useMap();
  useEffect(() => {
    deck.setMap(map);
    return () => deck.setMap(null);
  }, [map]);
  useEffect(() => deck.setProps({ layers }), [layers]);
  return null;
};

export default function SearchMap({ stores }: { stores: storeWithLocation[]; }) {
  const router = useRouter();
  const [draggable, setDraggable] = useState(false);
  const [features, setFeatures] = useState({
    type: 'FeatureCollection',
    features: [],
  });
  const [mode, setMode] = useState(() => DrawPolygonByDraggingMode);
  const [selectedFeatureIndexes] = useState([]);

  const layer = new EditableGeoJsonLayer({
    data: features,
    // @ts-ignore
    mode,
    selectedFeatureIndexes,
    onEdit: ({ updatedData, editType }: any) => {
      if (features.features.length === 0) {
        setFeatures(updatedData);
      }
      else if (editType === 'addFeature') {
        setFeatures({
          type: 'FeatureCollection',
          // @ts-ignore
          features: [updatedData.features[1]],
        });
      }
    },
  });

  return (
    <Layout home={true}>
      <NextHeadSeo
        title='地図検索 - じもイチ'
        description='地図検索 - じもイチ'
      />
      <div className='absolute bg-white p-4 z-10 w-full shadow left-0'>
        <button onClick={() => router.back()} className='text-primary'>
          戻る
        </button>
      </div>
      {
        /*
        // @ts-ignore */
      }
      <DeckGL
        viewState={{
          latitude: 35.60656764893423,
          longitude: 139.74840359917033,
          zoom: 16,
        }}
        layers={[layer]}
      >
        <Map
          defaultCenter={{ lat: 35.60656764893423, lng: 139.74840359917033 }}
          defaultZoom={16}
          className='absolute left-0 w-full h-screen -z-10'
        >
          {stores.map(store => (
            <Marker
              key={store.id}
              position={{
                lat: store.address.lat,
                lng: store.address.lng,
              }}
            />
          ))}
        </Map>
      </DeckGL>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  /*const stores = await fetch(`${process.env.NEXTAUTH_URL}/api/store`);
  const data: { status: string; data: storeWithAddress[] } =
    await stores.json();
  let convertedStore = data.data.map(async (store) => {
    const location = await getLocationByAddress(
      `${store.address?.state}${store.address?.city}${store.address?.street}`,
    );
    return {
      ...store,
      address: {
        ...store.address,
        lat: location!.lat,
        lng: location!.lng,
      },
    };
  });
  //console.log(convertedStore);*/
  const convertedStore = [
    {
      id: 1,
      name: 'アヅマ 東京店',
      address: {
        lat: 35.606247521410616,
        lng: 139.74573209079261,
      },
    },
    {
      id: 2,
      name: '鮫洲運転免許試験場',
      address: {
        lat: 35.60458015599849,
        lng: 139.7469209398092,
      },
    },
    {
      id: 3,
      name: '品川シーサイドビュータワー',
      address: {
        lat: 35.608650655576085,
        lng: 139.74904166918714,
      },
    },
  ];
  return {
    props: {
      stores: convertedStore,
    },
  };
};
