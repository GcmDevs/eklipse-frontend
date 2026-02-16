import { CtmSnavItems } from '@kato-lee/admin-layout';
import { GCM_CONTEXTS } from '@common/domain/types';
import { LEGACY_HCN_AUTHORITIES } from '@authorities/legacy/historia-clinica';

export const LEGACY_HISTORIA_CLINICA_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'collection',
    name: 'Historia Clinica',
    icon: 'shield',
    authorities: [LEGACY_HCN_AUTHORITIES.CODE],
    disableOnContexts: [GCM_CONTEXTS.AMMEDICAL],
    objects: [
      {
        type: 'dropdown',
        name: 'Balances de Enfermeria',
        icon: 'balance',
        authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.CODE],
        dropdownLinks: [
          {
            name: 'Sabanas UCI',
            url: 'legacy/26',
            authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.SABANAS_UCI],
            urlIsNotAutoCompleted: true,
          },
          {
            name: 'Reporte de sabanas',
            url: 'legacy/27',
            authorities: [LEGACY_HCN_AUTHORITIES.BALANCES_ENFERMERIA.REPORTE_SABANAS],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Epicrisis',
        icon: 'work_history',
        authorities: [LEGACY_HCN_AUTHORITIES.EPICRISIS.CODE],
        dropdownLinks: [
          {
            name: 'Desconfirmar',
            url: 'legacy/28',
            authorities: [LEGACY_HCN_AUTHORITIES.EPICRISIS.DESCONFIRMAR],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'Interconsultas',
        icon: 'shuffle',
        authorities: [LEGACY_HCN_AUTHORITIES.INTERCONSULTAS.CODE],
        dropdownLinks: [
          {
            name: 'Pendientes',
            url: 'legacy/29',
            authorities: [LEGACY_HCN_AUTHORITIES.INTERCONSULTAS.MOSTRAR_PENDIENTES],
            urlIsNotAutoCompleted: true,
          },
        ],
      },
    ],
  },
];
