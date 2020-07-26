import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  // Properties
  baseUrl = 'https://localhost:44335/api/shipping/';

  constructor(private httpClient: HttpClient, private errorHandlerService:HandleErrorService) { }

  getShippingCharges(totalPrice: number): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl + 'getShippingCost?totalPrice=' + totalPrice)
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}
