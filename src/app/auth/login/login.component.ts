import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';
import { ILogin } from '../models/login.interface';

/**
 * step 1 : create model
 * step 2 : crete interface based on model
 * step 3 : import reactive forms module to the coresponding modules
 * step 4 : declare formgroup properties inside the class
 * step 5 : bind those properties to the html
 * Note : Whenever you are using observables always make sure that you need to unsubscribe at ngOnDestroy() lifecyclehook
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginModel: ILogin = {
    email: '',
    password: '',
  };

  trackSubscription: Subscription;
  trackSubscription2!: Subscription;

  loginForm: FormGroup;

  get emailField() {
    return this.loginForm.get('email');
  }
  get passwordField() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.loginForm = this.fb.group({
      email: [
        'srini@gmail.com',
        [Validators.required, Validators.minLength(2), Validators.email],
      ],
      password: ['123SD', [Validators.required, Validators.minLength(2)]],
    });
    // console.log(this.loginForm)
    this.trackSubscription = this.loginForm.valueChanges.subscribe((d) => {});
  }

  login() {
    let temp: ILogin = this.loginForm.value;
    this.trackSubscription2 = this.api.login(temp).subscribe((d) => {
      let timerInterval: any;
      Swal.fire({
        title: 'Success!',
        text: d?.data?.message,
        icon: 'success',
        timer: 2000,
      });
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.trackSubscription) this.trackSubscription.unsubscribe();
    if (this.trackSubscription2) this.trackSubscription2.unsubscribe();
  }
}
