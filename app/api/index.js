import dataSources from '../data/dataSources.json';
import czestoscImion from '../data/all/czestoscImion.json';

export const API_URL = 'http://localhost:8000';
export const ANALYSIS_API_URL = 'http://localhost:8080';

export function APIgetResources(text = '') {
	const url = `${API_URL}/resources/?q=${text}`
  return fetch(url, {
    method: 'GET',
  }).then(response => response.json())
		.catch(console.log(`Error for request: ${url}`));
}

export function APIgetResource(id) {
	const url = `${API_URL}/resources/${id}`;
  return fetch(url, {
    method: 'GET',
  }).then(response => response.json())
		.catch(e => console.log(`Error for request: ${url}`));
}

export function analysisGetResource(id) {
	const url = `${ANALYSIS_API_URL}/getResource/${id}`;
  return fetch(url , {
    method: 'GET',
  }).then(response => response.json())
	.catch(e => console.log(`Error for request: ${url}`));
}

export function analysisGetChartData(id, data) {
	const fetchId = id || '';
	const url = `${ANALYSIS_API_URL}/getChartData/${fetchId}`;
  return fetch(url, {
    method: 'POST',
		body: data,
  }).then(response => response.json())
		.catch(console.log(`Error for request: ${url}`));
}

