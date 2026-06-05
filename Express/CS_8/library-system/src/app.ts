import express from 'express';  
import { BookController } from './controllers/BookControllers';  
import { BookService } from './services/BookServices';  
import { InMemoryBookRepository } from './repositories/InMemoryBookRepository';  

const app = express();  
app.use(express.json());  

const bookRepository = new InMemoryBookRepository();  

bookRepository.save({ 
  id: "1", 
  title: "The Great Gatsby", 
  author: "F. Scott Fitzgerald", 
  isBorrowed: false 
});

const bookService = new BookService(bookRepository);  
const bookController = new BookController(bookService);  

app.post('/books/:id/borrow', (req, res) => bookController.borrowBook(req, res));  
app.post('/books/:id/return', (req, res) => bookController.returnBook(req, res));


const port = 3000;  
app.listen(port, () => {  
  console.log(`Maplewood Library system running on http://localhost:${port}`);  
});