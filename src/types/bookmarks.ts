export interface IBookmark {
    id: number;
    category_id: number;
    url: string;
    title: string;
    image: string | null;
    created_at: string;
}