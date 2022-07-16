import {Component, OnInit} from '@angular/core';
import {delay, finalize, tap} from 'rxjs';
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
  isLoading!: boolean;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getLatestCurrencies()
      .pipe(tap(() => this.isLoading = true),
        delay(750),
        finalize(() => this.isLoading = false))
      .subscribe(currencies => {
      this.currencies = currencies;
    })
  }

}
