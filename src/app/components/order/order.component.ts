import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
 
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigate(['dashboard'])
  }
}
