import { Routes } from '@angular/router';
import { AuthoritiesGuard } from '@common/infrastructure/guards';
import { GEN_AUTHORITIES } from '@authorities/general';

export const routes: Routes = [
  {
    path: 'permisos',
    data: { authorities: [GEN_AUTHORITIES.PERMISOS.CODE] },
    children: [
      {
        path: 'create',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/create').then((m) => m.Page),
        data: { authorities: [GEN_AUTHORITIES.PERMISOS.CREAR] },
      },
      {
        path: 'manage-by-usuario',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/manage-by-usuario').then((m) => m.Page),
        data: { authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS] },
      },
      {
        path: 'manage-by-rol',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/manage-by-rol').then((m) => m.Page),
        data: { authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS] },
      },
    ],
  },
];
