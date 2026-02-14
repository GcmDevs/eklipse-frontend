import { Permiso, Rol, tipoPermisoLevelFactory } from '@modules/permisos/domain/entities';
import { RolRes } from '../data-transfers';

export const dataToRol = (data: RolRes[]) => {
  const roles: Rol[] = [];

  data.map((el) => {
    const permisos: Permiso[] = [];

    el.authorities.map((permiso) => {
      const newPermiso = new Permiso(
        permiso.id,
        tipoPermisoLevelFactory(3),
        permiso.code,
        permiso.name,
      );

      permisos.push(newPermiso);
    });

    const rol = new Rol(el.id, el.name, permisos);

    roles.push(rol);
  });

  return roles;
};
