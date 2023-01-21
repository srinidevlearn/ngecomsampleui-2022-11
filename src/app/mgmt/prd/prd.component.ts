import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import { IProductDetails } from 'src/app/shared/models/productDetail.interface';

@Component({
  selector: 'app-prd',
  templateUrl: './prd.component.html',
  styleUrls: ['./prd.component.scss']
})
export class PrdComponent implements OnInit {
  products:IProductDetails[] = []

destroy$ = new Subject<void>();
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getAllProducts().pipe(takeUntil(this.destroy$)).subscribe(d=>{
      this.products = d?.data ? d.data : [];
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

}
