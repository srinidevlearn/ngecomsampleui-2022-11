import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ILogin } from '../auth/models/login.interface';
import { IProductDetails } from './models/productDetail.interface';
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

  getProductById(id:string):Observable<any>{
    // https://vercel-learn.vercel.app/api/product/get?id=62e34985a4a6378c97234f05
    return this.http.get(this.baseURL+'product/get?id='+id).pipe(catchError(this.handleError))
  }

  updateProduct(product?:IProductDetails){
    // METHOD:PUT , url endpoint will be product/update
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
