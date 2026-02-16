import { CtmSnavItems } from '@kato-lee/admin-layout';
import { GEN_AUTHORITIES } from '@authorities/legacy/general';

export const LEGACY_GENERAL_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'General',
    icon: 'general_device',
    authorities: [GEN_AUTHORITIES.CODE],
    objects: [
      {
        type: 'dropdown',
        name: 'dependencias',
        icon: 'lock',
        authorities: [GEN_AUTHORITIES.DEPENDENCIAS.CODE],
        dropdownLinks: [
          {
            name: 'Gestionar dependencias por usuario',
            url: 'legacy/1',
            authorities: [GEN_AUTHORITIES.DEPENDENCIAS.GESTIONAR],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
    ],
  },
];
