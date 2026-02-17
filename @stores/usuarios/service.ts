import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { setUsuarios, usuariosState, usuariosInitialState } from './store';
import { SEG_END_POINTS } from '../../@end-points/seguridad';
import { DataStored } from '@kato-lee/utilities/models';
import { Rol, Usuario } from './entity';

interface UsuarioI {
  id: string;
  fullName: string;
  document: string;
  role: {
    id: string;
    name: string;
  };
}

@Injectable({ providedIn: 'root' })
export class UsuariosStore {
  constructor(
    private store: Store<Usuario>,
    private _http: HttpClient,
  ) {}

  public dispatch(data: Usuario[]): void {
    this.store.dispatch(setUsuarios(new DataStored<Usuario>(data, new Date())));
  }

  public clear(): void {
    this.store.dispatch(setUsuarios(usuariosInitialState));
  }

  public observable(): Observable<DataStored<Usuario>> {
    return this.store.select(usuariosState as any);
  }

  public async autoInstance(refresh = false): Promise<void> {
    let wasLoaded = true;

    if (!refresh) {
      const subs = this.observable().subscribe((el) => {
        if (!el.lastUpdate) wasLoaded = false;
      });
      subs.unsubscribe();
    } else wasLoaded = false;

    if (!wasLoaded) {
      try {
        const data = await this._fetchData();
        this.dispatch(data);
      } catch (error: any) {
        console.warn(error.message);
      }
    }
  }

  private _fetchData(): Promise<Usuario[]> {
    return firstValueFrom(
      this._http.get<UsuarioI[]>(`${SEG_END_POINTS.RECURSOS}/active-users`).pipe(
        map((res) => {
          return res.map((el) => {
            return new Usuario(el.id, el.document, el.fullName, new Rol(el.role.id, el.role.name));
          });
        }),
      ),
    );
  }
}
