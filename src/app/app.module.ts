import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CartComponent } from './components/shopping/cart/cart.component';
import { ProductsListComponent } from './components/shopping/products-list/products-list.component';
import { CartItemComponent } from './components/shopping/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping/products-list/product-item/product-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { HandleErrorService } from './services/handle-error.service';
import { CheckoutService } from './services/checkout.service';
import { MessengerService } from './services/messenger.service';
import { ProductService } from './services/product.service';
import { ShippingService } from './services/shipping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    CartComponent,
    ProductsListComponent,
    CartItemComponent,
    ProductItemComponent,
    CheckoutComponent,
    PageNotFoundComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    CheckoutService,
    HandleErrorService,
    MessengerService,
    ProductService,
    ShippingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
