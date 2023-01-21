import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/admin.guard';
import { IsAuthorisedGuard } from './shared/is-authorised.guard';

/**
 * auth - logins & registration
 * mgmt - products (roles based login)
 * shopping - generic shopping
 */
const routes: Routes = [
  // lazy load routing or lazy loading
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'mgmt',
    loadChildren: () => import('./mgmt/mgmt.module').then((m) => m.MgmtModule),
    canLoad:[IsAuthorisedGuard],
    canActivate:[AdminGuard]
  },
  
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then((m) => m.ShoppingModule),
    canLoad:[IsAuthorisedGuard]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
