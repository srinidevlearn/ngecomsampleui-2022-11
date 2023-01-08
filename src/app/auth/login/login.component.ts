import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  loginModel:ILogin = {
    email: '',
    password: ''
  }  

  trackSubscription:Subscription;

  loginForm:FormGroup


  get emailField(){
    return this.loginForm.get('email')
  }
  get passwordField(){
    return this.loginForm.get('password')
  }

  constructor(private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.minLength(2),Validators.email]],
      password:['',[Validators.required,Validators.minLength(2)]]
    });
    // console.log(this.loginForm)
    this.trackSubscription = this.loginForm.valueChanges.subscribe(d=>{
    })
  }


  login(){
    console.log(this.loginForm.value)
  }


  ngOnInit(): void {
   
  }

  ngOnDestroy(){
    if(this.trackSubscription) this.trackSubscription.unsubscribe();
  }

}
