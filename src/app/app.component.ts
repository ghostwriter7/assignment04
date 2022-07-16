import {Component, OnInit} from '@angular/core';
import {ThemeService} from './shared/services';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  ngOnInit():void {
    this.themeService.initFavoriteTheme();
  }
}
