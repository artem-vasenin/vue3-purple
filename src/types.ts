export interface IProfileStore {
  avatar: string;
  name: string;
  isOnline: boolean;
}

export interface ICaregory {
  name: string;
  alias: string;
}

export interface IBookmark {
  name: string;
  url: string;
}

export interface IBookmarksStore {
  categories: ICaregory[],
  category: ICaregory | null,
  bookmarks: IBookmark[],
}

export interface IProfileAPI {
  name: string;
}
