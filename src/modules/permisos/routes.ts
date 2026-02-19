import { Routes } from '@angular/router';
import { AuthoritiesGuard } from '@common/guards';
import { GEN_AUTHORITIES } from '@auths/general';

const root = 'Seguridad|Permisos';

export const routes: Routes = [
  {
    path: 'permisos',
    data: { authorities: [GEN_AUTHORITIES.PERMISOS.CODE] },
    children: [
      {
        path: 'create',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/create').then((m) => m.Page),
        data: { title: `${root}|Crear permisos`, authorities: [GEN_AUTHORITIES.PERMISOS.CREAR] },
      },
      {
        path: 'manage-by-usuario',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/manage-by-usuario').then((m) => m.Page),
        data: {
          title: `${root}|Gestionar permisos por usuario`,
          authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
        },
      },
      {
        path: 'manage-by-rol',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/manage-by-rol').then((m) => m.Page),
        data: {
          title: `${root}|Gestionar permisos por rol`,
          authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
        },
      },
    ],
  },
];
