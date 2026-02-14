import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario, Permiso } from '@modules/permisos/domain/entities';
import { UsuarioRepository } from '@modules/permisos/domain/repositories';
import { DataStored } from '@common/domain/models';
import { Either } from '@kato-lee/utilities';

type Result = Either<string, Usuario[]>;
type Result2 = Either<string, Permiso[]>;

@Injectable()
export class UsuarioCrudController {
  constructor(private _usuarios: UsuarioRepository) {}

  public async fetch(refresh: boolean): Promise<Result> {
    try {
      const result = await this._usuarios.fetch(refresh);
      return Either.right(result);
    } catch (error) {
      return Either.left(error);
    }
  }

  public async fetchPermisos(id: string): Promise<Result2> {
    try {
      const usuarios = await this._usuarios.fetchAuthorities(id);
      return Either.right(usuarios);
    } catch (error) {
      return Either.left(error);
    }
  }

  public observable(): Observable<DataStored<Usuario>> {
    return this._usuarios.observable();
  }
}
