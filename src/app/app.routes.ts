import { Routes } from '@angular/router';
import { AuthGuard, AuthoritiesGuard, GuestGuard } from '@common/guards';
import { GEN_AUTHORITIES } from '@auths/general';
import { LOCAL_URLS } from '@common/constants';
import { PageContainerComponent } from './page-container/component';

export const routes: Routes = [
  { path: '', redirectTo: LOCAL_URLS.home, pathMatch: 'full' },
  {
    path: LOCAL_URLS.accessControl,
    canActivate: [GuestGuard],
    children: [
      { path: '', loadChildren: () => import('@modules/auth/routes').then((m) => m.routes) },
    ],
  },
  {
    path: LOCAL_URLS.home,
    canActivate: [AuthGuard],
    loadComponent: () => import('./admin/component').then((m) => m.DashboardComponent),
  },
  {
    path: '',
    component: PageContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'seguridad',
        canActivate: [AuthoritiesGuard],
        loadChildren: () => import('@modules/permisos/routes').then((m) => m.routes),
        data: { authorities: [GEN_AUTHORITIES.CODE] },
      },
    ],
  },
  { path: '**', redirectTo: LOCAL_URLS.home, pathMatch: 'full' },
];
