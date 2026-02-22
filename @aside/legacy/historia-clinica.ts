import { LEGACY_HCN_AUTHORITIES } from '@authorities/legacy/historia-clinica';
import { ADMIN_AUTHORITY as ADMIN } from '@auths/legacy/principal';
import { GCM_CONTEXTS } from '@common/types';
import { NavModule } from '@aside/config';

export const LEGACY_HISTORIA_CLINICA_SNAV_ITEMS: NavModule[] = [
  {
    id: 'historia-clinica',
    label: 'Historia Clinica',
    icon: 'folder-cog',
    accent: 'red',
    authorities: [LEGACY_HCN_AUTHORITIES.CODE, ADMIN],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL.getCode()],
    submodules: [
      {
        id: 'balances-de-enfermeria',
        label: 'Balances de Enfermeria',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.CODE, ADMIN],
        routes: [
          {
            id: 'sabanas-uci',
            label: 'Sabanas UCI',
            href: 'legacy/26',
            icon: 'folder-cog',
            authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.SABANAS_UCI, ADMIN],
          },
          {
            id: 'reporte-de-sabanas',
            label: 'Reporte de sabanas',
            href: 'legacy/27',
            icon: 'folder-cog',
            authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.REPORTE_SABANAS, ADMIN],
          },
        ],
      },
      {
        id: 'epicrisis',
        label: 'Epicrisis',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [LEGACY_HCN_AUTHORITIES.EPICRISIS.CODE, ADMIN],
        routes: [
          {
            id: 'desconfirmar',
            label: 'Desconfirmar',
            href: 'legacy/28',
            icon: 'folder-cog',
            authorities: [LEGACY_HCN_AUTHORITIES.EPICRISIS.DESCONFIRMAR, ADMIN],
          },
        ],
      },
      {
        id: 'interconsultas',
        label: 'Interconsultas',
        icon: 'folder-cog',
        accent: 'red',
        authorities: [LEGACY_HCN_AUTHORITIES.INTERCONSULTAS.CODE, ADMIN],
        routes: [
          {
            id: 'pendientes',
            label: 'Pendientes',
            href: 'legacy/29',
            icon: 'folder-cog',
            authorities: [LEGACY_HCN_AUTHORITIES.INTERCONSULTAS.MOSTRAR_PENDIENTES, ADMIN],
          },
        ],
      },
    ],
  },
];
