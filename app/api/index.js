import dataSources from '../data/dataSources.json';
import czestoscImion from '../data/all/czestoscImion.json';

export const API_URL = 'http://localhost:8000';

export function getResources() {
  return fetch(`${API_URL}/resources`, {
    method: 'GET',
  }).then(response => response.json())
}

export function getResource(id) {
  return fetch(`${API_URL}/resources/${id}`, {
    method: 'GET',
  }).then(response => response.json())
}
