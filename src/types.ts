export interface IProfileStore {
  avatar: string;
  name: string;
  isOnline: boolean;
}

export interface ICaregory {
  id?: number;
  name: string;
  alias: string;
}

export interface IBookmark {
  id: number;
  title: string;
  url: string;
  category_id: number;
  image: string;
}

export interface IBookmarksStore {
  categories: ICaregory[],
  sort: 'title' | 'date',
  bookmarks: IBookmark[],
}

export interface IProfileAPI {
  name: string;
}
