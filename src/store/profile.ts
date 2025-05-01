import {defineStore} from "pinia";
import type {IProfile} from "@/types/profile.ts";
import {ref} from "vue";

export const useProfileStore = defineStore('profile', () => {
    const profile = ref<IProfile | null>(null);

    return { profile };
});
