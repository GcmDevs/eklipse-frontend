import { environment } from '@environments/environment';

const host = environment.hostProd;

export const apiUrlGen = `${host}:8001`;
