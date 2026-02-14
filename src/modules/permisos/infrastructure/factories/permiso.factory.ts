import { Permiso, tipoPermisoLevelFactory } from '@modules/permisos/domain/entities';
import { DependenciaResponse, PermisoResponse } from '../data-transfers';
import { orderBy } from '@kato-lee/utilities';

export const permisoResponseToCollection = (response: PermisoResponse[]) => {
  const allPermisos: Permiso[] = [];

  const modulos: PermisoResponse[] = [];

  response.map((el) => {
    el.tipo = 3;
    if (el.module) {
      if (!modulos.filter((m) => m.code === el.module!.code && m.name === el.module!.name).length) {
        modulos.push({
          id: el.module.id,
          isByRol: false,
          tipo: 1,
          code: el.module.code,
          name: el.module.name,
          module: null,
          subModule: null,
        });
      }
    }

    if (el.subModule) {
      if (
        !modulos.filter(
          (m) =>
            m.code === `${el.module?.code}${el.subModule!.code}` && m.name === el.subModule!.name,
        ).length
      ) {
        modulos.push({
          id: el.subModule.id,
          isByRol: false,
          tipo: 2,
          code: `${el.module?.code}${el.subModule.code}`,
          name: el.subModule.name,
          module: null,
          subModule: null,
        });
      }
    }
  });

  response.push(...modulos);

  const permisos = response.map((permiso) => permisoResponseToEntity(permiso));

  allPermisos.push(...permisos);

  const result = orderBy(allPermisos, 'codigo', 'asc');

  return result;
};

export const permisoResponseToEntity = (permiso: PermisoResponse) => {
  const newPermiso = new Permiso(
    permiso.id,
    tipoPermisoLevelFactory(permiso.tipo),
    permiso.code,
    permiso.name,
  );

  newPermiso.modulo = permiso.module?.name || '';
  newPermiso.submodulo = permiso.subModule?.name || '';
  newPermiso.isByRol = permiso.isByRol;

  return newPermiso;
};

export const dependenciaResponseToEntity = (permiso: DependenciaResponse) => {
  const newPermiso = new Permiso(
    permiso.id,
    tipoPermisoLevelFactory(3),
    permiso.codigo,
    permiso.nombre,
  );

  if (permiso.rol) newPermiso.setRolDependiente(permiso.rol.code);

  newPermiso.modulo = '';
  newPermiso.submodulo = '';
  newPermiso.isByRol = false;

  return newPermiso;
};
