import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: string[] = ['Angular 2', 'Java', 'Phonegap']

  constructor() { }

  ngOnInit(): void {
  }

}
