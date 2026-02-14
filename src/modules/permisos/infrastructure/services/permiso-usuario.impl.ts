import { firstValueFrom, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PermisoResponse } from '../data-transfers';
import { PermisoUsuarioService } from '@modules/permisos/application/services';
import { Permiso, Usuario } from '@modules/permisos/domain/entities';
import { SEG_END_POINTS } from '@end-points/seguridad';

@Injectable()
export class PermisoUsuarioImpl implements PermisoUsuarioService {
  constructor(private _http: HttpClient) {}

  public addPermiso(permiso: Permiso, usuario: Usuario): Promise<boolean> {
    return firstValueFrom(
      this._http
        .get<PermisoResponse>(
          `${SEG_END_POINTS.PERMISOS}/add-authority-to-user/${permiso.id}/${usuario.id}`,
        )
        .pipe(
          map((response) => {
            if (response) return true;
            else return false;
          }),
        ),
    );
  }

  public removePermiso(permiso: Permiso, usuario: Usuario): Promise<boolean> {
    return firstValueFrom(
      this._http.get<boolean>(
        `${SEG_END_POINTS.PERMISOS}/remove-authority-to-user/${permiso.id}/${usuario.id}`,
      ),
    );
  }
}
