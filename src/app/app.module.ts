import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';
import { NotificationsService } from 'angular2-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartModule } from 'ng-shopping-cart'; // <-- Import the module class
import { CartModule } from './cart/cart.module';
import { PearNotificationService } from './core/services/notification.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PearCartItem } from './cart-item';



@NgModule({
  imports: [
      // angular
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // core & shared
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    // features
    StaticModule,
    SettingsModule,
    CartModule,
    // app
    AppRoutingModule,
    ShoppingCartModule.forRoot({ // <-- Add the cart module to your root module
      itemType: PearCartItem, // <-- Configuration is optional
      serviceType: 'localStorage',
      serviceOptions: {
        storageKey: 'NgShoppingCart',
        clearOnError: true
      }
    }),
    SimpleNotificationsModule.forRoot(),

    ],
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
