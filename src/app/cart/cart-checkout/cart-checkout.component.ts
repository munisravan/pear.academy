import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from 'ng-shopping-cart';
import { PearCartItem } from '../../cart-item';

@Component({
  selector: 'pear-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit, OnDestroy {

  private serviceSubstription: EventEmitter<any>;
  custom = false;
  label = 'Checkout';
  settingsCollapsed = false;
  resultsCollapsed = false;
  disabled = false;

  constructor(private cartService: CartService<PearCartItem>) {

  }

  ngOnInit(): void {
    this.checkService();
    this.serviceSubstription = this.cartService.onItemsChanged.subscribe(() => {
      this.checkService();
    });
  }

  checkService() {
    this.disabled = this.cartService.isEmpty();
  }

  ngOnDestroy(): void {
    this.serviceSubstription.unsubscribe();
  }

}
