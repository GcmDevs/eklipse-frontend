import { CtmSnavItems } from '@kato-lee/admin-layout';
import { allContexts, GCM_CONTEXTS } from '@common/domain/types';
import { INN_AUTHORITIES } from '@authorities/legacy/inventario';

export const LEGACY_INVENTARIO_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'Inventario',
    authorities: [INN_AUTHORITIES.CODE],
    objects: [
      {
        type: 'dropdown',
        name: 'Equipos',
        icon: 'medical_services',
        authorities: [INN_AUTHORITIES.EQUIPO_BIOMEDICO.CODE],
        dropdownLinks: [
          {
            name: 'Hoja de Vida Equipos General',
            url: `legacy/45`,
            authorities: [INN_AUTHORITIES.EQUIPO_BIOMEDICO.BASICO],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Creacion identificacion equipo',
            url: `legacy/46`,
            authorities: [INN_AUTHORITIES.EQUIPO_BIOMEDICO.BASICO],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Gestión de servicios',
        icon: 'desktop_windows',
        authorities: [INN_AUTHORITIES.SERVICIO_TECNICO.CODE],
        dropdownLinks: [
          {
            name: 'Asignar tipos a usuarios',
            url: 'legacy/47',
            authorities: [INN_AUTHORITIES.SERVICIO_TECNICO.MANAGE_TIPOS_TO_USUARIOS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Agregar solicitudes',
            url: 'legacy/48',
            authorities: [INN_AUTHORITIES.SERVICIO_TECNICO.AGREGAR_SOLICITUDES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Atender solicitudes',
            url: 'legacy/49',
            authorities: [INN_AUTHORITIES.SERVICIO_TECNICO.ATENDER_SOLICITUDES],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Central de compras',
        icon: 'shopping_cart',
        authorities: [INN_AUTHORITIES.CENTRAL_COMPRAS.CODE],
        dropdownLinks: [
          {
            name: 'Gestionar solicitudes',
            url: `legacy/54`,
            authorities: [INN_AUTHORITIES.CENTRAL_COMPRAS.CODE],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Gestión OC medicamentos & dispositivos',
            url: `legacy/55`,
            authorities: [INN_AUTHORITIES.CENTRAL_COMPRAS.CODE],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Generar OC',
            url: `legacy/56`,
            authorities: [INN_AUTHORITIES.CENTRAL_COMPRAS.COTIZACIONES_PREFABRICADAS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Historico OC gestionadas',
            url: `legacy/57`,
            authorities: [INN_AUTHORITIES.CENTRAL_COMPRAS.COTIZACIONES_PREFABRICADAS],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Farmacia',
        icon: 'vaccines',
        authorities: [
          INN_AUTHORITIES.FARMACIA.CODE,
          INN_AUTHORITIES.RECEPCION_TECNICA.CODE,
          INN_AUTHORITIES.PRODUCTOS.CODE,
          INN_AUTHORITIES.SUMINISTROS.CODE,
        ],
        dropdownLinks: [
          {
            name: 'Productos disponibles x farmacia',
            url: 'legacy/58',
            authorities: [INN_AUTHORITIES.PRODUCTOS.GESTION_REPORTES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Productos disponibles (oncología)',
            url: 'legacy/59',
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO]).types,
            authorities: [INN_AUTHORITIES.PRODUCTOS.GESTION_REPORTES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Productos disponibles (por centro)',
            url: 'legacy/60',
            authorities: [INN_AUTHORITIES.PRODUCTOS.GESTION_REPORTES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Gestionar recepciones tecnicas',
            url: `legacy/61`,
            authorities: [INN_AUTHORITIES.RECEPCION_TECNICA.GENERAR_CONSULTAR_RECEPC_TECN],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Gestionar devoluciones de mezclas',
            url: 'legacy/62',
            authorities: [INN_AUTHORITIES.SUMINISTROS.GESTION_SUM_MEZCLA_DEV],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Inventario cíclico',
            url: 'legacy/63',
            authorities: [
              INN_AUTHORITIES.FARMACIA.GESTION_INVENTARIO_CICLICO,
              INN_AUTHORITIES.FARMACIA.VERIFICAR_INVENTARIO_CICLICO,
            ],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Gestión demandas insatisfechas',
            url: 'legacy/64',
            authorities: [INN_AUTHORITIES.FARMACIA.GESTION_DEMANDAS_INSATISFECHAS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Control de gasto en consignación',
            url: 'legacy/65',
            authorities: [
              INN_AUTHORITIES.FARMACIA.CONTROL_GASTOS_FACTURADOR,
              INN_AUTHORITIES.FARMACIA.CONTROL_GASTOS_SOLICITANTE,
            ],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Legalización de facturas',
            url: 'legacy/66',
            authorities: [
              INN_AUTHORITIES.FARMACIA.LEGALIZACION_FACTURAS_FACTURADOR,
              INN_AUTHORITIES.FARMACIA.LEGALIZACION_FACTURAS_SOLICITANTE,
            ],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Inventario',
            url: 'legacy/67',
            authorities: [
              INN_AUTHORITIES.FARMACIA.INVENTARIO_ADMIN,
              INN_AUTHORITIES.FARMACIA.INVENTARIO_CONTEO,
            ],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Solicitudes de preparación a central',
        icon: 'science',
        authorities: [INN_AUTHORITIES.SOLICITUDES_MEZCLAS.CODE],
        dropdownLinks: [
          {
            name: 'Oncológicos',
            url: 'legacy/68',
            authorities: [INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'No oncológicos',
            url: 'legacy/69',
            authorities: [INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Nutrición parenteral',
            url: 'legacy/70',
            authorities: [INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Reempaque / reenvace de tabletería',
            url: 'legacy/71',
            authorities: [INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Ofertas',
        icon: 'shopping_bag',
        authorities: [INN_AUTHORITIES.OFERTAS.CODE],
        dropdownLinks: [
          {
            name: 'productos',
            url: `legacy/72`,
            authorities: [INN_AUTHORITIES.OFERTAS.LISTAR],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
    ],
  },
];
