import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 valor = 5
 mudarValor(){
   this.valor ++
 }
 deletarCiclo: boolean = false

 destruirCiclo(){
   this.deletarCiclo = true
 }
}
