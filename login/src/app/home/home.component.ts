import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {

  userInfo: User
  
  constructor() { }

  ngOnInit(): void {}

}
