import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/userService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  checkPasswords: any;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private UserServiceService: UserServiceService) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        fullName: ['', 
        [
          Validators.required, 
          Validators.minLength(3), 
          Validators.maxLength(12), 
          Validators.pattern('[a-zA-Z ]*')
        ]],
        email: ['', 
        [Validators.required, 
        Validators.pattern('^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$')
        ]],
        phone: ['', 
        [
          Validators.required,
          Validators.pattern('^[7-9]{1}[0-9]{9}$')
        ]],
        password: ['', 
        [
          Validators.required, 
          Validators.minLength(8), 
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]],
      });
    }

    register = (registerFormValue) => {
      try {
        let data = {
          fullName: registerFormValue.fullName,
          email: registerFormValue.email,
          phone: registerFormValue.phone,
          password: registerFormValue.password,
          service: 'advance',
        };
        this.UserServiceService.registration(data).subscribe(response => {
          console.log(" register successfull", response);
        });
        this.router.navigate(['login']);
      } catch (error) {
        console.log(error);
      }
    };

    login() {
      this.router.navigate(['login']);
    }
 }
