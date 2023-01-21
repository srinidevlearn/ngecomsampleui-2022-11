import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import { IProductDetails } from 'src/app/shared/models/productDetail.interface';
//TODO1:crete price sort using pipes
//TODO2:create isavailable filter using pipes
@Component({
  selector: 'app-prd',
  templateUrl: './prd.component.html',
  styleUrls: ['./prd.component.scss'],
})
export class PrdComponent implements OnInit {
  products: IProductDetails[] = [];
  productNameTyped: string = '';
  destroy$ = new Subject<void>();
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api
      .getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        this.products = d?.data ? d.data : [];
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  navigateToForm(product: IProductDetails) {
    if (product?.id) this.router.navigateByUrl('/mgmt/prd/' + product.id);
  }
}
