import { allContexts, GCM_CONTEXTS } from '@common/domain/types';
import { HPN_AUTHORITIES } from '@authorities/legacy/hospitalizacion';
import { CtmSnavItems } from '@kato-lee/admin-layout';

export const LEGACY_HOSPITALIZACION_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'Hospitalización',
    authorities: [HPN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL],
    objects: [
      {
        type: 'dropdown',
        name: 'Gestión Clinica',
        icon: 'manage_accounts',
        authorities: [HPN_AUTHORITIES.GESTION_CLINICA.CODE],
        dropdownLinks: [
          {
            name: 'Gestionar areas',
            url: 'legacy/2',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_AREAS],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Administrar gestiones',
            url: 'legacy/3',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.ADMINISTRAR_GESTIONES],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Administrar traslados ambulancia',
            url: 'legacy/4',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.ADMINISTRAR_GESTIONES],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Gestionar pacientes',
            url: 'legacy/5',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_PACIENTES],
            disableOnContexts: allContexts([
              GCM_CONTEXTS.ALTACENTRO,
              GCM_CONTEXTS.AGUACHICA,
              GCM_CONTEXTS.VALLEDUPAR,
            ]).types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Censo especialidades',
            url: 'legacy/6',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_PACIENTES],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Tiempos de egresos',
            url: 'legacy/7',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.TIEMPOS_EGRESOS],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Traslados x movil',
            url: 'legacy/8',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTIONAR_TRANSLADO_ASIGNADOS],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Registrar empleado o entidad',
            url: 'legacy/9',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REGI_ASIGNAR_MOVIL],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Entrega de turno',
            url: `legacy/10`,
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.ENTREGA_TURNO],
            disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.VALLEDUPAR])
              .types,
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Gestión de turnos',
            url: `legacy/11`,
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.GESTION_TURNO],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Valores criticos',
        icon: 'warning',
        authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS],
        disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO, GCM_CONTEXTS.AGUACHICA]).types,
        dropdownLinks: [
          {
            name: 'Reporte',
            url: 'legacy/12',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Revisión alertas sanitarias',
            url: 'legacy/13',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Recepción técnica de reactivos',
            url: 'legacy/14',
            authorities: [HPN_AUTHORITIES.GESTION_CLINICA.REPORTE_VALORES_CRITICOS],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Auditoria',
        icon: 'album',
        authorities: [HPN_AUTHORITIES.AUDITORIA.CODE],
        disableOnContexts: allContexts([GCM_CONTEXTS.ALTACENTRO]).types,
        dropdownLinks: [
          {
            name: 'Registro',
            url: `legacy/15`,
            authorities: [HPN_AUTHORITIES.AUDITORIA.GESTIONAR],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Dietas',
        icon: 'restaurant',
        authorities: [HPN_AUTHORITIES.DIETAS.CODE],
        disableOnContexts: [GCM_CONTEXTS.AMMEDICAL, GCM_CONTEXTS.DEVELOPMENT],
        dropdownLinks: [
          {
            name: 'Jornada',
            url: 'legacy/16',
            authorities: [HPN_AUTHORITIES.DIETAS.VER_JORNADA],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Registro',
            url: 'legacy/17',
            authorities: [HPN_AUTHORITIES.DIETAS.REGISTRAR],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'No recibidas',
            url: 'legacy/18',
            authorities: [HPN_AUTHORITIES.DIETAS.VER_FACTURACION],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Facturación',
            url: 'legacy/19',
            authorities: [HPN_AUTHORITIES.DIETAS.VER_FACTURACION],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Camas',
        url: `camas`,
        icon: 'bed',
        authorities: [HPN_AUTHORITIES.CAMAS.RESERVA, HPN_AUTHORITIES.CAMAS.VER_CAMAS],
        dropdownLinks: [
          {
            name: 'Reservar camas',
            url: 'legacy/20',
            authorities: [HPN_AUTHORITIES.CAMAS.RESERVA, HPN_AUTHORITIES.CAMAS.VER_CAMAS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Lista espera',
            url: 'legacy/21',
            authorities: [HPN_AUTHORITIES.CAMAS.RESERVA, HPN_AUTHORITIES.CAMAS.VER_CAMAS],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Censos',
        icon: 'format_list_bulleted',
        authorities: [HPN_AUTHORITIES.CENSOS.CODE],
        dropdownLinks: [
          {
            name: 'Censo de pacientes',
            url: 'legacy/22',
            authorities: [HPN_AUTHORITIES.CENSOS.PACIENTES],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Censo de camas',
            url: 'legacy/23',
            authorities: [HPN_AUTHORITIES.CENSOS.CAMAS],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Pacientes x reval. pendiente',
            url: 'legacy/24',
            authorities: [HPN_AUTHORITIES.CENSOS.PENDIENTES_REVALORAR],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Triage',
        icon: 'local_hospital',
        authorities: [HPN_AUTHORITIES.TRIAGE.CODE],
        disableOnContexts: allContexts([GCM_CONTEXTS.AGUACHICA, GCM_CONTEXTS.VALLEDUPAR]).types,
        dropdownLinks: [
          {
            name: 'Tablero triage',
            authorities: [HPN_AUTHORITIES.TRIAGE.TABLERO],
            url: 'legacy/25',
            urlIsNotAutoCompleted: true,
          },
        ],
      },
    ],
  },
];
