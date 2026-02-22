import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { setSession, sessionState, sessionInitialState } from './store';
import { STORAGE_KEYS, UserDataFromToken } from '../../@common/services';
import { gcmContextTypeFactory } from '@common/types';
import { SEG_END_POINTS } from '../../@end-points/seguridad';
import { env } from '../../@environments/environment';
import { Session, TokCreAndExpInfo } from './entity';
import { decodeToken } from '../../@common/services';

@Injectable({ providedIn: 'root' })
export class SessionStore {
  constructor(
    private _store: Store<Session>,
    private _http: HttpClient,
  ) {}

  public dispatch(session: { token: string; authorities: string[] }): void {
    const tkDcd = decodeToken(session.token);

    const newSession = new Session(
      new TokCreAndExpInfo(tkDcd.createdAt, tkDcd.expiredAt),
      gcmContextTypeFactory(tkDcd.context.getCode()),
      new UserDataFromToken(tkDcd.user.id, tkDcd.user.document, tkDcd.user.fullName),
      session.authorities,
      true,
    );

    this._store.dispatch(setSession({ data: newSession }));
  }

  public clear(): void {
    this._store.dispatch(setSession({ data: sessionInitialState }));
  }

  public observable(): Observable<Session> {
    return this._store.select(sessionState as any);
  }

  public async autoInstance(): Promise<void> {
    let wasLoaded = true;
    const subs = this.observable().subscribe((el) => {
      if (!el.wasLoaded) wasLoaded = false;
    });
    subs.unsubscribe();

    if (!wasLoaded) {
      try {
        const token = localStorage.getItem(STORAGE_KEYS.authToken) || '';
        let authorities: string[] = [];

        if (env.production) authorities = await this._fetchMyAuthorities();
        else authorities.push('admin');

        this.dispatch({ token, authorities });
      } catch (error: any) {
        console.warn('No se obtuvieron los permisos correctamente', error.message);
      }
    }
  }

  private _fetchMyAuthorities(): Promise<string[]> {
    return firstValueFrom(
      this._http
        .get<{
          authorities: any[];
          onlyCodes: string[];
          enabledModules: string[];
        }>(`${SEG_END_POINTS.PERMISOS}/my-authorities`)
        .pipe(
          map((data) => {
            return [...data.onlyCodes, ...(data.enabledModules || [])];
          }),
        ),
    );
  }
}
