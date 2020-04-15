import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrencyResponse } from './models/currency-response.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  apiKey = '9112235c8e791048742f7178';
  constructor(private http: HttpClient) { }

  getCurrencyExchange(baseCurrency: string, amount: number): Observable<CurrencyResponse> {
    return this.http.get<CurrencyResponse>(`https://prime.exchangerate-api.com/v5/${this.apiKey}/latest/${baseCurrency}`);
  }
}
