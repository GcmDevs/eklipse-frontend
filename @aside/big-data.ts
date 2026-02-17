import { BIG_DATA_AUTHORITIES } from '@authorities/big-data';
import { CtmSnavDropdownLink, CtmSnavItems } from '@kato-lee/admin-layout';
import { BIG_DATA_LINKS_DISCRIMINATED as bigDataLinks } from '@modules/big-data/config';

const administrativos: CtmSnavDropdownLink[] = bigDataLinks.administrativos.map((r) => {
  const res: CtmSnavDropdownLink = {
    name: r.name,
    url: `big-data/${r.key}`,
    disableOnContexts: r.disableOnContexts,
    authorities: r.authorities,
    urlIsNotAutoCompleted: true,
  };
  return res;
});

const asistenciales: CtmSnavDropdownLink[] = bigDataLinks.asistenciales.map((r) => {
  const res: CtmSnavDropdownLink = {
    name: r.name,
    url: `big-data/${r.key}`,
    disableOnContexts: r.disableOnContexts,
    authorities: r.authorities,
    urlIsNotAutoCompleted: true,
  };
  return res;
});

const centralCompras: CtmSnavDropdownLink[] = bigDataLinks.centralCompras.map((r) => {
  const res: CtmSnavDropdownLink = {
    name: r.name,
    url: `big-data/${r.key}`,
    disableOnContexts: r.disableOnContexts,
    authorities: r.authorities,
    urlIsNotAutoCompleted: true,
  };
  return res;
});

const solicitudServicios: CtmSnavDropdownLink[] = bigDataLinks.solicitudServicios.map((r) => {
  const res: CtmSnavDropdownLink = {
    name: r.name,
    url: `big-data/${r.key}`,
    disableOnContexts: r.disableOnContexts,
    authorities: r.authorities,
    urlIsNotAutoCompleted: true,
  };
  return res;
});

const hospitalizacion: CtmSnavDropdownLink[] = bigDataLinks.hospitalizacion.map((r) => {
  const res: CtmSnavDropdownLink = {
    name: r.name,
    url: `big-data/${r.key}`,
    disableOnContexts: r.disableOnContexts,
    authorities: r.authorities,
    urlIsNotAutoCompleted: true,
  };
  return res;
});

export const BIG_DATA_SNAV_ITEMS: CtmSnavItems[] = [
  {
    type: 'link',
    name: 'Costos y planeación',
    icon: 'paid',
    url: 'big-data/costos',
    authorities: [BIG_DATA_AUTHORITIES.ADMINISTRATIVOS.COSTOS],
  },
  {
    type: 'collection',
    name: 'Indicadores de operación',
    authorities: [BIG_DATA_AUTHORITIES.CODE],
    objects: [
      {
        type: 'dropdown',
        name: 'Administrativos',
        icon: 'toc',
        authorities: [BIG_DATA_AUTHORITIES.ADMINISTRATIVOS.CODE],
        dropdownLinks: [...administrativos],
      },
      {
        type: 'dropdown',
        name: 'Asistenciales',
        icon: 'toc',
        authorities: [BIG_DATA_AUTHORITIES.ASISTENCIALES.CODE],
        dropdownLinks: [...asistenciales],
      },
      {
        type: 'dropdown',
        name: 'Central de compras',
        icon: 'toc',
        authorities: [BIG_DATA_AUTHORITIES.CENTRAL_COMPRAS.CODE],
        dropdownLinks: [...centralCompras],
      },
      {
        type: 'dropdown',
        name: 'Solicitud de servicios',
        icon: 'toc',
        authorities: [BIG_DATA_AUTHORITIES.SOLICITUD_SERVICIOS.CODE],
        dropdownLinks: [...solicitudServicios],
      },
      {
        type: 'dropdown',
        name: 'Hospitalización',
        icon: 'toc',
        authorities: [BIG_DATA_AUTHORITIES.HOSPITALIZACION.CODE],
        dropdownLinks: [...hospitalizacion],
      },
    ],
  },
];
