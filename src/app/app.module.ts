import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
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
    BrowserAnimationsModule,
    SelectButtonModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
