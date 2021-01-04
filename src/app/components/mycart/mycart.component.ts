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

  // bag = []
  // price = new Array(5).fill(1)
  // bagBook = []
  // step = true;
  // step1 = false;
  // step2 = false;
  // noOfItem = 1
  // custData
  // totalAmount
  // nonoteCondition = false
  // item = this.total()

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
  // ngOnInit() {
  //   this.getCartItems()
  // }

  // setStep(index: number) {
  //   this.step = true;
  // }

  // setStep1(index: number) {
  //   this.step1 = true;
  // }

  // setStep2(index: number) {
  //   this.step2 = true;
  // }

  // addItem(index) {
  //   this.price[index] = ++this.noOfItem
  // }

  // removeItem(index) {
  //   if (this.noOfItem > 0)
  //     this.price[index] = --this.noOfItem
  // }

  // custDetail(val) {
  //   this.custData = {
  //     name: val.name,
  //     phone: val.phone,
  //     address: val.address,
  //     city: val.city,
  //     state: val.state
  //   }
  // }

  // total() {
  //   this.totalAmount = 0
  //   let i = 0
  //   this.bagBook.forEach(element => {
  //     this.totalAmount += element[0].price * this.price[i++]
  //   })
  //   return this.totalAmount
  // }

  // noItem() {
  //   return (this.bag.length == 2) ? this.nonoteCondition = true : this.nonoteCondition = false;
  // }

  // getCartItems() {
  //   this.bookServiceService.getCartItems().subscribe((res) => {
  //     console.log(" carts items ", res);
  //     this.bagBook=res['result']
  //     console.log(" this.bagBook",this.bagBook);
      

  //   })
  // }
}
