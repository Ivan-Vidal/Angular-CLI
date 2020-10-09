import { Component, OnInit } from '@angular/core';

import { CursosService } from './curso.service'
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: string[] = []

 // cursosService: CursosService

  constructor( private cursosService: CursosService
    ) { 
    //this.cursosService = new CursosService()
    //this.cursosService = _cursosService
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

}
