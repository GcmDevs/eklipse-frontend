import { TipoPermisoCode } from '@modules/permisos/domain/entities';
import { RolDependienteCode } from '@modules/permisos/domain/types';

export interface PermisoResponse {
  id: string;
  code: string;
  name: string;
  module: ModuloRes | null;
  subModule: ModuloRes | null;
  tipo: TipoPermisoCode;
  isByRol: boolean;
}

export interface AuthoritiesRes {
  onlyCodigos: string;
  permisos: PermisoResponse[];
}

export interface DependenciaResponse {
  id: string;
  codigo: string;
  nombre: string;
  rol: {
    code: RolDependienteCode;
    forHumans: string;
  };
}

export interface ModuloRes {
  id: string;
  code: string;
  name: string;
}

export interface RolRes {
  id: string;
  code: string;
  name: string;
  authorities: PermisoResponse[];
}
