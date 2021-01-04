import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {UserServiceService} from '../../service/userService/user-service.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(
    private formBuilder: FormBuilder, 
    private UserServiceService:UserServiceService,
    private route:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', 
      [
        Validators.required, 
        Validators.email
      ]],
      password: ['', 
      [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ] ]
    });
 }
 
 public hasError = (controlName: string, errorName: string) => {
  return this.loginForm.controls[controlName].hasError(errorName);
}
  loginUser = (loginForm) => {
    let reqData = {
      email: loginForm.email,
      password: loginForm.password
    }
    console.log(reqData);

    this.UserServiceService.loginUser(reqData).subscribe((res)=>{
      console.log(" resgister success full ",res);
      // navigate to dashboard after login succesfull
      localStorage.setItem('token',res['id']);
      this.route.navigate(['dashboard'])
    })
  }
}
