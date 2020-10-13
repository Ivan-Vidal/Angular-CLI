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
    this.loginForm = this.fb.group({
      'email': ['', ],
      'password': ['', ],
    });
  }

  login(){
    console.log('login em progresso')
    this.submit = true;
    this.ServicesLoginService.login(this.loginForm.value);
  }
}