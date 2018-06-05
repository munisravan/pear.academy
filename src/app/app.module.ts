import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import {MatStepperModule} from '@angular/material/stepper';
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
<<<<<<< HEAD
import { TestComponent } from './test/test.component';
import { BookCourseComponent } from './book-course/book-course.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
=======
import { PearCartItem } from './cart-item';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';


>>>>>>> 3a59febcad3997a15523757e4cd48c3a3e0180fe

@NgModule({
  imports: [
      // angular
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
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
        storageKey: 'PearShoppingCart',
        clearOnError: true
      }
<<<<<<< HEAD
    })
  ],
  declarations: [AppComponent, LoginComponent, RegisterComponent, TestComponent, BookCourseComponent],
=======
    }),
    SimpleNotificationsModule.forRoot(),

    ],
  declarations: [AppComponent, LoginComponent, RegisterComponent, MailConfirmComponent],
>>>>>>> 3a59febcad3997a15523757e4cd48c3a3e0180fe
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
