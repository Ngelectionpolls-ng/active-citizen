import axios from 'axios';
import { getToken } from './token-encryption';

export const BASEURL = process.env.NEXT_PUBLIC_BASE_URL
export const api = axios.create({
    baseURL: BASEURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use(
    async (config) => {
      const AUTHENTICATION_TOKEN = getToken();
      if (AUTHENTICATION_TOKEN) {
        config.headers.Authorization = `Bearer ${AUTHENTICATION_TOKEN}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  