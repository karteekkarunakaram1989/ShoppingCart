import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'home', component: ShoppingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'checkout', loadChildren: () => import('./components/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankYouComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
