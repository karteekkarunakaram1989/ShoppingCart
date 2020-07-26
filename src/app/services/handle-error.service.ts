import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  // handleError() method.
  public handleError(errorResponse: HttpErrorResponse) {
    let errorSide: string;
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
      errorSide = 'client';

    } else {
      console.error('Server Side Error :', errorResponse);
      errorSide = 'server';

    }
    if (errorSide === 'client') {
      return throwError('There is a problem on the client side. Please check console for more error details.');
    }
    else if (errorSide === 'server') {
      return throwError('There is a problem on the server side. Please check if the Web API is running. Also, check console for more error details.');
    }
    else {
      return throwError('There is a problem with the service. We are notified & working on it. Please try again later. Check console for more error details.');
    }
  }
}
