import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/bookService/book-service.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  constructor(private bookServiceService:BookServiceService) { }

  booksArray: Array<any> = [];
  cartItems: Array<any> = [];
  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookServiceService.getBook().subscribe(response=> {
      console.log(response);
      this.booksArray = response['result']
      console.log("books array ",this.booksArray);
  })
  }

  addcart(book){
    this.cartItems.push(book);
    localStorage.setItem('addedtocart',JSON.stringify(this.cartItems));
    console.log()
  }

  review() {
    return Math.floor(Math.random()*(5-1)+1)
  }
}
