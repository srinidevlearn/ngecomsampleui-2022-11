import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import {
  Category,
  IProductDetails,
} from 'src/app/shared/models/productDetail.interface';
//TODO1: use reactive forms to bind model values to ui
//TODO2: update product information to the coresponding end point


@Component({
  selector: 'app-prd-form',
  templateUrl: './prd-form.component.html',
  styleUrls: ['./prd-form.component.scss'],
})
export class PrdFormComponent implements OnInit {
  destroy$ = new Subject<void>();
  //step 1 model
  productModel: IProductDetails = {
    id: '',
    name: '',
    image: '',
    description: '',
    isAvailable: false,
    category: Category.Electronics,
    manufacturer: '',
    price: 0,
  };
  constructor(private actRoute: ActivatedRoute,private api:ApiService) {}

  ngOnInit(): void {
    this.actRoute.data
      .pipe(takeUntil(this.destroy$))
      .subscribe((productInfo) => {
        // overwrite model with new values
        this.productModel = { ...this.productModel, ...productInfo?.['singleProduct'] };
      });

  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateProduct(){

  }
}
