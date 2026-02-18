import { Routes } from '@angular/router';
import { AuthGuard, AuthoritiesGuard, GuestGuard } from '@common/guards';
import { AdminLayoutComponent } from './admin.component';
import { GEN_AUTHORITIES } from '@auths/general';
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
    canActivate: [AuthGuard],
    //component: AdminLayoutComponent,
    children: [
      {
        path: LOCAL_URLS.home,
        //loadComponent: () => import('@modules/home/presentation/page').then((m) => m.HomePage),
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'seguridad',
        canActivate: [AuthoritiesGuard],
        loadChildren: () => import('@modules/permisos/routes').then((m) => m.routes),
        data: { authorities: [GEN_AUTHORITIES.CODE] },
      },
      {
        path: 'seguridad/permisos/crear-modulos',
        loadComponent: () =>
          import('./pages/seguridad/crear-modulos/crear-modulos.component').then(
            (m) => m.CrearModulosComponent,
          ),
      },
    ],
  },
  { path: '**', redirectTo: LOCAL_URLS.home, pathMatch: 'full' },
];
