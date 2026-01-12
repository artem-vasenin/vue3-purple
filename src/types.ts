export interface IProfileStore {
  avatar: string;
  name: string;
  email: string;
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

export interface IAddBookmark {
 category_id: number;
 url: string;
}

export interface IProfileAPI {
  name: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponce {
  token?: string;
  error?: string;
}

export interface IAuth {
  email: string;
  name: string;
}
