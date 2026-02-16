import { CtmSnavItems } from '@kato-lee/admin-layout';
import { GCM_CONTEXTS } from '@common/domain/types';
import { CRN_AUTHORITIES } from '@authorities/legacy/cartera';

export const LEGACY_CARTERA_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'Cartera',
    icon: 'wallet',
    authorities: [CRN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL],
    objects: [
      {
        type: 'dropdown',
        name: 'Gestión / conciliación',
        icon: 'manage_accounts',
        authorities: [CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.CODE],
        dropdownLinks: [
          {
            name: 'Gestiones de cartera',
            url: 'legacy/39',
            authorities: [CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.ADMINISTRAR_GESTIONES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Gestionar conciliaciones',
            url: 'legacy/40',
            authorities: [CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.ADMINISTRAR_CONCILIACIONES],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Radicación',
        icon: 'description',
        authorities: [CRN_AUTHORITIES.RADICACIONES.CODE],
        dropdownLinks: [
          {
            name: 'Facturas radicadas',
            url: 'legacy/41',
            authorities: [CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Facturas pendientes x radicar',
            url: 'legacy/42',
            authorities: [CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Facturas pendientes x recibir',
            url: 'legacy/43',
            authorities: [CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Formatos',
        icon: 'folder_copy',
        authorities: [CRN_AUTHORITIES.FORMATOS.CODE],
        dropdownLinks: [
          {
            name: 'Archivo mega plano',
            url: 'legacy/44',
            authorities: [CRN_AUTHORITIES.FORMATOS.ARCHIVO_MEGA_PLANO],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
    ],
  },
];
