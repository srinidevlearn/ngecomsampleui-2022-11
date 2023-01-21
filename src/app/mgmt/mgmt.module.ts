import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrdComponent } from './prd/prd.component';
import { UserComponent } from './user/user.component';
import { PrdFormComponent } from './prd-form/prd-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductNameFilterPipe } from './pipes/product-name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { GetSingleProductInfoResolver } from './resolver/get-single-product-info.resolver';

const routes: Routes = [
  // lazy load routing or lazy loading
  {
    path: 'prd',
    component: PrdComponent,
  },
  {
    path: 'prd/:id',
    component: PrdFormComponent,
    resolve:{
      singleProduct:GetSingleProductInfoResolver,
    }
  },
  { path: '', redirectTo: 'prd' }, // by default redirect happens for corresponding module
];

@NgModule({
  declarations: [
    PrdComponent,
    UserComponent,
    PrdFormComponent,
    ProductNameFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
})
export class MgmtModule { }
