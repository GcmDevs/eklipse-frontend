import { environment } from '@env/environment';

export const apiUrlGen = `${environment.host}:8001`;

export const GENERAL_END_POINTS = {
  DEPENDENCIAS: `${apiUrlGen}/v1/gen/dependencias`,
};
