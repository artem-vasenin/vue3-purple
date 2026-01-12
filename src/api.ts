import axios from "axios";
import { useAuthStore } from "./store/auth";

export const API_BASE_URL = 'http://localhost:3000/api/';
export const API_ROUTES = {
  PROFILE: 'profile',
  CATEGORIES: 'categories',
  BOOKMARKS: 'bookmarks',
  AUTH: 'auth',
}

export const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const https = () => {
  const store = useAuthStore();

  return axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${store.getToken}`,
    }
  });
};
