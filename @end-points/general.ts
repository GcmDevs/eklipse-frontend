import { env } from '../@environments/environment';

export const apiUrlGen = `${env.serveHost}:8001`;

export const GENERAL_END_POINTS = {
  DEPENDENCIAS: `${apiUrlGen}/v1/gen/dependencias`,
};
