import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITax } from '../models/ITax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor (private http: HttpClient) { }
  getTax(): Observable<ITax> {
    return this.http.get<ITax>('http://localhost:3000/tax');
  }
}
