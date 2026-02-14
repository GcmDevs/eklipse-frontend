import { CtmType } from '@kato-lee/utilities';

export type GcmContextCode =
  | 'ALTACENTRO'
  | 'AGUACHICA'
  | 'VALLEDUPAR'
  | 'SANJUAN'
  | 'AMMEDICAL'
  | 'DEVELOPMENT';

export class GcmContextType extends CtmType<GcmContextCode> {}

const ALTACENTRO = new GcmContextType('ALTACENTRO', 'Alta complejidad / Medicos Centro');
const AGUACHICA = new GcmContextType('AGUACHICA', 'Alta complejidad Aguachica');
const VALLEDUPAR = new GcmContextType('VALLEDUPAR', 'Clinica Valledupar');
const SANJUAN = new GcmContextType('SANJUAN', 'Clinica San Juan del Cesar');
const AMMEDICAL = new GcmContextType('AMMEDICAL', 'AMMedical');
const DEVELOPMENT = new GcmContextType('DEVELOPMENT', 'Sistemas & Desarrollo');

export const gcmContextTypeFactory = (context: GcmContextCode) => {
  switch (context) {
    case 'ALTACENTRO':
      return ALTACENTRO;
    case 'AGUACHICA':
      return AGUACHICA;
    case 'VALLEDUPAR':
      return VALLEDUPAR;
    case 'SANJUAN':
      return SANJUAN;
    case 'AMMEDICAL':
      return AMMEDICAL;
    case 'DEVELOPMENT':
      return DEVELOPMENT;
  }
};

export const GCM_CONTEXTS = { ALTACENTRO, AGUACHICA, VALLEDUPAR, SANJUAN, AMMEDICAL, DEVELOPMENT };

export const GCM_CONTEXTS_VALUES = [
  ALTACENTRO,
  AGUACHICA,
  VALLEDUPAR,
  SANJUAN,
  AMMEDICAL,
  DEVELOPMENT,
];

export interface AllCtxExceptI {
  types: GcmContextType[];
  codes: GcmContextCode[];
}

export function allContexts(excluded: GcmContextType[] = []): AllCtxExceptI {
  const validCtxs: GcmContextType[] = [];
  const ctxs = [...GCM_CONTEXTS_VALUES];

  ctxs.forEach((ctx) => {
    if (!excluded.filter((el) => el === ctx).length) validCtxs.push(ctx);
  });

  const codes = validCtxs.map((r) => r.getCode());
  return { types: validCtxs, codes };
}
