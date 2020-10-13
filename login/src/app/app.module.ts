import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPrimaryComponent } from './login-primary/login-primary.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
//import { ServicesLoginService } from './services-login.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginPrimaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // ServicesLoginService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
