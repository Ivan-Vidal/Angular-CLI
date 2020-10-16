import { Component, Injectable, OnInit } from '@angular/core';
import { ServicesLoginService } from '../services-login.service'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {
  
 
  user: any = [];
  
  constructor(private ServicesLoginService: ServicesLoginService ) { }

  ngOnInit(): void {
  }

}
