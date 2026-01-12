import { API_ROUTES, http } from "@/api";
import type { IAuth, ILogin, ILoginResponce } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const AUTH_TOKEN_KEY = 'auth-token';

export const useAuthStore = defineStore('auth', () => {
  const auth = ref({
    login: '',
    name: '',
    token: '',
  });

  const initialToken = localStorage.getItem(AUTH_TOKEN_KEY);

  if (typeof initialToken === 'string' && initialToken.length) {
    auth.value.token = initialToken;
  }

  const setToken = (token: string): void => {
    auth.value.token = token
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  const clearToken = () => {
    auth.value.token = '';
    auth.value.login = '';
    auth.value.name = '';
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  const getToken = computed(() => auth.value.token);

  const login = async (dto: ILogin): Promise<ILoginResponce> => {
    const { data } = await http.post<ILoginResponce>(`${API_ROUTES.AUTH}/login`, dto);

    if (data.token) {
      auth.value.token = data.token;
      setToken(data.token);
    }
    return data;
  }

  const getProfile = async (): Promise<IAuth> => {
    const { data } = await http.get<IAuth>(`${API_ROUTES.AUTH}/profile`);
    auth.value.login = data.email;
    auth.value.name = data.name;

    return data;
  }

  return { auth, getToken, setToken, clearToken, login, getProfile };
});
