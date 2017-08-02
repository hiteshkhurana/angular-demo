import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  //Login Form
  login = {
    userName: '',
    password: ''
  }
  //error messages
  errorMessageResources:Object = {
    'userName': {
      'required': 'User Name is required'
    },
    'password': {
      'required': 'Password is required'
    }
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName : [
        this.login.userName, Validators.required
      ],
      password: [
        this.login.password, Validators.required
      ]
    });
  }

  onSubmit(){
    let userName = this.loginForm.get('userName').value;
    let password = this.loginForm.get('password').value;

    this.service.authenticate(userName, password)
        .subscribe(
          data => {
            this.router.navigate(['./home']);
          },
          error => {
            console.log(error);
          }
        );
  }

}
