import { environment } from '@environments/environment';

const host = environment.hostProd;

export const apiUrlGen = `${host}:8001`;

export const GENERAL_END_POINTS = {
  DEPENDENCIAS: `${apiUrlGen}/v1/gen/dependencias`,
};
