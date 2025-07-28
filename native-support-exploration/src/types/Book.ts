export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  isbn: string;
  pages: number;
  publishedDate: string;
  genre: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem {
  book: Book;
  quantity: number;
}
