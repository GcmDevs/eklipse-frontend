import { environment } from '@env/environment';

const apiUrlGen = `${environment.host}:8001`;

export const SEG_END_POINTS = {
  AUTH: `${apiUrlGen}/v1/sec/auth`,
  RECURSOS: `${apiUrlGen}/v1/sec/resources`,
  PERMISOS: `${apiUrlGen}/v1/sec/authorities`,
  MODULOS: `${apiUrlGen}/v1/sec/modules`,
  SUBMODULOS: `${apiUrlGen}/v1/sec/sub-modules`,
};
