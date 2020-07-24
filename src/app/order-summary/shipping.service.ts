import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IShipping } from '../models/IShipping';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor (private http: HttpClient) { }

  getShipping(totalWeight: number): Observable<IShipping> {
    return this.http.get<IShipping>(`http://localhost:3000/shipping?weight=${totalWeight}`).pipe(delay(2000));
  }
}
