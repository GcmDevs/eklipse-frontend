import { NavModule } from './models';
import { SEGURIDAD_SNAV_ITEMS } from '../seguridad';
import { BIG_DATA_SNAV_ITEMS } from '../big-data';

export * from './models';

export const NAVIGATION_CONFIG: NavModule[] = [
  // -- AVOID NOWRAP -- //
  ...SEGURIDAD_SNAV_ITEMS,
  ...BIG_DATA_SNAV_ITEMS,
];
