import axios from "axios";

import type {IProfile} from "@/types/profile.ts";
import type {ICategory} from "@/types/category.ts";
import {API_BASE, API_ROUTES} from "@/types/constants.ts";

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

    async getCatList(): Promise<ICategory[]> {
        try {
            const res = await this.ax.get<ICategory[]>(API_ROUTES.CATEGORY);
            if (!res.data) throw new Error('Request wrong');
            return res.data;
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    async setCategory(payload: Omit<ICategory, 'id'>): Promise<ICategory[]> {
        try {
            const res = await this.ax.post<ICategory[]>(API_ROUTES.CATEGORY, { ...payload });
            if (!res.data) throw new Error('Request wrong');
            return res.data;
        } catch (e) {
            console.error(e);
            return [];
        }
    }
}

export const http = new Http();