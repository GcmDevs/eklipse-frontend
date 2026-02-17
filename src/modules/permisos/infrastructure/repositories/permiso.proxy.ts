import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { permisoResponseToCollection } from '../factories';
import { firstValueFrom, map, Observable, tap } from 'rxjs';
import { PermisoRepository } from '@modules/permisos/domain/repositories';
import { Permiso } from '@modules/permisos/domain/entities';
import { DataStored } from '@kato-lee/utilities/models';
import { SEG_END_POINTS } from '@end-points/seguridad';
import { permisosObs$, permisosSubj } from './_stores';
import { PermisoResponse } from '../data-transfers';

@Injectable()
export class PermisoProxyRepository implements PermisoRepository {
  constructor(private _http: HttpClient) {}

  public async fetch(refresh = false): Promise<Permiso[]> {
    if (permisosSubj.value.lastUpdate && !refresh) return permisosSubj.value.data;

    return firstValueFrom(
      this._http.get<PermisoResponse[]>(SEG_END_POINTS.PERMISOS).pipe(
        map((response) => permisoResponseToCollection(response)),
        tap((permisos) => {
          permisosSubj.next(
            new DataStored(permisosSubj.value.data.concat(...permisos), new Date()),
          );
        }),
      ),
    );
  }

  public observable(): Observable<DataStored<Permiso>> {
    return permisosObs$;
  }
}
