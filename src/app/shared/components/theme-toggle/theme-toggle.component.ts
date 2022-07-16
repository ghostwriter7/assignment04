import {Component, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Theme} from '../../enums';
import {ThemeOption} from '../../interfaces';
import {ThemeService} from '../../services';

@UntilDestroy()
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  theme!: Theme;
  themes: ThemeOption[] = [{
    name: 'Dark',
    code: Theme.Dark
  }, {
    name: 'Light',
    code: Theme.Light
  }];

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.currentTheme$.pipe(untilDestroyed(this)).subscribe(theme => {
      this.theme = theme;
    })
  }

  onThemeChange(theme: Theme) {
    this.themeService.switchTheme(theme);
  }
}
