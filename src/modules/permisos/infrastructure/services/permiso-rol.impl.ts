import { firstValueFrom, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PermisoResponse } from '../data-transfers';
import { PermisoRolService } from '@modules/permisos/application/services';
import { Permiso, Rol } from '@modules/permisos/domain/entities';
import { SEG_END_POINTS } from '@end-points/seguridad';

@Injectable()
export class PermisoRolImpl implements PermisoRolService {
  constructor(private _http: HttpClient) {}

  public add(permiso: Permiso, rol: Rol): Promise<boolean> {
    return firstValueFrom(
      this._http
        .get<PermisoResponse>(
          `${SEG_END_POINTS.PERMISOS}/add-authority-to-role/${permiso.id}/${rol.id}`,
        )
        .pipe(
          map((response) => {
            if (response) return true;
            else return false;
          }),
        ),
    );
  }

  public remove(permiso: Permiso, rol: Rol): Promise<boolean> {
    return firstValueFrom(
      this._http.get<boolean>(
        `${SEG_END_POINTS.PERMISOS}/remove-authority-to-role/${permiso.id}/${rol.id}`,
      ),
    );
  }
}
