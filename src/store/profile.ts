import {ref} from "vue";
import {defineStore} from "pinia";

import {http} from "@/http/http.ts";
import type {IProfile} from "@/types/profile.ts";

export const useProfileStore = defineStore('profile', () => {
    const profile = ref<IProfile | null>(null);

    const getProfile = async () => {
      profile.value = await http.getProfile();
    }

    return { profile, getProfile };
});
