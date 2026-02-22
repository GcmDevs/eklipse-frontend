import { CRN_AUTHORITIES } from '@authorities/legacy/cartera';
import { ADMIN_AUTHORITY } from '@auths/legacy/principal';
import { GCM_CONTEXTS } from '@common/types';
import { NavModule } from '@aside/config';

export const LEGACY_CARTERA_SNAV_ITEMS: NavModule[] = [
  {
    id: 'cartera',
    label: 'Cartera',
    icon: 'folder-cog',
    accent: 'red',
    authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
    submodules: [
      {
        id: 'gestión-conciliación',
        label: 'Gestión / conciliación',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.CODE],
        routes: [
          {
            id: 'gestiones-de-cartera',
            label: 'Gestiones de cartera',
            href: 'legacy/39',
            icon: 'folder-cog',
            authorities: [
              ADMIN_AUTHORITY,
              CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.ADMINISTRAR_GESTIONES,
            ],
          },
          {
            id: 'gestionar-conciliaciones',
            label: 'Gestionar conciliaciones',
            href: 'legacy/40',
            icon: 'folder-cog',
            authorities: [
              ADMIN_AUTHORITY,
              CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.ADMINISTRAR_CONCILIACIONES,
            ],
          },
        ],
      },
      {
        id: 'radicación',
        label: 'Radicación',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.RADICACIONES.CODE],
        routes: [
          {
            id: 'facturas-radicadas',
            label: 'Facturas radicadas',
            href: 'legacy/41',
            icon: 'folder-cog',
            authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
          },
          {
            id: 'facturas-pendientes-x-radicar',
            label: 'Facturas pendientes x radicar',
            href: 'legacy/42',
            icon: 'folder-cog',
            authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
          },
          {
            id: 'facturas-pendientes-x-recibir',
            label: 'Facturas pendientes x recibir',
            href: 'legacy/43',
            icon: 'folder-cog',
            authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
          },
        ],
      },
      {
        id: 'formatos',
        label: 'Formatos',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.FORMATOS.CODE],
        routes: [
          {
            id: 'archivo-mega-plano',
            label: 'Archivo mega plano',
            href: 'legacy/44',
            icon: 'folder-cog',
            authorities: [ADMIN_AUTHORITY, CRN_AUTHORITIES.FORMATOS.ARCHIVO_MEGA_PLANO],
          },
        ],
      },
    ],
  },
];
