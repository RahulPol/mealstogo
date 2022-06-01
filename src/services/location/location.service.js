import camelize from 'camelize';
import { locations } from './mock/location.mock';

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('Not Found');
    }
    resolve(locationMock);
  });
};

export const locationTransform = ({ results }) => {
  const { geometry = {} } = camelize(results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
