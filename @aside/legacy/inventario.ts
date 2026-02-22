import { allContexts, GCM_CONTEXTS } from '@common/types';
import { ADMIN_AUTHORITY as ADMIN } from '@auths/legacy/principal';
import { INN_AUTHORITIES } from '@authorities/legacy/inventario';
import { NavModule } from '@aside/config';

export const LEGACY_INVENTARIO_SNAV_ITEMS: NavModule[] = [
  {
    id: 'inventario',
    label: 'Inventario',
    icon: 'folder-cog',
    accent: 'red',
    authorities: [ADMIN, INN_AUTHORITIES.CODE],
    submodules: [
      {
        id: 'equipos',
        label: 'Equipos',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, INN_AUTHORITIES.EQUIPO_BIOMEDICO.CODE],
        routes: [
          {
            id: 'hoja-de-vida-equipos-general',
            label: 'Hoja de Vida Equipos General',
            href: 'legacy/45',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.EQUIPO_BIOMEDICO.BASICO],
          },
          {
            id: 'creacion-identificacion-equipo',
            label: 'Creacion identificacion equipo',
            href: 'legacy/46',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.EQUIPO_BIOMEDICO.BASICO],
          },
        ],
      },

      {
        id: 'gestion-de-servicios',
        label: 'Gestión de servicios',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, INN_AUTHORITIES.SERVICIO_TECNICO.CODE],
        routes: [
          {
            id: 'asignar-tipos-a-usuarios',
            label: 'Asignar tipos a usuarios',
            href: 'legacy/47',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SERVICIO_TECNICO.MANAGE_TIPOS_TO_USUARIOS],
          },
          {
            id: 'agregar-solicitudes',
            label: 'Agregar solicitudes',
            href: 'legacy/48',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SERVICIO_TECNICO.AGREGAR_SOLICITUDES],
          },
          {
            id: 'atender-solicitudes',
            label: 'Atender solicitudes',
            href: 'legacy/49',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SERVICIO_TECNICO.ATENDER_SOLICITUDES],
          },
        ],
      },

      {
        id: 'central-de-compras',
        label: 'Central de compras',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, INN_AUTHORITIES.CENTRAL_COMPRAS.CODE],
        routes: [
          {
            id: 'gestionar-solicitudes',
            label: 'Gestionar solicitudes',
            href: 'legacy/54',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.CENTRAL_COMPRAS.CODE],
          },
          {
            id: 'gestion-oc-medicamentos-dispositivos',
            label: 'Gestión OC medicamentos & dispositivos',
            href: 'legacy/55',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.CENTRAL_COMPRAS.CODE],
          },
          {
            id: 'generar-oc',
            label: 'Generar OC',
            href: 'legacy/56',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.CENTRAL_COMPRAS.COTIZACIONES_PREFABRICADAS],
          },
          {
            id: 'historico-oc-gestionadas',
            label: 'Historico OC gestionadas',
            href: 'legacy/57',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.CENTRAL_COMPRAS.COTIZACIONES_PREFABRICADAS],
          },
        ],
      },

      {
        id: 'farmacia',
        label: 'Farmacia',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [
          ADMIN,
          INN_AUTHORITIES.FARMACIA.CODE,
          INN_AUTHORITIES.RECEPCION_TECNICA.CODE,
          INN_AUTHORITIES.PRODUCTOS.CODE,
          INN_AUTHORITIES.SUMINISTROS.CODE,
        ],
        routes: [
          {
            id: 'productos-disponibles-x-farmacia',
            label: 'Productos disponibles x farmacia',
            href: 'legacy/58',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.PRODUCTOS.GESTION_REPORTES],
          },
          {
            id: 'productos-disponibles-oncologia',
            label: 'Productos disponibles (oncología)',
            href: 'legacy/59',
            icon: 'folder-cog',
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO]).codes,
            authorities: [ADMIN, INN_AUTHORITIES.PRODUCTOS.GESTION_REPORTES],
          },
          {
            id: 'productos-disponibles-por-centro',
            label: 'Productos disponibles (por centro)',
            href: 'legacy/60',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.PRODUCTOS.GESTION_REPORTES],
          },
          {
            id: 'gestionar-recepciones-tecnicas',
            label: 'Gestionar recepciones tecnicas',
            href: 'legacy/61',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.RECEPCION_TECNICA.GENERAR_CONSULTAR_RECEPC_TECN],
          },
          {
            id: 'gestionar-devoluciones-de-mezclas',
            label: 'Gestionar devoluciones de mezclas',
            href: 'legacy/62',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SUMINISTROS.GESTION_SUM_MEZCLA_DEV],
          },
          {
            id: 'inventario-ciclico',
            label: 'Inventario cíclico',
            href: 'legacy/63',
            icon: 'folder-cog',
            authorities: [
              ADMIN,
              INN_AUTHORITIES.FARMACIA.GESTION_INVENTARIO_CICLICO,
              INN_AUTHORITIES.FARMACIA.VERIFICAR_INVENTARIO_CICLICO,
            ],
          },
          {
            id: 'gestion-demandas-insatisfechas',
            label: 'Gestión demandas insatisfechas',
            href: 'legacy/64',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.FARMACIA.GESTION_DEMANDAS_INSATISFECHAS],
          },
          {
            id: 'control-de-gasto-en-consignacion',
            label: 'Control de gasto en consignación',
            href: 'legacy/65',
            icon: 'folder-cog',
            authorities: [
              ADMIN,
              INN_AUTHORITIES.FARMACIA.CONTROL_GASTOS_FACTURADOR,
              INN_AUTHORITIES.FARMACIA.CONTROL_GASTOS_SOLICITANTE,
            ],
          },
          {
            id: 'legalizacion-de-facturas',
            label: 'Legalización de facturas',
            href: 'legacy/66',
            icon: 'folder-cog',
            authorities: [
              ADMIN,
              INN_AUTHORITIES.FARMACIA.LEGALIZACION_FACTURAS_FACTURADOR,
              INN_AUTHORITIES.FARMACIA.LEGALIZACION_FACTURAS_SOLICITANTE,
            ],
          },
          {
            id: 'inventario',
            label: 'Inventario',
            href: 'legacy/67',
            icon: 'folder-cog',
            authorities: [
              ADMIN,
              INN_AUTHORITIES.FARMACIA.INVENTARIO_ADMIN,
              INN_AUTHORITIES.FARMACIA.INVENTARIO_CONTEO,
            ],
          },
        ],
      },

      {
        id: 'solicitudes-de-preparacion-a-central',
        label: 'Solicitudes de preparación a central',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, INN_AUTHORITIES.SOLICITUDES_MEZCLAS.CODE],
        routes: [
          {
            id: 'oncologicos',
            label: 'Oncológicos',
            href: 'legacy/68',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
          },
          {
            id: 'no-oncologicos',
            label: 'No oncológicos',
            href: 'legacy/69',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
          },
          {
            id: 'nutricion-parenteral',
            label: 'Nutrición parenteral',
            href: 'legacy/70',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
          },
          {
            id: 'reempaque-reenvace-de-tableteria',
            label: 'Reempaque / reenvace de tabletería',
            href: 'legacy/71',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.SOLICITUDES_MEZCLAS.GESTION_SOLICITUDES],
          },
        ],
      },

      {
        id: 'ofertas',
        label: 'Ofertas',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [ADMIN, INN_AUTHORITIES.OFERTAS.CODE],
        routes: [
          {
            id: 'productos',
            label: 'productos',
            href: 'legacy/72',
            icon: 'folder-cog',
            authorities: [ADMIN, INN_AUTHORITIES.OFERTAS.LISTAR],
          },
        ],
      },
    ],
  },
];
