import { Observable } from 'rxjs';
import { Permiso } from '../entities';
import { DataStored } from '@kato-lee/utilities/models';

export abstract class PermisoRepository {
  abstract fetch(refresh: boolean): Promise<Permiso[]>;
  abstract observable(): Observable<DataStored<Permiso>>;
}
