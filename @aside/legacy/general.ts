import { ADMIN } from '@auths/general';
import { NavModule } from '@aside/config';
import { GEN_AUTHORITIES } from '@authorities/legacy/general';

export const LEGACY_GENERAL_SNAV_ITEMS: NavModule[] = [
  {
    id: 'general',
    label: 'General',
    icon: 'folder-cog',
    accent: 'navy',
    authorities: [ADMIN, GEN_AUTHORITIES.CODE],
    submodules: [
      {
        id: 'dependencias',
        label: 'dependencias',
        icon: 'folder-cog',
        accent: 'magenta',
        authorities: [ADMIN, GEN_AUTHORITIES.DEPENDENCIAS.CODE],
        routes: [
          {
            id: 'gestionar-dependencias-por-usuario',
            label: 'Gestionar dependencias por usuario',
            href: 'legacy/1',
            icon: 'folder-cog',
            authorities: [ADMIN, GEN_AUTHORITIES.DEPENDENCIAS.GESTIONAR],
          },
        ],
      },
    ],
  },
];
