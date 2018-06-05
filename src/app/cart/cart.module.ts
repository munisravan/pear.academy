import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CartCheckoutViewComponent } from './cart-checkout-view/cart-checkout-view.component';
import { CartComponent } from './cart.component';
import {ShoppingCartModule} from 'ng-shopping-cart';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CartCheckoutComponent,
    CartCheckoutViewComponent,
    CartComponent]
})
export class CartModule { }
