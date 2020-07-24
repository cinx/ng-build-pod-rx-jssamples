import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrderDetail } from '../models/IOrder';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private http: HttpClient) {}

    getOrder(): Observable<IOrderDetail[]> {
        return this.http.get<IOrderDetail[]>('http://localhost:3000/order');
    }
}
