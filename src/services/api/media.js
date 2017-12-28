// @flow
import type { MediaData } from '../media/actions';

type MediaResponseJSON = {
  success: boolean,
  data: MediaData,
};

export function getMedia(): Promise<MediaData> {
  return fetch('/api/media', {
    method: 'GET',
  }).then((response: Response) => {
    if (response.ok) {
      return response;
    }
    throw new Error('Error fetching images');
  }).then(response => response.json())
  .then((json: MediaResponseJSON) => {
    if (json.success) {
      return json.data;
    } else {
      throw new Error('Error fetching images');
    }
  });
}

export default {
  getMedia,
};
