import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesLoginService } from '../services-login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private ServicesLoginService: ServicesLoginService,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.ServicesLoginService.usuarioLogado()){
      return true;
    }
    
    this.router.navigateByUrl('login');
    return false;
  }

}
