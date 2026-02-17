import { Routes } from '@angular/router';
import { BIG_DATA_AUTHORITIES } from '@authorities/big-data';
import { STORAGE_KEYS } from '@common/application/services';
import { AuthoritiesGuard, RedirectGuard } from '@common/infrastructure/guards';

export const routes: Routes = [
  {
    path: 'costos',
    canActivate: [AuthoritiesGuard, RedirectGuard],
    loadComponent: () => import('./component').then((m) => m.PageOnePage),
    data: {
      href: `https://eklipse.grupoclinicamedicos.com/cost?token=${localStorage.getItem(STORAGE_KEYS.authToken)}`,
      authorities: [BIG_DATA_AUTHORITIES.ADMINISTRATIVOS.COSTOS],
    },
  },
  {
    path: ':key',
    canActivate: [AuthoritiesGuard],
    loadComponent: () => import('./component').then((m) => m.PageOnePage),
  },
];
