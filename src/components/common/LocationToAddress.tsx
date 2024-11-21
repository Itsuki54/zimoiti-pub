import axios from 'axios';

interface Location {
  lat: number;
  lng: number;
}

interface GeocodingResponse {
  results: {
    geometry: {
      location: Location;
    };
  }[];
}

const getLocationByAddress = async (
  address?: string,
): Promise<Location | null> => {
  const address0 = address ?? '';
  try {
    const response = await axios.get<GeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address: address0,
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        },
      },
    );

    if (response.status === 200) {
      const geocodingResponse = response.data;
      const location = geocodingResponse.results[0].geometry.location;
      return location;
    }
    else {
      return null;
    }
  }
  catch (error) {
    console.error('Error fetching location:', error);
    return null;
  }
};

export default getLocationByAddress;
