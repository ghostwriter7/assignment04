import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    CurrencyTableComponent
  ],
  imports: [
    BrowserModule,
    SelectButtonModule,
    FormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
