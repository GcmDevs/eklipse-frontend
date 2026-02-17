import { CtmSnavItems } from '@kato-lee/admin-layout';
import { SEGURIDAD_SNAV_ITEMS } from '@aside/seguridad';

export const SIDE_NAV: CtmSnavItems[] = [
  {
    type: 'link',
    name: 'Home',
    icon: 'dashboard',
    url: 'home',
  },
  ...SEGURIDAD_SNAV_ITEMS,
];
