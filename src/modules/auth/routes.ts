import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./presentation/pages/login').then((m) => m.Page),
  },
  {
    path: 'login-terceros',
    loadComponent: () => import('./presentation/pages/login-terceros').then((m) => m.Page),
  },
];
