import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwthelperService {

  constructor() {
    // new JwtHelperService().decodeToken()
   }

   parseToken(token:string){
    return new JwtHelperService().decodeToken(token);
   }

   parseAndLoad(token:string){
    let data =  new JwtHelperService().decodeToken(token);
    console.log(data);
   }
  
}
