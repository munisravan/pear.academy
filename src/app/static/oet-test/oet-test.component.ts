import { Component, OnInit } from '@angular/core';
import { CartService, AddToCartType } from 'ng-shopping-cart';
import { PearCartItem } from '../../cart-item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PearNotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'pear-oet-test',
  templateUrl: './oet-test.component.html',
  styleUrls: ['./oet-test.component.scss']
})
export class OetTestComponent implements OnInit {

  cartItem: any;
  currentKey = 'cartItem';
  quantity = 1;
  custom = false;
  label = 'Add to cart';
  editor = 'button';
  constructor(private cartService: CartService<PearCartItem>,
    public notificationService: PearNotificationService,
    public snackBar: MatSnackBar) {
    this.createItem();
  }

  ngOnInit() {
  }

  createItem() {
    this.currentKey = 'cartItem';
    this.cartItem = new PearCartItem({
      identifier: Date.now(),
      description: 'Test description',
      country: 'AU',
      label: 'OET',
      cost: '1000'
    });
  }

  addToCart(item) {
    this.createItem();
    this.showNotification('Item succesfully added to cart');
    this.notificationService.success('Cart', 'Item succesfully added to cart');
  }
  private showNotification(message: string, action?: string) {
    return this.snackBar.open(message, action, {
      duration: 2500,
    });
  }
}
