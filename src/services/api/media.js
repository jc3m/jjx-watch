// @flow
import type { MediaData } from '../media/actions';
import type { EpisodeData } from '../show/reducer';

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

export function createShow(title: string, showId: string): Promise<void> {
  return fetch('/api/media/shows', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, showId }),
  }).then((response: Response) => {
    if (response.ok) {
      return;
    }
    throw new Error(`Error creating Show: ${response.statusText}`);
  });
}

type EpisodeAPIFormat = {
  title: string,
  episodes: EpisodeData[],
};
export function getEpisodes(showId: string): Promise<EpisodeAPIFormat> {
  return fetch(`/api/media/shows/${showId}`, {
    method: 'GET'
  }).then((response: Response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`Error fetching episodes for ${showId}: ${response.statusText}`);
  }).then(response => response.json());
}

export function createEpisode(showId: string, season: number, episode: number, title: string, url: string): Promise<void> {
  return fetch('/api/media/shows/ep', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ showId, season, episode, title, url }),
  }).then((response: Response) => {
    if (response.ok) {
      return;
    }
    throw new Error(`Error creating Episode: ${response.statusText}`);
  });
}

export default {
  getMedia,
  createMovie,
  createShow,
  getEpisodes,
  createEpisode,
};
