import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { MessengerService } from 'src/app/services/messenger.service';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ShippingService } from 'src/app/services/shipping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[];
  priceTotal: number = 0;
  itemsTotal: number = 0;
  shippingCharges: number = 0;
  constructor(private _messengerService: MessengerService, private _router: Router, 
    private _checkoutService: CheckoutService, private _shippingService: ShippingService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.getShippingCharges();
  }

  getCartItems() {
    // this._messengerService.getCartItems().subscribe((items: CartItem[])=>{
    //   console.log(items);
    //   this.cartItems=items
    // });
    this.cartItems = this._messengerService.cartItems;
    this.priceTotal = this._messengerService.priceTotal;
    this.itemsTotal = this._messengerService.itemsTotal;
  }

  getShippingCharges() {
    if (this.priceTotal) {
      this._shippingService.getShippingCharges(this.priceTotal).subscribe((data) => {
        this.shippingCharges = data
      },
        (err) => console.log(err));
    }
  }

  placeOrder() {
    this._checkoutService.placeOrder(this.cartItems).subscribe((data) => {
      if (data == 'Success') {
        this._messengerService.cartItems = null;
        this._messengerService.priceTotal = null;
        this._messengerService.itemsTotal = null;
        this._router.navigate(['/thankyou']);
      }
    },
      (err) => console.log(err));
  }

  continueShopping() {
    this._router.navigate(['/home']);
  }

  removeItem(cartItem: CartItem) {
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    this._messengerService.cartItems = this.cartItems;
    this.calculateTotals();
  }

  calculateTotals() {
    this.priceTotal = 0;
    this.itemsTotal = 0;
    this.cartItems.forEach(item => {
      this.priceTotal += (item.quantity * item.price);
      this.itemsTotal += item.quantity;
    });
    this.getShippingCharges();
  }

  isCartEmpty(): boolean {
    return (this.cartItems?.length > 0) ? false : true;
  }
}
