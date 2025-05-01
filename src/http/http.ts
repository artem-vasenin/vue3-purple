import axios from "axios";
import {API_BASE, API_ROUTES} from "@/types/constants.ts";
import type {IProfile} from "@/types/profile.ts";

class Http {
    ax = axios.create({
        baseURL: API_BASE,
        timeout: 10000,
    });

    async getProfile(): Promise<IProfile | null> {
        try {
            const res = await this.ax.get<IProfile>(API_ROUTES.PROFILE);
            if (!res.data) throw new Error('Request wrong');
            return res.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}

export const http = new Http();