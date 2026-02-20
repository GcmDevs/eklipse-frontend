import { ADMIN } from '@auths/general';
import { NavModule } from '@aside/config';
import { GCM_CONTEXTS } from '@kato-lee/utilities/types';
import { SLN_AUTHORITIES } from '@authorities/legacy/facturacion';

export const LEGACY_FACTURACION_SNAV_ITEMS: NavModule[] = [
  {
    id: 'facturacion',
    label: 'Facturación',
    description:
      'Módulo para la gestión de procesos de facturación y control financiero del sistema.',
    icon: 'receipt',
    accent: 'lavender',
    authorities: [ADMIN, SLN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
    submodules: [
      {
        id: 'productos',
        label: 'Productos',
        description: 'Gestión de productos y conceptos asociados a la facturación.',
        icon: 'package',
        accent: 'peach',
        authorities: [ADMIN, SLN_AUTHORITIES.PRODUCTOS.CODE],
        routes: [
          {
            id: 'cambiar-conceptos-de-facturacion',
            label: 'Cambiar conceptos de facturación',
            description: 'Configuración y actualización de conceptos utilizados en la facturación.',
            href: 'legacy/30',
            icon: 'settings-2',
            authorities: [ADMIN, SLN_AUTHORITIES.PRODUCTOS.CAMBIAR_CONCEPTO_FACTURACION],
          },
        ],
      },
      {
        id: 'informes-gerenciales',
        label: 'Informes Gerenciales',
        description:
          'Reportes estratégicos y estadísticos para la gestión administrativa y financiera.',
        icon: 'bar-chart-3',
        accent: 'coral',
        authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.CODE],
        routes: [
          {
            id: 'facturacion-periodo',
            label: 'Facturación periodo',
            description: 'Reporte consolidado de facturación por periodo.',
            href: 'legacy/31',
            icon: 'calendar-range',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.FACTURACION_PERIODO],
          },
          {
            id: 'facturacion-por-terceros',
            label: 'Facturación por terceros',
            description: 'Reporte de facturación agrupada por terceros o aseguradoras.',
            href: 'legacy/32',
            icon: 'users',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.FACTURACION_TERCEROS],
          },
          {
            id: 'facturacion-terceros-por-centro',
            label: 'Facturación terceros por centro',
            description: 'Reporte de facturación de terceros segmentado por institución o centro.',
            href: 'legacy/33',
            icon: 'building-2',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.FACT_TERCEROS_INSTITUCION],
          },
          {
            id: 'estadistico-pfgp',
            label: 'Estadistico PFGP',
            description: 'Reporte estadístico financiero bajo modelo PFGP.',
            href: 'legacy/34',
            icon: 'line-chart',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.ESTADISTICO_PFGP],
          },
          {
            id: 'estadistico-de-radicacion',
            label: 'Estadistico de radicación',
            description: 'Estadísticas del proceso de radicación de facturas.',
            href: 'legacy/35',
            icon: 'file-bar-chart',
            authorities: [ADMIN, SLN_AUTHORITIES.INFORMES_GERENCIALES.ESTADISTICO_RADICACION],
          },
        ],
      },
      {
        id: 'control-de-egresos',
        label: 'Control de egresos',
        description: 'Gestión y seguimiento de egresos para procesos de facturación.',
        icon: 'log-out',
        accent: 'aqua',
        authorities: [ADMIN, SLN_AUTHORITIES.CONTROL_EGRESOS.CODE],
        routes: [
          {
            id: 'egresos-para-facturacion',
            label: 'Egresos para facturación',
            description: 'Listado y gestión de egresos pendientes de facturación.',
            href: 'legacy/36',
            icon: 'clipboard-check',
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
            description: 'Asignación y control del personal facturador.',
            href: 'legacy/37',
            icon: 'user-cog',
            authorities: [ADMIN, SLN_AUTHORITIES.CONTROL_EGRESOS.ASIGNAR_USUARIO],
          },
        ],
      },
      {
        id: 'validaciones',
        label: 'Validaciones',
        description: 'Procesos de validación de datos y controles previos a facturación.',
        icon: 'shield-check',
        accent: 'forest',
        authorities: [ADMIN, SLN_AUTHORITIES.VALIDACIONES.CODE],
        routes: [
          {
            id: 'validacion-identificacion',
            label: 'Validación Identificación',
            description: 'Validación de datos de identificación de pacientes o terceros.',
            href: 'legacy/38',
            icon: 'id-card',
            authorities: [ADMIN, SLN_AUTHORITIES.VALIDACIONES.VALIDAR_ID],
          },
        ],
      },
    ],
  },
];
