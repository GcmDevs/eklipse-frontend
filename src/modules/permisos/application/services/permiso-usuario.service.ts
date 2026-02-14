import { Permiso, Usuario } from '@modules/permisos/domain/entities';

export abstract class PermisoUsuarioService {
  abstract addPermiso(permiso: Permiso, usuario: Usuario): Promise<boolean>;
  abstract removePermiso(permiso: Permiso, usuario: Usuario): Promise<boolean>;
}
