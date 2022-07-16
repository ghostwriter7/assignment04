import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {delay, filter, finalize, map, pairwise, startWith, switchMap, tap} from 'rxjs';
import {DateHelper} from '../../shared/helpers/date.helper';
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
  dateControl = new FormControl(new Date());
  isLoading!: boolean;
  today = new Date();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.fetchLatestCurrencies();
    this.initDateValueChangeSub();
  }

  private fetchLatestCurrencies(): void {
    this.currencyService.getLatestCurrencies()
      .pipe(tap(() => this.isLoading = true),
        delay(750),
        finalize(() => this.isLoading = false))
      .subscribe(currencies => {
        this.currencies = currencies;
      });
  }

  private initDateValueChangeSub(): void {
    this.dateControl.valueChanges.pipe(
      startWith(new Date()),
      filter(Boolean),
      map(date => DateHelper.format(date)),
      pairwise(),
      filter(([prev, cur]) => prev !== cur),
      map(([_, cur]) => cur),
      switchMap((date) => {
        return this.currencyService.getCurrenciesByDate(date).pipe(
          tap(() => this.isLoading = true),
          delay(750),
          finalize(() => this.isLoading = false)
        )
      }),
    ).subscribe(currencies => {
      this.currencies = currencies;
    });
  }

}
