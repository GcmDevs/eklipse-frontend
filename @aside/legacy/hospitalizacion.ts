import { ADMIN } from '@auths/general';
import { allContexts, GCM_CONTEXTS } from '@kato-lee/utilities/types';
import { HPN_AUTHORITIES } from '@authorities/legacy/hospitalizacion';
import { NavModule } from '@aside/config';

export const LEGACY_HOSPITALIZACION_SNAV_ITEMS: NavModule[] = [
  {
    id: 'hospitalizacion',
    label: 'Hospitalización',
    icon: 'folder-cog',
    accent: 'indigo',
    authorities: [HPN_AUTHORITIES.CODE, ADMIN],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
    submodules: [
      {
        id: 'gestion-clinica',
        label: 'Gestión Clinica',
        icon: 'folder-cog',
        accent: 'pink',
        authorities: [HPN_AUTHORITIES.GESTION_CLINICA.CODE, ADMIN],
        routes: [
          {
            id: 'gestionar-areas',
            label: 'Gestionar areas',
            href: 'legacy/2',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_AREAS, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'administrar-gestiones',
            label: 'Administrar gestiones',
            href: 'legacy/3',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.ADMINISTRAR_GESTIONES, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'administrar-traslados-ambulancia',
            label: 'Administrar traslados ambulancia',
            href: 'legacy/4',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.ADMINISTRAR_GESTIONES, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'gestionar-pacientes',
            label: 'Gestionar pacientes',
            href: 'legacy/5',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_PACIENTES, ADMIN],
            disableOnContexts: allContexts([
              GCM_CONTEXTS.ALTACENTRO,
              GCM_CONTEXTS.AGUACHICA,
              GCM_CONTEXTS.VALLEDUPAR,
            ]).codes,
          },
          {
            id: 'censo-especialidades',
            label: 'Censo especialidades',
            href: 'legacy/6',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_PACIENTES, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'tiempos-de-egresos',
            label: 'Tiempos de egresos',
            href: 'legacy/7',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.TIEMPOS_EGRESOS, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'traslados-x-movil',
            label: 'Traslados x movil',
            href: 'legacy/8',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_TRANSLADO_ASIGNADOS, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'registrar-empleado-o-entidad',
            label: 'Registrar empleado o entidad',
            href: 'legacy/9',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REGI_ASIGNAR_MOVIL, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'entrega-de-turno',
            label: 'Entrega de turno',
            href: 'legacy/10',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.ENTREGA_TURNO, ADMIN],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .codes,
          },
          {
            id: 'gestion-de-turnos',
            label: 'Gestión de turnos',
            href: 'legacy/11',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTION_TURNO, ADMIN],
          },
        ],
      },
      {
        id: 'valores-criticos',
        label: 'Valores criticos',
        icon: 'folder-cog',
        accent: 'rose',
        authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS, ADMIN],
        disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.AGUACHICA]).codes,
        routes: [
          {
            id: 'reporte',
            label: 'Reporte',
            href: 'legacy/12',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS, ADMIN],
          },
          {
            id: 'revision-alertas-sanitarias',
            label: 'Revisión alertas sanitarias',
            href: 'legacy/13',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS, ADMIN],
          },
          {
            id: 'recepcion-tecnica-de-reactivos',
            label: 'Recepción técnica de reactivos',
            href: 'legacy/14',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS, ADMIN],
          },
        ],
      },
      {
        id: 'auditoria',
        label: 'Auditoria',
        icon: 'folder-cog',
        accent: 'lime',
        authorities: [HPN_AUTHORITIES.AUDITORIA.CODE, ADMIN],
        disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO]).codes,
        routes: [
          {
            id: 'registro',
            label: 'Registro',
            href: 'legacy/15',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.AUDITORIA.GESTIONAR, ADMIN],
          },
        ],
      },
      {
        id: 'dietas',
        label: 'Dietas',
        icon: 'folder-cog',
        accent: 'emerald',
        authorities: [HPN_AUTHORITIES.DIETAS.CODE, ADMIN],
        disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
        routes: [
          {
            id: 'jornada',
            label: 'Jornada',
            href: 'legacy/16',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.DIETAS.VER_JORNADA, ADMIN],
          },
          {
            id: 'registro',
            label: 'Registro',
            href: 'legacy/17',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.DIETAS.REGISTRAR, ADMIN],
          },
          {
            id: 'no-recibidas',
            label: 'No recibidas',
            href: 'legacy/18',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.DIETAS.VER_FACTURACION, ADMIN],
          },
          {
            id: 'facturacion',
            label: 'Facturación',
            href: 'legacy/19',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.DIETAS.VER_FACTURACION, ADMIN],
          },
        ],
      },
      {
        id: 'camas',
        label: 'Camas',
        icon: 'folder-cog',
        accent: 'mint',
        authorities: [HPN_AUTHORITIES.CAMAS.RESERVA, HPN_AUTHORITIES.CAMAS.VER_CAMAS, ADMIN],
        routes: [
          {
            id: 'reservar-camas',
            label: 'Reservar camas',
            href: 'legacy/20',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.CAMAS.RESERVA, HPN_AUTHORITIES.CAMAS.VER_CAMAS, ADMIN],
          },
          {
            id: 'lista-espera',
            label: 'Lista espera',
            href: 'legacy/21',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.CAMAS.RESERVA, HPN_AUTHORITIES.CAMAS.VER_CAMAS, ADMIN],
          },
        ],
      },
      {
        id: 'censos',
        label: 'Censos',
        icon: 'folder-cog',
        accent: 'slate',
        authorities: [HPN_AUTHORITIES.CENSOS.CODE, ADMIN],
        routes: [
          {
            id: 'censo-de-pacientes',
            label: 'Censo de pacientes',
            href: 'legacy/22',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.CENSOS.PACIENTES, ADMIN],
          },
          {
            id: 'censo-de-camas',
            label: 'Censo de camas',
            href: 'legacy/23',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.CENSOS.CAMAS, ADMIN],
          },
          {
            id: 'pacientes-x-reval-pendiente',
            label: 'Pacientes x reval. pendiente',
            href: 'legacy/24',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.CENSOS.PENDIENTES_REVALORAR, ADMIN],
          },
        ],
      },
      {
        id: 'triage',
        label: 'Triage',
        icon: 'folder-cog',
        accent: 'zinc',
        authorities: [HPN_AUTHORITIES.TRIAGE.CODE, ADMIN],
        disableOnContexts: allContexts([GCM_CONTEXTS.AGUACHICA, GCM_CONTEXTS.VALLEDUPAR]).codes,
        routes: [
          {
            id: 'tablero-triage',
            label: 'Tablero triage',
            href: 'legacy/25',
            icon: 'folder-cog',
            authorities: [HPN_AUTHORITIES.TRIAGE.TABLERO, ADMIN],
          },
        ],
      },
    ],
  },
];
