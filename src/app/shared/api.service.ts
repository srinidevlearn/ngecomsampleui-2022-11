import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ILogin } from '../auth/models/login.interface';
declare var Swal:any;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = `https://vercel-learn.vercel.app/api/`;
  //backend some other domain
  //frontend some other domain
  // baseURL:string = "/api/"

  constructor(
    private http: HttpClient,
  ) {
  }

  login(payload: ILogin): Observable<any> {
    // lazily working
    return this.http
      .post(`${this.baseURL}auth/login`, payload)
      .pipe(catchError(this.handleError));
  }

  getAllProducts():Observable<any>{
    return this.http.get(this.baseURL+'product/get?all=true').pipe(catchError(this.handleError))
  }

  private handleError(data: any) {
    Swal.fire({
      title: 'Error!',
      text: data?.error?.error,
      icon: 'error',
      confirmButtonText: 'Try Again'
    })
    return EMPTY;
  }
}
