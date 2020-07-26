import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.model';
import { HandleErrorService } from 'src/app/services/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

    // Properties
    baseUrl = 'https://localhost:44335/api/checkout/';
  
    constructor(private httpClient: HttpClient, private errorHandlerService:HandleErrorService) { }

  placeOrder(cartItems: CartItem[]): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl+'placeorder', cartItems, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    })
    .pipe(catchError(this.errorHandlerService.handleError));
}
}
