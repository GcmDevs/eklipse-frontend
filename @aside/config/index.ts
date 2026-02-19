import { NavModule } from './models';
import { SEGURIDAD_SNAV_ITEMS } from '../seguridad';
import { GCM_CONTEXTS } from '@kato-lee/utilities/types';
import { LEGACY_GENERAL_SNAV_ITEMS } from '@aside/legacy/general';
import { LEGACY_HOSPITALIZACION_SNAV_ITEMS } from '@aside/legacy/hospitalizacion';
import { LEGACY_HISTORIA_CLINICA_SNAV_ITEMS } from '@aside/legacy/historia-clinica';
import { LEGACY_CARTERA_SNAV_ITEMS } from '@aside/legacy/cartera';
import { LEGACY_FACTURACION_SNAV_ITEMS } from '@aside/legacy/facturacion';
import { LEGACY_INVENTARIO_SNAV_ITEMS } from '@aside/legacy/inventario';

export * from './models';

export const CONTEXTS_CODES = {
  AMMEDICAL: GCM_CONTEXTS.AMMEDICAL.getCode(),
  ALTACENTRO: GCM_CONTEXTS.ALTACENTRO.getCode(),
  AGUACHICA: GCM_CONTEXTS.AGUACHICA.getCode(),
  SANJUAN: GCM_CONTEXTS.SANJUAN.getCode(),
  VALLEDUPAR: GCM_CONTEXTS.VALLEDUPAR.getCode(),
};

export const NAVIGATION_CONFIG: NavModule[] = [
  // -- AVOID NOWRAP -- //
  ...SEGURIDAD_SNAV_ITEMS,
  ...LEGACY_GENERAL_SNAV_ITEMS,
  ...LEGACY_HOSPITALIZACION_SNAV_ITEMS,
  ...LEGACY_HISTORIA_CLINICA_SNAV_ITEMS,
  ...LEGACY_FACTURACION_SNAV_ITEMS,
  ...LEGACY_CARTERA_SNAV_ITEMS,
  ...LEGACY_INVENTARIO_SNAV_ITEMS,
];
