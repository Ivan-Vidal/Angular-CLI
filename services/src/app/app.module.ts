import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import {CursosService} from './curso/curso.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component'
@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
