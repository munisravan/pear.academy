import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pear-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guestCheckout() {
    this.router.navigateByUrl('guest');
  }
  userCheckout() {
    this.router.navigateByUrl('guest');

  }

}
