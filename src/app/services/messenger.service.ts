import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

 public product=new Subject();
 public cartItems:CartItem[];
 public itemsTotal:number;
 public priceTotal:number;
  constructor() { }

  sendProduct(product){
    this.product.next(product)
  }

  // sendCartItems(cartItems: CartItem[]){
  //   this.cartItems.next(cartItems)
  // }

  getProduct(){
    return this.product.asObservable()
  }

  // getCartItems(){
  //   return this.cartItems.asObservable()
  // }
}
