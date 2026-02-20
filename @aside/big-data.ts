import { BIG_DATA_AUTHORITIES } from '@authorities/big-data';
import { BIG_DATA_LINKS_DISCRIMINATED as bigDataLinks } from '@modules/big-data/config';
import { NavModule, NavRoute } from './config';
import { ADMIN } from '@auths/general';

const administrativos: NavRoute[] = bigDataLinks.administrativos.map((r) => {
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: 'chart-no-axes-combined',
  };
  return res;
});

const asistenciales: NavRoute[] = bigDataLinks.asistenciales.map((r) => {
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: 'chart-no-axes-combined',
  };
  return res;
});

const centralCompras: NavRoute[] = bigDataLinks.centralCompras.map((r) => {
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: 'chart-no-axes-combined',
  };
  return res;
});

const solicitudServicios: NavRoute[] = bigDataLinks.solicitudServicios.map((r) => {
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: 'chart-no-axes-combined',
  };
  return res;
});

const hospitalizacion: NavRoute[] = bigDataLinks.hospitalizacion.map((r) => {
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: r.authorities,
    id: `big-data-on-pb-${r.key}`,
    icon: 'chart-no-axes-combined',
  };
  return res;
});

export const BIG_DATA_SNAV_ITEMS: NavModule[] = [
  {
    label: 'Indicadores de operación',
    authorities: [ADMIN, BIG_DATA_AUTHORITIES.CODE],
    id: 'indicadores-operacion',
    icon: 'chart-no-axes-combined',
    accent: 'green',
    submodules: [
      {
        label: 'Administrativos',
        id: 'administrativos',
        icon: 'chart-no-axes-combined',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.ADMINISTRATIVOS.CODE],
        routes: [...administrativos],
        accent: 'gray',
      },
      {
        label: 'Asistenciales',
        id: 'asistenciales',
        icon: 'chart-no-axes-combined',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.ASISTENCIALES.CODE],
        routes: [...asistenciales],
        accent: 'teal',
      },
      {
        label: 'Central de compras',
        id: 'central-compras',
        icon: 'chart-no-axes-combined',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.CENTRAL_COMPRAS.CODE],
        routes: [...centralCompras],
        accent: 'purple',
      },
      {
        label: 'Solicitud de servicios',
        id: 'solicitud-servicios',
        icon: 'chart-no-axes-combined',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.SOLICITUD_SERVICIOS.CODE],
        routes: [...solicitudServicios],
        accent: 'cyan',
      },
      {
        label: 'Hospitalización',
        id: 'hospitalizacion',
        icon: 'chart-no-axes-combined',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.HOSPITALIZACION.CODE],
        routes: [...hospitalizacion],
        accent: 'sky',
      },
    ],
  },
];
