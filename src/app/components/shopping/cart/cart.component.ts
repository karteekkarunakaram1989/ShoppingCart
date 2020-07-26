import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [
    // new CartItem(1, 'Product 1', 4, 10),
    // new CartItem(2, 'Product 2', 5, 20),
    // new CartItem(3, 'Product 3', 3, 30),
    // new CartItem(4, 'Product 4', 2, 40)
  ];

  priceTotal = 0;
  itemsTotal = 0;
  constructor(private _messengerService: MessengerService, private _router: Router) { }

  ngOnInit(): void {
    this.cartItems=this._messengerService.cartItems ? this._messengerService.cartItems : [];
    this.calculateTotals();
    this._messengerService.getProduct().subscribe((product: Product) => {
      this.addProductToCart(product);
    },
    (err) => console.log(err));
  }
  addProductToCart(product: Product) {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push(new CartItem(product.id, product.name, product.imageUrl, 1, product.price));
    }
    this.calculateTotals();
  }

  calculateTotals(){
    this.priceTotal = 0;
    this.itemsTotal = 0;
    this.cartItems.forEach(item => {
      this.priceTotal += (item.quantity * item.price);
      this.itemsTotal += item.quantity;
    });
  }

  onCheckout() {
    //this._messengerService.sendCartItems(this.cartItems);
    this._messengerService.cartItems = this.cartItems;
    this._messengerService.itemsTotal = this.itemsTotal;
    this._messengerService.priceTotal = this.priceTotal;
    this._router.navigate(['/checkout']);
  }

  isBasketDisabled(): boolean {
    return this.itemsTotal > 0 ? false : true;
  }
}
