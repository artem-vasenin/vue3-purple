import {API_ROUTES} from "@/types/constants.ts";
import type {IProfile} from "@/types/profile.ts";

class Http {
    async getProfile(): Promise<IProfile | null> {
        try {
            const res = await fetch(API_ROUTES.PROFILE);
            if (!res) throw new Error('Request wrong');
            return res.json();
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}

export const http = new Http();