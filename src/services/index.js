import axios from 'axios';

export default (endpoint = 'https://www.breakingbadapi.com/api/') => {
  let headers = { 'Content-Type': 'application/json' };

  const instance = axios.create({
    baseURL: endpoint,
    timeout: 30000,
    maxRedirects: 0,
    headers,
  });

  return instance;
};
