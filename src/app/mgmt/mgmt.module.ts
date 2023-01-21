import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrdComponent } from './prd/prd.component';
import { UserComponent } from './user/user.component';
import { PrdFormComponent } from './prd-form/prd-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // lazy load routing or lazy loading
  {
    path: 'prd',
    component: PrdComponent,
  },
  {
    path: 'product/:id',
    component: PrdFormComponent,
  },
  { path: '', redirectTo: 'prd' }, // by default redirect happens for corresponding module
];

@NgModule({
  declarations: [
    PrdComponent,
    UserComponent,
    PrdFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MgmtModule { }
