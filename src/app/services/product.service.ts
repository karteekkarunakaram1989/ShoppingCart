import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Properties
  baseUrl = 'https://localhost:44335/api/product/';
  
  constructor(private httpClient: HttpClient,private errorHandlerService:HandleErrorService) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl+'getAllProducts')
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}
