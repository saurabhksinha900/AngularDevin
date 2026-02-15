import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'app-theme';
  private themeSubject: BehaviorSubject<Theme>;

  theme$ = this.getInitialTheme();

  constructor() {
    const saved = this.getSavedTheme();
    this.themeSubject = new BehaviorSubject<Theme>(saved);
    this.theme$ = this.themeSubject.asObservable();
    this.applyTheme(saved);
  }

  get currentTheme(): Theme {
    return this.themeSubject.value;
  }

  toggleTheme(): void {
    const next: Theme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeSubject.next(next);
    this.applyTheme(next);
    localStorage.setItem(this.STORAGE_KEY, next);
  }

  private getSavedTheme(): Theme {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    } catch {}
    return 'light';
  }

  private getInitialTheme() {
    return new BehaviorSubject<Theme>(this.getSavedTheme()).asObservable();
  }

  private applyTheme(theme: Theme): void {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }
}
