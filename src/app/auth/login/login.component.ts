import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import { JwthelperService } from 'src/app/shared/jwthelper.service';
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

  adminModel:ILogin = {
    email: 'srini@gmail.com',
    password:'123SD'
  }
  non_adminModel:ILogin ={
    email: 'srini2@gmail.com',
    password:'m38rmF$'
  }

  trackSubscription: Subscription;
  trackSubscription2!: Subscription;

  typeOfRole:string='';

  loginForm: FormGroup;

  get emailField() {
    return this.loginForm.get('email');
  }
  get passwordField() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: Router,
    private jwt: JwthelperService
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(2), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(2)]],
     });

     // how to update forms value
    //  if(this.typeOfRole === 'admin')this.loginForm.patchValue(this.adminModel)
    //  else this.loginForm.patchValue(this.non_adminModel)

      

    this.trackSubscription = this.loginForm.valueChanges.subscribe((d) => {});
  }

  trackCahnge(event:any){

    if(event?.target.value === 'admin')this.loginForm.patchValue(this.adminModel)
    else this.loginForm.patchValue(this.non_adminModel)
  }
  login() {
    let temp: ILogin = this.loginForm.value;
    this.trackSubscription2 = this.api.login(temp).subscribe((d) => {
      if (d?.data?.token) {
        localStorage.setItem('token', d?.data?.token);
        let parsed = this.jwt.parseToken(d?.data?.token);

        Swal.fire({
          title: 'Success!',
          text: d?.data?.message,
          icon: 'success',
          // timer: 2000,
        }).then((result) => {
          if (result.isConfirmed) {
           if (parsed?.user?.role && parsed?.user?.role.includes('admin'))
              this.navigateToMgMt();
            else this.navigateToShopping();
          }
        });
      }
    });
  }

  ngOnInit(): void {}

  navigateToMgMt() {
    this.route.navigateByUrl('/mgmt/prd');
  }
  navigateToShopping() {
    this.route.navigateByUrl('/shopping');
  }

  ngOnDestroy() {
    if (this.trackSubscription) this.trackSubscription.unsubscribe();
    if (this.trackSubscription2) this.trackSubscription2.unsubscribe();
  }
}
