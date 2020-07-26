import { Product } from './product.model';

export class CartItem {
    //id: number;
    productId: number;
    productName: string;
    productImageUrl: string;
    quantity: number;
    price: number;

    constructor(productId, productName, productImageUrl, quantity, price) {
        //this.id=id;
        this.productId = productId;
        this.productName = productName;
        this.productImageUrl = productImageUrl;
        this.quantity = quantity;
        this.price = price;
    }
}
