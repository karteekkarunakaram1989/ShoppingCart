import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  showModal: boolean = false;
  @Input() productItem: Product
  constructor(private _messengerService: MessengerService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this._messengerService.sendProduct(this.productItem);
    this.showModal = false;
  }
}
