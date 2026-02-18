import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page-one',
    //canActivate: [AuthoritiesGuard],
    loadComponent: () => import('./page-one/page').then((m) => m.Page),
    //data: { authorities: [] },
  },
];
