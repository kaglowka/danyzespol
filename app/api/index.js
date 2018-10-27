import dataSources from '../data/dataSources.json';
import czestoscImion from '../data/all/czestoscImion.json';

export const API_URL = 'http://localhost:8000';
export const ANALYSIS_API_URL = 'http://localhost:8080';

export function APIgetResources() {
  return fetch(`${API_URL}/resources`, {
    method: 'GET',
  }).then(response => response.json())
}

export function APIgetResource(id) {
  return fetch(`${API_URL}/resources/${id}`, {
    method: 'GET',
  }).then(response => response.json())
}

export function analysisGetResource(id) {
  return fetch(`${ANALYSIS_API_URL}/getResource/${id}`, {
    method: 'GET',
  }).then(response => response.json())
}

export function analysisGetChartData(id) {
  return fetch(`${ANALYSIS_API_URL}/getChartData/${id}`, {
    method: 'GET',
  }).then(response => response.json())
}

