import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable } from 'rxjs';
import { UsuarioRepository } from '@modules/permisos/domain/repositories';
import { Permiso, Usuario } from '@modules/permisos/domain/entities';
import { SEG_END_POINTS } from '@end-points/seguridad';
import { permisoResponseToEntity } from '../factories';
import { usuariosObs$, usuariosSubj } from './_stores';
import { PermisoResponse } from '../data-transfers';
import { DataStored } from '@common/domain/models';
import { UsuariosStore } from '@stores/usuarios';

@Injectable()
export class UsuarioProxyRepository implements UsuarioRepository {
  constructor(
    private _http: HttpClient,
    private _store: UsuariosStore,
  ) {}

  async fetch(refresh: boolean): Promise<Usuario[]> {
    if (usuariosSubj.value.lastUpdate && !refresh) return usuariosSubj.value.data;

    await this._store.autoInstance(refresh);

    let data: Usuario[] = [];

    const subs = this._store.observable().subscribe((usuarios) => {
      usuarios.data.forEach((el) => {
        const newUsuario = new Usuario(el.id, el.nombreCompleto, el.cedula, {
          id: el.rol.id,
          name: el.rol.nombre,
        });
        data.push(newUsuario);
      });
    });
    subs.unsubscribe();

    usuariosSubj.next(new DataStored(data, new Date()));

    return data;
  }

  fetchAuthorities(id: string): Promise<Permiso[]> {
    return firstValueFrom(
      this._http
        .get<PermisoResponse[]>(`${SEG_END_POINTS.PERMISOS}/by-user/${id}`)
        .pipe(map((response) => response.map((res) => permisoResponseToEntity(res)))),
    );
  }

  observable(): Observable<DataStored<Usuario>> {
    return usuariosObs$;
  }
}
