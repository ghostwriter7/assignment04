import {Component, OnInit} from '@angular/core';
import {Currency, TableColumn} from '../../shared/interfaces';
import {CurrencyService} from '../../shared/services';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss'],
})
export class CurrencyTableComponent implements OnInit {
  cols: TableColumn[] = [
    { field: 'symbol', header: 'Symbol'},
    { field: 'name', header: 'Name'},
    { field: 'exchangeRate', header: 'Exchange Rate'}
  ];
  currencies!: Currency[];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getLatestCurrencies().subscribe(currencies => {
      this.currencies = currencies;
    })
  }

}
