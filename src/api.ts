import axios from "axios";

export const API_BASE_URL = 'http://localhost:3000/api/';
export const API_ROUTES = {
  PROFILE: 'profile',
  CATEGORIES: 'categories',
}

export const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
