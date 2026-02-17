import { Routes } from '@angular/router';
import { AuthGuard, AuthoritiesGuard, GuestGuard } from '@common/infrastructure/guards';
import { LOCAL_URLS } from '@common/application/constants';
import { AdminLayoutComponent } from './admin.component';
import { BIG_DATA_AUTHORITIES } from '@authorities/big-data';
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
        path: 'big-data',
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
