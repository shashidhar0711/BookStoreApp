import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header: FormGroup
  name
  email
  bag=0;
  list

  constructor(public route: Router, private fb:FormBuilder ) { 
    this.header=fb.group({
      dataa:[""]
    })
  }  
  ngOnInit() {
  }
  gotoCart() {
    this.route.navigate(['dashboard/cart'])
  }
}
