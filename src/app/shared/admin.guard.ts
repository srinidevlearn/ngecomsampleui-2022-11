import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { JwthelperService } from './jwthelper.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild{
  constructor(private router: Router, private jwt: JwthelperService) {}
  // canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin();
  }

  
  isAdmin():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return Promise.resolve(localStorage.getItem('token')).then((res) => {
      let parsed = this.jwt.parseToken(res as string);
      let temp =  parsed?.user?.role &&  parsed?.user?.role.includes('admin') ? true : false;
      if(temp === false){
        Swal.fire({
          title: 'Error!',
          text: "You do not have enough permission to view this",
          icon: 'error',
        })
      }
      return temp;
    });
  }
  
}
