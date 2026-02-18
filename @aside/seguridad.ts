import { GEN_AUTHORITIES } from '@auths/general';
import { CtmSnavItems } from '@kato-lee/admin-layout';

export const SEGURIDAD_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'Seguridad',
    url: 'seguridad',
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
            notAddAdminAuthority: true,
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
