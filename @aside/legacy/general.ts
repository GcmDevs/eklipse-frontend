import { ADMIN_AUTHORITY as ADMIN } from '@auths/principal';
import { NavModule } from '@aside/config';
import { GEN_AUTHORITIES } from '@authorities/legacy/general';

export const LEGACY_GENERAL_SNAV_ITEMS: NavModule[] = [
  {
    id: 'general',
    label: 'General',
    description:
      'Módulo general para la configuración y gestión de parámetros globales del sistema.',
    icon: 'settings',
    accent: 'navy',
    authorities: [ADMIN, GEN_AUTHORITIES.CODE],
    submodules: [
      {
        id: 'dependencias',
        label: 'dependencias',
        description:
          'Gestión de dependencias organizacionales y su relación con usuarios y procesos.',
        icon: 'layers',
        accent: 'magenta',
        authorities: [ADMIN, GEN_AUTHORITIES.DEPENDENCIAS.CODE],
        routes: [
          {
            id: 'gestionar-dependencias-por-usuario',
            label: 'Gestionar dependencias por usuario',
            description:
              'Asignación y administración de dependencias asociadas a cada usuario del sistema.',
            href: 'legacy/1',
            icon: 'user-cog',
            authorities: [ADMIN, GEN_AUTHORITIES.DEPENDENCIAS.GESTIONAR],
          },
        ],
      },
    ],
  },
];
