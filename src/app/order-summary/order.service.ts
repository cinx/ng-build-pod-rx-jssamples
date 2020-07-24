import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor (private http: HttpClient) { }

  getOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('http://localhost:3000/order');
  }
}
