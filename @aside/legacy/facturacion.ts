import { CtmSnavItems } from '@kato-lee/admin-layout';
import { GCM_CONTEXTS } from '@common/domain/types';
import { SLN_AUTHORITIES } from '@authorities/legacy/facturacion';

export const LEGACY_FACTURACION_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'Facturación',
    authorities: [SLN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL],
    objects: [
      {
        type: 'dropdown',
        name: 'Productos',
        icon: 'inventory',
        authorities: [SLN_AUTHORITIES.PRODUCTOS.CODE],
        dropdownLinks: [
          {
            name: 'Cambiar conceptos de facturación',
            url: 'legacy/30',
            authorities: [SLN_AUTHORITIES.PRODUCTOS.CAMBIAR_CONCEPTO_FACTURACION],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Informes Gerenciales',
        icon: 'assessment',
        authorities: [SLN_AUTHORITIES.INFORMES_GERENCIALES.CODE],
        urlIsNotAutoCompleted: true,
        dropdownLinks: [
          {
            name: 'Facturación periodo',
            url: 'legacy/31',
            authorities: [SLN_AUTHORITIES.INFORMES_GERENCIALES.FACTURACION_PERIODO],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Facturación por terceros',
            url: 'legacy/32',
            authorities: [SLN_AUTHORITIES.INFORMES_GERENCIALES.FACTURACION_TERCEROS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Facturación terceros por centro',
            url: 'legacy/33',
            authorities: [SLN_AUTHORITIES.INFORMES_GERENCIALES.FACT_TERCEROS_INSTITUCION],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Estadistico PFGP',
            url: 'legacy/34',
            authorities: [SLN_AUTHORITIES.INFORMES_GERENCIALES.ESTADISTICO_PFGP],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Estadistico de radicación',
            url: 'legacy/35',
            authorities: [SLN_AUTHORITIES.INFORMES_GERENCIALES.ESTADISTICO_RADICACION],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Control de egresos',
        icon: 'list_alt',
        authorities: [SLN_AUTHORITIES.CONTROL_EGRESOS.CODE],
        dropdownLinks: [
          {
            name: 'Egresos para facturación',
            url: 'legacy/36',
            authorities: [
              SLN_AUTHORITIES.CONTROL_EGRESOS.CREAR_PENDIENTES,
              SLN_AUTHORITIES.CONTROL_EGRESOS.ASIGNAR_USUARIO,
              SLN_AUTHORITIES.CONTROL_EGRESOS.VER_EGRESOS,
            ],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Control de facturadores',
            url: 'legacy/37',
            authorities: [SLN_AUTHORITIES.CONTROL_EGRESOS.ASIGNAR_USUARIO],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Validaciones',
        icon: 'verified_user',
        authorities: [SLN_AUTHORITIES.VALIDACIONES.CODE],
        dropdownLinks: [
          {
            name: 'Validación Identificación',
            url: 'legacy/38',
            authorities: [SLN_AUTHORITIES.VALIDACIONES.VALIDAR_ID],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
    ],
  },
];
