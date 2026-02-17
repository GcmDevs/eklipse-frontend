import { CtmSnavItems } from '@kato-lee/admin-layout';
import { BIG_DATA_SNAV_ITEMS } from '@aside/big-data';
import { SEGURIDAD_SNAV_ITEMS } from '@aside/seguridad';

export const SIDE_NAV: CtmSnavItems[] = [
  {
    type: 'link',
    name: 'Home',
    icon: 'dashboard',
    url: 'home',
  },
  ...BIG_DATA_SNAV_ITEMS,
  ...SEGURIDAD_SNAV_ITEMS,
];
