import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if (sessionStorage.getItem('accessToken')){
      return true;
    }
    //not authenticated then return to login
    this.router.navigate(['/login']);
    return false;
  }

}
