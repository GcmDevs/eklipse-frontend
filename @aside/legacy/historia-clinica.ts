import { ADMIN_AUTHORITY as ADMIN } from '@auths/principal';
import { GCM_CONTEXTS } from '@common/types';
import { LEGACY_HCN_AUTHORITIES } from '@authorities/legacy/historia-clinica';
import { NavModule } from '@aside/config';

export const LEGACY_HISTORIA_CLINICA_SNAV_ITEMS: NavModule[] = [
  {
    id: 'historia-clinica',
    label: 'Historia Clinica',
    description: 'Módulo para la gestión, consulta y control de la historia clínica del paciente.',
    icon: 'file-medical',
    accent: 'neutral',
    authorities: [LEGACY_HCN_AUTHORITIES.CODE, ADMIN],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
    submodules: [
      {
        id: 'balances-de-enfermeria',
        label: 'Balances de Enfermeria',
        description:
          'Registro y consulta de balances clínicos realizados por el personal de enfermería.',
        icon: 'clipboard-list',
        accent: 'stone',
        authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.CODE, ADMIN],
        routes: [
          {
            id: 'sabanas-uci',
            label: 'Sabanas UCI',
            description: 'Registro de balances y monitoreo de pacientes en UCI.',
            href: 'legacy/26',
            icon: 'activity',
            authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.SABANAS_UCI, ADMIN],
          },
          {
            id: 'reporte-de-sabanas',
            label: 'Reporte de sabanas',
            description: 'Generación de reportes consolidados de balances de enfermería.',
            href: 'legacy/27',
            icon: 'file-text',
            authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.REPORTE_SABANAS, ADMIN],
          },
        ],
      },
      {
        id: 'epicrisis',
        label: 'Epicrisis',
        description: 'Gestión del resumen clínico de egreso del paciente.',
        icon: 'book-medical',
        accent: 'brown',
        authorities: [LEGACY_HCN_AUTHORITIES.EPICRISIS.CODE, ADMIN],
        routes: [
          {
            id: 'desconfirmar',
            label: 'Desconfirmar',
            description: 'Reversión o anulación de epicrisis previamente confirmadas.',
            href: 'legacy/28',
            icon: 'undo-2',
            authorities: [LEGACY_HCN_AUTHORITIES.EPICRISIS.DESCONFIRMAR, ADMIN],
          },
        ],
      },
      {
        id: 'interconsultas',
        label: 'Interconsultas',
        description: 'Gestión de solicitudes de interconsulta entre especialidades médicas.',
        icon: 'message-square-plus',
        accent: 'gold',
        authorities: [LEGACY_HCN_AUTHORITIES.INTERCONSULTAS.CODE, ADMIN],
        routes: [
          {
            id: 'pendientes',
            label: 'Pendientes',
            description: 'Listado de interconsultas pendientes de atención o respuesta.',
            href: 'legacy/29',
            icon: 'clock',
            authorities: [LEGACY_HCN_AUTHORITIES.INTERCONSULTAS.MOSTRAR_PENDIENTES, ADMIN],
          },
        ],
      },
    ],
  },
];
