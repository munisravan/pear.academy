import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
<<<<<<< HEAD
import {BookCourseComponent} from './book-course/book-course.component';
=======
import { AuthGuardService } from './core';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';
>>>>>>> 3a59febcad3997a15523757e4cd48c3a3e0180fe

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'mailconfirmation',
    component: MailConfirmComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
    {
    path: 'bookcourse',
    component: BookCourseComponent
  },

  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
