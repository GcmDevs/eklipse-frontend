import { CtmSnavItems } from '@kato-lee/admin-layout';
import { SEGURIDAD_SNAV_ITEMS } from '@aside/seguridad';
import { GENERAL_SNAV_ITEMS } from '@aside/legacy/general';
import { HOSPITALIZACION_SNAV_ITEMS } from '@aside/legacy/hospitalizacion';
import { LEGACY_HISTORIA_CLINICA_SNAV_ITEMS } from '@aside/legacy/historia-clinica';
import { FACTURACION_SNAV_ITEMS } from '@aside/legacy/facturacion';
import { CARTERA_SNAV_ITEMS } from '@aside/legacy/cartera';
import { INVENTARIO_SNAV_ITEMS } from '@aside/legacy/inventario';

export const SIDE_NAV: CtmSnavItems[] = [
  {
    type: 'link',
    name: 'Home',
    icon: 'dashboard',
    url: 'home',
  },
  ...SEGURIDAD_SNAV_ITEMS,
  ...GENERAL_SNAV_ITEMS,
  ...HOSPITALIZACION_SNAV_ITEMS,
  ...LEGACY_HISTORIA_CLINICA_SNAV_ITEMS,
  ...FACTURACION_SNAV_ITEMS,
  ...CARTERA_SNAV_ITEMS,
  ...INVENTARIO_SNAV_ITEMS,
];
