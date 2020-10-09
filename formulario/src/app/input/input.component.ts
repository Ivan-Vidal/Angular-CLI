import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  muda= document.querySelector('.img')

   mudafoto(){

     console.log('cheguei')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
