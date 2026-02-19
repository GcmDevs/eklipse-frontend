import { Routes } from '@angular/router';
import { AuthoritiesGuard } from '@common/guards';

export const routes: Routes = [
  {
    path: ':key',
    canActivate: [AuthoritiesGuard],
    loadComponent: () => import('./component').then((m) => m.PageOnePage),
  },
];
