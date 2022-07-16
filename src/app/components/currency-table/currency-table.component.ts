import {Component, OnInit} from '@angular/core';
import {Currency} from '../../shared/interfaces';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss'],
})
export class CurrencyTableComponent implements OnInit {
  currencies: Currency[] = [{
    symbol: 'USD', name: 'Dolar americano', exchangeRate: 3.952,
  }, {symbol: 'ZAR', name: 'rand', exchangeRate: 0.2607}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
