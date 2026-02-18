import { CtmSnavItems } from '@kato-lee/admin-layout';
import { SEGURIDAD_SNAV_ITEMS } from '@aside/seguridad';

export const SIDE_NAV: CtmSnavItems[] = [
  {
    type: 'link',
    name: 'Home',
    icon: 'dashboard',
    url: 'home',
  },
  {
    type: 'link',
    name: 'Example',
    icon: 'dashboard',
    url: 'example/page-one',
  },
  ...SEGURIDAD_SNAV_ITEMS,
];
