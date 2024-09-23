import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KininonawaService {

  constructor(private http:HttpClient) { }
  

  getAllBooks(bean : any) {
    return this.http.post('http://localhost:8080/books/getAllBooks' , bean);
  }


  getBookById(bean : any) {
    return this.http.post('http://localhost:8080/books/getBookById' , bean);
  }

  addBook(bean : any) {
    return this.http.post('http://localhost:8080/books/addBook' , bean);
  }

  deleteBook(bean : any) {
    return this.http.post('http://localhost:8080/books/deleteBook' , bean);
  }
}
