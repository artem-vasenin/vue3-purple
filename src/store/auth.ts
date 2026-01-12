import { API_ROUTES, http, https } from "@/api";
import type { IAuth, IAuthStore, ILogin, ILoginResponce } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const AUTH_TOKEN_KEY = 'auth-token';

export const useAuthStore = defineStore('auth', () => {
  const auth = ref<IAuthStore>({
    login: '',
    name: '',
    token: '',
    isOnline: false,
    avatar: 'https://placehold.co/100x100?text=G&color=gray',
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

  const getProfile = async (): Promise<IAuth> => {
    const { data } = await https().get<IAuth>(`${API_ROUTES.AUTH}/profile`);
    auth.value.login = data.email;
    auth.value.name = data.name;

    return data;
  }

  const getToken = computed(() => auth.value.token);

  const login = async (dto: ILogin): Promise<ILoginResponce> => {
    const { data } = await http.post<ILoginResponce>(`${API_ROUTES.AUTH}/login`, dto);

    if (data.token) {
      auth.value.token = data.token;
      setToken(data.token);
      getProfile();
    }
    return data;
  }

  return { auth, getToken, setToken, clearToken, login, getProfile };
});
