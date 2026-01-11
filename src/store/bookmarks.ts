import { API_ROUTES, http } from "@/api";
import type { IBookmarksStore, ICaregory } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmarksStore>({
    categories: [],
    category: null,
    bookmarks: [],
  });

  const getCategories = async (): Promise<void> => {
    const { data } = await http.get<ICaregory[]>(API_ROUTES.CATEGORIES);
    bookmarks.value.categories = data;
  };

  const addCategory = async (dto: ICaregory): Promise<ICaregory> => {
    const { data } = await http.post<ICaregory>(API_ROUTES.CATEGORIES, dto);
    bookmarks.value.categories.push(data);

    return data;
  }

  const getCategory = (alias?: string | string[]): ICaregory | undefined => {
    if (alias && typeof alias == 'string') {
      return bookmarks.value.categories.find(c => c.alias === alias);
    }
    return;
  };

  return { bookmarks, getCategories, addCategory, getCategory };
});
