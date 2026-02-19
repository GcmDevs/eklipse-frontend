import { ADMIN, GEN_AUTHORITIES } from '@auths/general';
import { NavModule } from './config';

export const SEGURIDAD_SNAV_ITEMS: NavModule[] = [
  {
    id: 'seguridad',
    label: 'Seguridad',
    icon: 'shield-check',
    accent: 'amber',
    description: 'Autenticación, permisos, auditoría y control de acceso al sistema.',
    authorities: [ADMIN, GEN_AUTHORITIES.CODE],
    submodules: [
      {
        id: 'permisos',
        label: 'Permisos',
        icon: 'lock',
        accent: 'blue',
        description: 'Gestión de módulos, roles y permisos de usuarios.',
        authorities: [ADMIN, GEN_AUTHORITIES.PERMISOS.CODE],
        routes: [
          {
            id: 'create',
            label: 'Crear permisos',
            icon: 'layers',
            description: 'Definir la estructura de módulos y sus permisos asociados.',
            href: 'seguridad/permisos/create',
            authorities: [ADMIN, GEN_AUTHORITIES.PERMISOS.CREAR],
            wasDisabled: false,
          },
          {
            id: 'manage-by-usuario',
            label: 'Gestionar permisos por usuario',
            icon: 'user-cog',
            description: 'Asignar y revocar permisos individuales por usuario.',
            href: 'seguridad/permisos/manage-by-usuario',
            authorities: [ADMIN, GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
            wasDisabled: true,
          },
          {
            id: 'manage-by-rol',
            label: 'Gestionar permisos por rol',
            icon: 'users',
            description: 'Administrar permisos agrupados por rol.',
            href: 'seguridad/permisos/manage-by-rol',
            authorities: [ADMIN, GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
          },
        ],
      },
    ],
  },
];
