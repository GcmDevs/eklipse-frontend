import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable, tap } from 'rxjs';
import { RolRepository } from '@modules/permisos/domain/repositories';
import { SEG_END_POINTS } from '@end-points/seguridad';
import { Rol } from '@modules/permisos/domain/entities';
import { dataToRol } from '../factories/rol.factory';
import { DataStored } from '@common/domain/models';
import { rolesObs$, rolesSubj } from './_stores';
import { RolRes } from '../data-transfers';

@Injectable()
export class RolProxyRepository implements RolRepository {
  constructor(private _http: HttpClient) {}

  public async fetch(refresh = false): Promise<Rol[]> {
    if (rolesSubj.value.lastUpdate && !refresh) return rolesSubj.value.data;

    return firstValueFrom(
      this._http
        .get<RolRes[]>(`${SEG_END_POINTS.RECURSOS}/roles`, {
          params: { addComplements: true },
        })
        .pipe(
          map((response) => dataToRol(response)),
          tap((data) => {
            rolesSubj.next(new DataStored(data, new Date()));
          }),
        ),
    );
  }

  public observable(): Observable<DataStored<Rol>> {
    return rolesObs$;
  }
}
