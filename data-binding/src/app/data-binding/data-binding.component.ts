import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  urlImage= 'http://lorempixel.com/400/200/sports/';
  url = "https://ivan-vidal.com"

  CurtirCurso = true

  AtualValue = ''
  valorSalvo = ''
  IsMouseOver: boolean = false

  getValor(){
    return 4
  }
  CursAngular(){
    return true
  }
  OnmouseOverOut(){
this.IsMouseOver = !this.IsMouseOver
  }

botaoClicado(){
  alert("Olá")
}
onKeyUp(evento:KeyboardEvent){
this.AtualValue =(<HTMLInputElement>evento.target).value
}
salvarValor(valor){

  this.valorSalvo = valor
}

  constructor() { }

  ngOnInit(): void {
  }

}
