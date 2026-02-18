import { NavModule } from './models';
import { SEGURIDAD_SNAV_ITEMS } from '../seguridad';

export * from './models';

export const NAVIGATION_CONFIG: NavModule[] = [
  //
  ...SEGURIDAD_SNAV_ITEMS,
];
