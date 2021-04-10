import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatesService {
  constructor(private http: HttpClient) {}

  getRates(baseCurrency: string): Observable<any> {
    // return this.http.get(`${environment.api}?base=${baseCurrency}`);
    return this.http.get(`${environment.api}`);
  }
}
