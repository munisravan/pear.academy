import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PearNotificationService } from '../core/services/notification.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  selectorAuth,
  routerTransition
} from '@app/core';
@Component({
  selector: 'pear-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;
  constructor(private formBuilder: FormBuilder, private notificationService: PearNotificationService,
    private store: Store<any>,
    private router: Router) {
    this.loginFormErrors = {
      email: {},
      password: {}
    };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }
  loginFormHandler(loginFormValue) {
    if (loginFormValue.email === 'admin@pear.academy' && loginFormValue.password === 'academy') {
      this.notificationService.success('Login', 'Login Succesfull');
      this.router.navigateByUrl('/admin/dashboard');
      this.store.dispatch(new ActionAuthLogin());
    } else if (loginFormValue.email === 'user@pear.acdemy') {
      this.router.navigateByUrl('/cart');
      this.store.dispatch(new ActionAuthLogin());
      this.notificationService.success('Login', 'Login Succesfull');
    } else {
      this.notificationService.error('Login failed', 'Username or password incorrect');
    }
  }

  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }
}
