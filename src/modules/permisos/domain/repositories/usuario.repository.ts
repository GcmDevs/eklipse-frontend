import { Observable } from 'rxjs';
import { Usuario } from '@modules/permisos/domain/entities';
import { DataStored } from '@kato-lee/utilities/models';
import { Permiso } from '../entities';

export abstract class UsuarioRepository {
  abstract fetch(refresh: boolean): Promise<Usuario[]>;
  abstract fetchAuthorities(id: string): Promise<Permiso[]>;
  abstract observable(): Observable<DataStored<Usuario>>;
}
