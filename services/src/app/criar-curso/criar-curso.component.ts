import { Component, OnInit } from '@angular/core';
import { CursosService } from '../curso/curso.service';


@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
  }

}
