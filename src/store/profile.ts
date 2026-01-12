import { defineStore } from "pinia";
import { ref } from "vue";

import { API_ROUTES, http } from "@/api";
import type { IProfileStore, IProfileAPI } from "@/types";


export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfileStore>({
    avatar: 'https://placehold.co/100x100?text=G&color=gray',
    name: 'Гость',
    email: '',
    isOnline: false,
  });

  const getProfile = async (): Promise<void> => {
    const { data } = await http.get<IProfileAPI>(API_ROUTES.PROFILE);
    profile.value.name = data.name;
  };

  return { profile, getProfile };
});
