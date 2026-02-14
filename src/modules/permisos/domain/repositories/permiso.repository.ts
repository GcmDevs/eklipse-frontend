import { Observable } from 'rxjs';
import { Permiso } from '../entities';
import { DataStored } from '@common/domain/models';

export abstract class PermisoRepository {
  abstract fetch(refresh: boolean): Promise<Permiso[]>;
  abstract observable(): Observable<DataStored<Permiso>>;
}
