import { Routes } from '@angular/router';
import { AuthGuard, AuthoritiesGuard, GuestGuard } from '@common/guards';
import { DashboardComponent } from './admin/component';
import { LOCAL_URLS } from '@common/constants';
import { GEN_AUTHORITIES } from '@auths/general';
import { BIG_DATA_AUTHORITIES } from '@auths/big-data';

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
        path: 'big-data-on-pb',
        loadChildren: () => import('@modules/big-data/routes').then((m) => m.routes),
        data: {
          authorities: [
            BIG_DATA_AUTHORITIES.ADMINISTRATIVOS.CODE,
            BIG_DATA_AUTHORITIES.ASISTENCIALES.CODE,
            BIG_DATA_AUTHORITIES.CENTRAL_COMPRAS.CODE,
            BIG_DATA_AUTHORITIES.SOLICITUD_SERVICIOS.CODE,
          ],
        },
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
