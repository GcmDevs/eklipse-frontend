import { ADMIN_AUTHORITY as ADMIN } from '@auths/principal';
import { NavModule } from '@aside/config';
import { GCM_CONTEXTS } from '@kato-lee/utilities/types';
import { CRN_AUTHORITIES } from '@authorities/legacy/cartera';

export const LEGACY_CARTERA_SNAV_ITEMS: NavModule[] = [
  {
    id: 'cartera',
    label: 'Cartera',
    description:
      'Módulo para la gestión de cartera, recaudo, conciliaciones y procesos de radicación.',
    icon: 'wallet',
    accent: 'olive',
    authorities: [ADMIN, CRN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
    submodules: [
      {
        id: 'gestión-conciliación',
        label: 'Gestión / conciliación',
        description: 'Gestión de cartera y conciliación de cuentas por cobrar.',
        icon: 'handshake',
        accent: 'sand',
        authorities: [ADMIN, CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.CODE],
        routes: [
          {
            id: 'gestiones-de-cartera',
            label: 'Gestiones de cartera',
            description: 'Seguimiento y administración de gestiones de recaudo.',
            href: 'legacy/39',
            icon: 'clipboard-list',
            authorities: [ADMIN, CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.ADMINISTRAR_GESTIONES],
          },
          {
            id: 'gestionar-conciliaciones',
            label: 'Gestionar conciliaciones',
            description: 'Proceso de conciliación financiera con terceros y aseguradoras.',
            href: 'legacy/40',
            icon: 'scale',
            authorities: [
              ADMIN,
              CRN_AUTHORITIES.GESTIONES_CONCILIACIONES.ADMINISTRAR_CONCILIACIONES,
            ],
          },
        ],
      },
      {
        id: 'radicación',
        label: 'Radicación',
        description: 'Gestión del proceso de radicación y recepción de facturas.',
        icon: 'send',
        accent: 'chocolate',
        authorities: [ADMIN, CRN_AUTHORITIES.RADICACIONES.CODE],
        routes: [
          {
            id: 'facturas-radicadas',
            label: 'Facturas radicadas',
            description: 'Listado de facturas ya radicadas.',
            href: 'legacy/41',
            icon: 'file-check',
            authorities: [ADMIN, CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
          },
          {
            id: 'facturas-pendientes-x-radicar',
            label: 'Facturas pendientes x radicar',
            description: 'Facturas pendientes de envío o radicación.',
            href: 'legacy/42',
            icon: 'file-clock',
            authorities: [ADMIN, CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
          },
          {
            id: 'facturas-pendientes-x-recibir',
            label: 'Facturas pendientes x recibir',
            description: 'Facturas radicadas pendientes de recepción o confirmación.',
            href: 'legacy/43',
            icon: 'inbox',
            authorities: [ADMIN, CRN_AUTHORITIES.RADICACIONES.GESTIONAR_RADICACIONES_GCM],
          },
        ],
      },
      {
        id: 'formatos',
        label: 'Formatos',
        description: 'Gestión de archivos y formatos de intercambio de información financiera.',
        icon: 'file-spreadsheet',
        accent: 'plum',
        authorities: [ADMIN, CRN_AUTHORITIES.FORMATOS.CODE],
        routes: [
          {
            id: 'archivo-mega-plano',
            label: 'Archivo mega plano',
            description: 'Generación y carga de archivos planos masivos para integración.',
            href: 'legacy/44',
            icon: 'upload',
            authorities: [ADMIN, CRN_AUTHORITIES.FORMATOS.ARCHIVO_MEGA_PLANO],
          },
        ],
      },
    ],
  },
];
