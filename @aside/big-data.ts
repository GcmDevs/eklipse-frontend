import { BIG_DATA_AUTHORITIES } from '@authorities/big-data';
import {
  BIG_DATA_LINKS_COMPLEMENT,
  BIG_DATA_LINKS_DISCRIMINATED as bigDataLinks,
} from '@modules/big-data/config';
import { NavModule, NavRoute } from './config';
import { ADMIN_AUTHORITY as ADMIN } from '@auths/principal';

const administrativos: NavRoute[] = bigDataLinks.administrativos.map((r) => {
  let complement: any = BIG_DATA_LINKS_COMPLEMENT.filter((c) => c.key === r.key);
  if (!complement.length) complement = { icon: 'chart-no-axes-combined', description: '' };
  else complement = complement[0];
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: complement.icon,
    description: complement.description,
  };
  return res;
});

const asistenciales: NavRoute[] = bigDataLinks.asistenciales.map((r) => {
  let complement: any = BIG_DATA_LINKS_COMPLEMENT.filter((c) => c.key === r.key);
  if (!complement.length) complement = { icon: 'chart-no-axes-combined', description: '' };
  else complement = complement[0];
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: complement.icon,
    description: complement.description,
  };
  return res;
});

const centralCompras: NavRoute[] = bigDataLinks.centralCompras.map((r) => {
  let complement: any = BIG_DATA_LINKS_COMPLEMENT.filter((c) => c.key === r.key);
  if (!complement.length) complement = { icon: 'chart-no-axes-combined', description: '' };
  else complement = complement[0];
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: complement.icon,
    description: complement.description,
  };
  return res;
});

const solicitudServicios: NavRoute[] = bigDataLinks.solicitudServicios.map((r) => {
  let complement: any = BIG_DATA_LINKS_COMPLEMENT.filter((c) => c.key === r.key);
  if (!complement.length) complement = { icon: 'chart-no-axes-combined', description: '' };
  else complement = complement[0];
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: [ADMIN, ...r.authorities],
    id: `big-data-on-pb-${r.key}`,
    icon: complement.icon,
    description: complement.description,
  };
  return res;
});

const hospitalizacion: NavRoute[] = bigDataLinks.hospitalizacion.map((r) => {
  let complement: any = BIG_DATA_LINKS_COMPLEMENT.filter((c) => c.key === r.key);
  if (!complement.length) complement = { icon: 'chart-no-axes-combined', description: '' };
  else complement = complement[0];
  const res: NavRoute = {
    label: r.name,
    href: `big-data-on-pb/${r.key}`,
    disableOnContexts: r.disableOnContexts?.map((c) => c.getCode()),
    authorities: r.authorities,
    id: `big-data-on-pb-${r.key}`,
    icon: complement.icon,
    description: complement.description,
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
    description:
      'Tablero consolidado de indicadores operativos para monitorear desempeño y eficiencia del negocio.',
    submodules: [
      {
        label: 'Administrativos',
        id: 'administrativos',
        icon: 'line-chart',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.ADMINISTRATIVOS.CODE],
        routes: [...administrativos],
        accent: 'gray',
        description:
          'Indicadores estratégicos, financieros y operativos para gestión administrativa.',
      },
      {
        label: 'Asistenciales',
        id: 'asistenciales',
        icon: 'activity',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.ASISTENCIALES.CODE],
        routes: [...asistenciales],
        accent: 'teal',
        description: 'Métricas clínicas y asistenciales relacionadas con atención al paciente.',
      },
      {
        label: 'Central de compras',
        id: 'central-compras',
        icon: 'shopping-cart',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.CENTRAL_COMPRAS.CODE],
        routes: [...centralCompras],
        accent: 'purple',
        description: 'Gestión, seguimiento y análisis de procesos de compras y abastecimiento.',
      },
      {
        label: 'Solicitud de servicios',
        id: 'solicitud-servicios',
        icon: 'clipboard-list',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.SOLICITUD_SERVICIOS.CODE],
        routes: [...solicitudServicios],
        accent: 'cyan',
        description: 'Control y seguimiento de solicitudes de servicios internos y operativos.',
      },
      {
        label: 'Hospitalización',
        id: 'hospitalizacion',
        icon: 'bed',
        authorities: [ADMIN, BIG_DATA_AUTHORITIES.HOSPITALIZACION.CODE],
        routes: [...hospitalizacion],
        accent: 'sky',
        description: 'Indicadores de ocupación, estancias y gestión de camas hospitalarias.',
      },
    ],
  },
];
