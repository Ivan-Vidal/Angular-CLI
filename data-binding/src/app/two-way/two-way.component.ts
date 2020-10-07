import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

nome: string = 'Um nome'

pessoa = {
  nome: "Meu nome",
  idade: 22
}

  constructor() { }

  ngOnInit(): void {
  }

}
