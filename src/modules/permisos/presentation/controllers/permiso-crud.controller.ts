import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataStored } from '@kato-lee/utilities/models';
import { PermisoRepository } from '@modules/permisos/domain/repositories';
import { Permiso } from '@modules/permisos/domain/entities';
import { Either } from '@kato-lee/utilities';

type Result = Either<string, Permiso[]>;

@Injectable()
export class PermisoCrudController {
  constructor(private _usuarios: PermisoRepository) {}

  public async fetch(refresh = false): Promise<Result> {
    try {
      const permisos = await this._usuarios.fetch(refresh);
      return Either.right(permisos);
    } catch (error) {
      return Either.left(error);
    }
  }

  public observable(): Observable<DataStored<Permiso>> {
    return this._usuarios.observable();
  }
}
