import { API_ROUTES, http } from "@/api";
import type { IAddBookmark, IBookmark, IBookmarksStore, ICaregory } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<IBookmarksStore>({
    categories: [],
    sort: 'title',
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

  const delCategory = async (catId: number): Promise<ICaregory> => {
    const { data } = await http.delete<ICaregory>(`${API_ROUTES.CATEGORIES}/${catId}`);
    return data;
  };

  const editCategory = async (dto: ICaregory): Promise<ICaregory> => {
    const { data } = await http.put(`${API_ROUTES.CATEGORIES}/${dto.id}`, dto);
    return data;
  };

  const getBookmarks = async (catId: number): Promise<void> => {
    const { data } = await http.get<IBookmark[]>(`${API_ROUTES.CATEGORIES}/${catId}/bookmarks`, { params: { sort: bookmarks.value.sort } });
    bookmarks.value.bookmarks = data;
  };

  const setSort = (sort: 'title' | 'date'): void => {
    bookmarks.value.sort = sort;
  }

  const addBookmark = async (dto: IAddBookmark): Promise<IBookmark> => {
    const { data } = await http.post<IBookmark>(API_ROUTES.BOOKMARKS, dto);
    return data;
  };

  const delBookmark = async (id: number): Promise<IBookmark> => {
    const { data } = await http.delete(`${API_ROUTES.BOOKMARKS}/${id}`);
    return data;
  }

  return {
    bookmarks,
    getCategories,
    addCategory,
    getCategory,
    delCategory,
    editCategory,
    getBookmarks,
    addBookmark,
    delBookmark,
    setSort,
  };
});
