import { IBookRepository } from './interfaces/IBookRepository';  
import { Book } from '../models/Books';  

export class InMemoryBookRepository implements IBookRepository {  
  private books: Book[] = [];  

  async findAll(): Promise<Book[]> {  
    return this.books;  
  }  

  async findById(id: string): Promise<Book | null> {  
    return this.books.find(book => book.id === id) || null;  
  }  

  async save(book: Book): Promise<void> {  
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      // If the book exists, update it (handles the borrow/return status change)
      this.books[index] = book;
    } else {
      // If it doesn't exist, add it to the array
      this.books.push(book);  
    }
  }  
}