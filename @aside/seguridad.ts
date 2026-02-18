import { GEN_AUTHORITIES } from '@auths/general';
import { NavModule } from './config';

export const SEGURIDAD_SNAV_ITEMS: NavModule[] = [
  {
    id: 'seguridad',
    label: 'Seguridad',
    description: 'Autenticación, permisos, auditoria y control de acceso al sistema.',
    icon: 'shield-check',
    authorities: [GEN_AUTHORITIES.CODE],
    accent: 'amber',
    submodules: [
      {
        id: 'permisos',
        label: 'Permisos',
        description: 'Gestion de modulos, roles y permisos de usuarios.',
        icon: 'lock',
        accent: 'blue',
        authorities: [GEN_AUTHORITIES.PERMISOS.CODE],
        routes: [
          {
            id: 'create',
            label: 'Crear permisos',
            description: 'Definir la estructura de modulos y sus permisos asociados.',
            icon: 'layers',
            authorities: [GEN_AUTHORITIES.PERMISOS.CREAR],
            href: 'seguridad/permisos/create',
          },
          {
            id: 'manage-by-usuario',
            label: 'Gestionar permisos por usuario',
            description: 'Asignar y revocar permisos individuales por usuario.',
            icon: 'user-cog',
            iconType: 'lucide',
            authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
            href: 'seguridad/permisos/manage-by-usuario',
          },
          {
            id: 'manage-by-rol',
            label: 'Gestionar permisos por rol',
            description: 'Administrar permisos agrupados por rol.',
            icon: 'users',
            iconType: 'lucide',
            authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
            href: 'seguridad/permisos/manage-by-rol',
          },
        ],
      },
    ],
  },
];
