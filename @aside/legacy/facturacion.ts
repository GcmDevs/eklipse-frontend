import { ADMIN_AUTHORITY as ADMIN } from '@auths/legacy/principal';
import { SLN_AUTHORITIES } from '@authorities/legacy/facturacion';
import { GCM_CONTEXTS } from '@common/types';
import { NavModule } from '@aside/config';

export const LEGACY_FACTURACION_SNAV_ITEMS: NavModule[] = [
  {
    id: 'facturacion',
    label: 'Facturación',
    icon: 'folder-cog',
    accent: 'red',
    authorities: [ADMIN, SLN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
    submodules: [
      {
        id: 'productos',
        label: 'Productos',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, SLN_AUTHORITIES.PRODUCTOS.CODE],
        routes: [
          {
            id: 'cambiar-conceptos-de-facturacion',
            label: 'Cambiar conceptos de facturación',
            href: 'legacy/30',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.PRODUCTOS.CAMBIAR_CONCEPTO_FACTURACION],
          },
        ],
      },
      {
        id: 'informes-gerenciales',
        label: 'Informes Gerenciales',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.CODE],
        routes: [
          {
            id: 'facturacion-periodo',
            label: 'Facturación periodo',
            href: 'legacy/31',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.FACTURACION_PERIODO],
          },
          {
            id: 'facturacion-por-terceros',
            label: 'Facturación por terceros',
            href: 'legacy/32',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.FACTURACION_TERCEROS],
          },
          {
            id: 'facturacion-terceros-por-centro',
            label: 'Facturación terceros por centro',
            href: 'legacy/33',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.FACT_TERCEROS_INSTITUCION],
          },
          {
            id: 'estadistico-pfgp',
            label: 'Estadistico PFGP',
            href: 'legacy/34',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.ESTADISTICO_PFGP],
          },
          {
            id: 'estadistico-de-radicacion',
            label: 'Estadistico de radicación',
            href: 'legacy/35',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.ESTADISTICO_RADICACION],
          },
        ],
      },
      {
        id: 'control-de-egresos',
        label: 'Control de egresos',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, SLN_AUTHORITIES.CONTROL_EGRESOS.CODE],
        routes: [
          {
            id: 'egresos-para-facturacion',
            label: 'Egresos para facturación',
            href: 'legacy/36',
            icon: 'folder-cog',
            authorities: [
              ADMIN,
              SLN_AUTHORITIES.CONTROL_EGRESOS.CREAR_PENDIENTES,
              SLN_AUTHORITIES.CONTROL_EGRESOS.ASIGNAR_USUARIO,
              SLN_AUTHORITIES.CONTROL_EGRESOS.VER_EGRESOS,
            ],
          },
          {
            id: 'control-de-facturadores',
            label: 'Control de facturadores',
            href: 'legacy/37',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.CONTROL_EGRESOS.ASIGNAR_USUARIO],
          },
        ],
      },
      {
        id: 'validaciones',
        label: 'Validaciones',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, SLN_AUTHORITIES.VALIDACIONES.CODE],
        routes: [
          {
            id: 'validacion-identificacion',
            label: 'Validación Identificación',
            href: 'legacy/38',
            icon: 'folder-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.VALIDACIONES.VALIDAR_ID],
          },
        ],
      },
    ],
  },
];
