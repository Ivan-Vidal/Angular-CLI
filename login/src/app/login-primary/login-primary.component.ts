import { Component, OnInit } from '@angular/core';

import { ServicesLoginService } from '../services-login.service';
import { FormGroup, FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-login-primary',
  templateUrl: './login-primary.component.html',
  styleUrls: ['./login-primary.component.css']
})
export class LoginPrimaryComponent implements OnInit {
 
loginForm: FormGroup;

submit: boolean;

  constructor(private ServicesLoginService: ServicesLoginService, private fb: FormBuilder) { }

  

  ngOnInit(): void {

    this.submit = false

    this.loginForm = this.fb.group({
      'email': ['', ],
      'password': ['', ],
    });
  }

  loginCerto(){
    this.ServicesLoginService.login(this.loginForm.value);
  }


}