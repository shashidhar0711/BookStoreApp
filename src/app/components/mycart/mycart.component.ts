import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/bookService/book-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  panelOpenState = true;
  customerForm: FormGroup;
  books: Array<any> = [];

  CustomerForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl()
  })
  constructor(
    // private bookServiceService: BookServiceService, 
    // public snakbar: MatSnackBar,
    public router: Router) { }

    ngOnInit(): void {
      this.customerForm = new FormGroup({
        firstName: new FormControl(),
        PhoneNumber: new FormControl(),
        PinCode: new FormControl(),
        Locality: new FormControl(),
        Address: new FormControl(),
        City: new FormControl(),
        LandMark: new FormControl(),
      });
      this.books = JSON.parse(localStorage.getItem('addedtocart'));
      console.log(this.books);
    }
    checkout() {
      this.router.navigate(['dashboard/order']);
    }
    step = 0;
    setStep(index: number) {
      this.step = index;
    }
    nextStep() {
      this.step++;
    }
}
