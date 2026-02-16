import { CtmSnavItems } from '@kato-lee/admin-layout';
import { GEN_AUTHORITIES } from '@authorities/legacy/general';

export const SEGURIDAD_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'Seguridad',
    url: 'seg',
    icon: 'general_device',
    authorities: [GEN_AUTHORITIES.CODE],
    objects: [
      {
        type: 'dropdown',
        name: 'Permisos',
        url: 'permisos',
        icon: 'lock',
        authorities: [GEN_AUTHORITIES.PERMISOS.CODE],
        dropdownLinks: [
          {
            name: 'Crear modulos, submodulos y permisos',
            url: 'create',
            authorities: [GEN_AUTHORITIES.PERMISOS.CREAR],
          },
          {
            name: 'Gestionar permisos por usuario',
            url: 'manage-by-usuario',
            authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
          },
          {
            name: 'Gestionar permisos por rol',
            url: 'manage-by-rol',
            authorities: [GEN_AUTHORITIES.PERMISOS.GESTIONAR_TODOS],
          },
        ],
      },
    ],
  },
];
