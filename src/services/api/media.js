// @flow
import type { MediaData } from '../media/actions';

export function getMedia(): Promise<MediaData> {
  return fetch('/api/media', {
    method: 'GET',
  }).then((response: Response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`Error fetching images: ${response.statusText}`);
  }).then(response => response.json());
}

export default {
  getMedia,
};
