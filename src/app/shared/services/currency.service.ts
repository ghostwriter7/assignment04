import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Currency} from '../interfaces';

@Injectable({providedIn: 'root'})
export class CurrencyService {
    private readonly API = 'https://api.nbp.pl/api/exchangerates/tables/A';

    constructor(private http: HttpClient) {}

    getLatestCurrencies(): Observable<Currency[]> {
      const url = `${this.API}/?format=json`;
      return this.http.get<Currency[]>(url);
    }

    getCurrenciesByDate(date: string): Observable<Currency[]> {
      const url = `${this.API}/${date}/?format=json`;
      return this.http.get<Currency[]>(url);
    }
}
