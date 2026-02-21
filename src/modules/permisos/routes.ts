import { Routes } from '@angular/router';
import { AuthoritiesGuard } from '@common/guards';

export const routes: Routes = [
  {
    path: 'permisos',
    data: { authorities: ['seguridad-permisos'] },
    children: [
      {
        path: 'create',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/create').then((m) => m.Page),
        data: {
          title: `Seguridad|Permisos|Crear permisos`,
          authorities: [`seguridad-permisos-create`],
        },
      },
      {
        path: 'manage-by-usuario',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/manage-by-usuario').then((m) => m.Page),
        data: {
          title: `Seguridad|Permisos|Gestionar permisos por usuario`,
          authorities: [`seguridad-permisos-manage-by-usuario`],
        },
      },
      {
        path: 'manage-by-rol',
        canActivate: [AuthoritiesGuard],
        loadComponent: () => import('./presentation/pages/manage-by-rol').then((m) => m.Page),
        data: {
          title: `Seguridad|Permisos|Gestionar permisos por rol`,
          authorities: [`seguridad-permisos-manage-by-rol`],
        },
      },
    ],
  },
];
