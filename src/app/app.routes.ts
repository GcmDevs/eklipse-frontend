import { Routes } from '@angular/router';
import { AuthGuard, AuthoritiesGuard, GuestGuard } from '@common/guards';
import { DashboardComponent } from './admin/component';
import { LOCAL_URLS } from '@common/constants';

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
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: LOCAL_URLS.home,
        canActivate: [AuthGuard],
        loadComponent: () => import('@modules/home/presentation/page').then((m) => m.HomePage),
      },
      {
        path: 'seguridad',
        canActivate: [AuthoritiesGuard],
        loadChildren: () => import('@modules/permisos/routes').then((m) => m.routes),
        data: { authorities: ['seguridad'] },
      },
    ],
  },
  { path: '**', redirectTo: LOCAL_URLS.home, pathMatch: 'full' },
];
