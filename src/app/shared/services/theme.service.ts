import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Theme} from '../enums';
import {StorageHelper} from '../helpers';

@Injectable({ providedIn: 'root'})
export class ThemeService {
  currentTheme$ = new BehaviorSubject<Theme>(Theme.Dark);
  private readonly STORAGE_KEY = 'theme';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  initFavoriteTheme(): void {
    const theme = StorageHelper.read(this.STORAGE_KEY);
    if (theme) {
      this.updateStylesheetLink(theme as Theme);
      this.currentTheme$.next(theme as Theme);
    }
  }

  switchTheme(theme: Theme): void {
    this.saveFavoriteTheme(theme);
    this.updateStylesheetLink(theme);
    this.currentTheme$.next(theme);
  }

  private saveFavoriteTheme(theme: Theme): void {
    StorageHelper.set(this.STORAGE_KEY, theme);
  }

  private updateStylesheetLink(theme: Theme): void {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${theme}.css`;
    }
  }
}
