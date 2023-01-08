import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
