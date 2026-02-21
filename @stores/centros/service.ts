import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { GcmContextCode, gcmContextTypeFactory } from '@kato-lee/utilities/types';
import { centrosInitialState, centrosState, setCentros } from './store';
import { SEG_END_POINTS } from '../../@end-points/seguridad';
import { STORAGE_KEYS } from '../../@common/services';
import { Centro } from './entity';

interface CentroI {
  id: number;
  code: string;
  name: string;
  context: GcmContextCode;
  originalId: number;
}

@Injectable({ providedIn: 'root' })
export class CentrosStore {
  constructor(
    private store: Store<Centro>,
    private _http: HttpClient,
  ) {}

  public dispatch(centros: Centro[]): void {
    localStorage.setItem(STORAGE_KEYS.centros, JSON.stringify(centros));
    this.store.dispatch(setCentros({ data: centros }));
  }

  public clear(): void {
    this.store.dispatch(setCentros({ data: centrosInitialState }));
  }

  public observable(): Observable<Centro[]> {
    return this.store.select(centrosState as any);
  }

  public async autoInstance(): Promise<void> {
    let wasLoaded = true;

    const subs = this.observable().subscribe((centro) => {
      if (!centro.length) wasLoaded = false;
    });
    subs.unsubscribe();

    if (!wasLoaded) {
      try {
        const centros = await this._fetchCentros();
        this.dispatch(centros);
      } catch (error) {
        console.warn('No se obtuvieron los centros correctamente');
      }
    }
  }

  private _fetchCentros(): Promise<Centro[]> {
    return firstValueFrom(
      this._http.get<CentroI[]>(`${SEG_END_POINTS.RECURSOS}/centers`).pipe(
        map((res) => {
          return res.map((el) => {
            return new Centro(
              el.originalId,
              el.code,
              el.name,
              gcmContextTypeFactory(el.context),
              el.id,
            );
          });
        }),
      ),
    );
  }
}
