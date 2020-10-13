import { Component, Input, OnInit } from '@angular/core';
import { ServicesLoginService} from './services-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canShow: boolean;
  @Input() userName: string;
  
  constructor(private ServicesLoginService: ServicesLoginService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userLogado')){
      this.userName = JSON.parse(localStorage.getItem('userLogado')).user.name;
      this.canShow = true;
    } else {
      this.ServicesLoginService.mostrarMenuEmitter.subscribe(
        (canShow: boolean) => {
          this.canShow = canShow;
          if(canShow){
            this.userName = JSON.parse(localStorage.getItem('userLogado')).user.name;
          }
        }
      );
    }
  }

}
