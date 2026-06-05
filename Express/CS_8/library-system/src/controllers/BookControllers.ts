import { Request, Response } from 'express';  
import { BookService } from '../services/BookServices';  

export class BookController {  
  constructor(private bookService: BookService) {}  

async borrowBook(req: Request, res: Response): Promise<void> {  
  try {  
    const bookId = req.params.id as string; 
    
    const book = await this.bookService.borrowBook(bookId);  
    res.json({ message: "Book successfully borrowed", book });  
  } catch (error: any) {  
    res.status(400).json({ error: error.message });  
  }  
}  

async returnBook(req: Request, res: Response): Promise<void> {
  try {
    const bookId = req.params.id as string;
    
    const book = await this.bookService.returnBook(bookId);
    res.json({ message: "Book successfully returned", book });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
}