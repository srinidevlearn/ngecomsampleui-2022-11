import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class GetSingleProductInfoResolver implements Resolve<any> {
  constructor(private api:ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let { id} = route?.params;
    return this.api.getProductById(id).pipe(map(i=>i?.data))
  }
}
