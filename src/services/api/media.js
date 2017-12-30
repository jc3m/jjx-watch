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

export function createMovie(title: string, url: string): Promise<void> {
  return fetch('/api/media/movies', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, url }),
  }).then((response: Response) => {
    if (response.ok) {
      return;
    }
    throw new Error(`Error creating Movie: ${response.statusText}`);
  });
}

export default {
  getMedia,
  createMovie,
};
