import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  apiKey = '9112235c8e791048742f7178';
  constructor(private http: HttpClient) { }

  getCurrencyExchange(baseCurrency: string, amount: number): Observable<any> {
    return this.http.get(`https://prime.exchangerate-api.com/v5/${apiKey}/latest/${baseCurrency}`);
  }
}
