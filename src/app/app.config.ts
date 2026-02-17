import {
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { ROOT_REDUCERS } from '@stores/state';
import { provideStore } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
  UnauthorizedInterceptor,
  AddTokenInterceptor,
  TimerInterceptor,
} from '@common/interceptors';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CustomPreloadingStrategy } from './preloading-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(ROOT_REDUCERS),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(MatSnackBarModule),
    importProvidersFrom(MatTooltipModule),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withPreloading(CustomPreloadingStrategy),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimerInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
};
