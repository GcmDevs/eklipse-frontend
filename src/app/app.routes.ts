import { Routes } from '@angular/router';
import { AuthGuard, AuthoritiesGuard, GuestGuard } from '@common/infrastructure/guards';
import { LOCAL_URLS } from '@common/application/constants';
import { AdminLayoutComponent } from './admin.component';
import { GEN_AUTHORITIES } from '@authorities/general';

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
    canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    children: [
      {
        path: LOCAL_URLS.home,
        loadComponent: () => import('@modules/home/presentation/page').then((m) => m.HomePage),
      },
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
