import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {SelectButtonModule} from 'primeng/selectbutton';

import { AppComponent } from './app.component';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    SelectButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
