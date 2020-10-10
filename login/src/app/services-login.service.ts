import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
export interface User {

  email: string;
  password: string;
  token?:string;
  user?:{
      name: string;
  }


}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesLoginService {
  
 
  
  constructor(private http: HttpClient, private router: Router) { }

  login (user:User){
    this.http.post<User>('http://52.91.139.190/fsapi/users/login', user, httpOptions).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('userLogado', JSON.stringify(obj));
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log('erro ao logar');
       
      }
    );
  }
} 
