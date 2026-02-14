import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { setSession, sessionState, sessionInitialState } from './store';
import { STORAGE_KEYS } from '@common/application/services';
import { environment } from '@environments/environment';
import { SEG_END_POINTS } from '../../@end-points/seguridad';
import { Session, TokCreAndExpInfo } from './entity';
import { ADMIN_AUTHORITY } from '@authorities/principal';
import { decodeToken } from '@common/application/services';
import { gcmContextTypeFactory } from '@common/domain/types';
import { UserDataFromToken } from '@common/domain/models';

@Injectable({ providedIn: 'root' })
export class SessionStore {
  constructor(
    private store: Store<Session>,
    private _http: HttpClient,
  ) {}

  public dispatch(session: { token: string; authorities: string[] }): void {
    const tokenDecoded = decodeToken(session.token);

    const newSession = new Session(
      new TokCreAndExpInfo(tokenDecoded.tablePath, tokenDecoded.createdAt, tokenDecoded.expiredAt),
      gcmContextTypeFactory(tokenDecoded.context.getCode()),
      new UserDataFromToken(
        tokenDecoded.user.id,
        tokenDecoded.user.document,
        tokenDecoded.user.fullName,
      ),

      session.authorities,
      true,
    );

    this.store.dispatch(setSession({ data: newSession }));
  }

  public clear(): void {
    this.store.dispatch(
      setSession({
        data: sessionInitialState,
      }),
    );
  }

  public observable(): Observable<Session> {
    return this.store.select(sessionState as any);
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

        if (environment.production) authorities = await this._fetchMyAuthorities();
        else authorities.push(ADMIN_AUTHORITY);

        this.dispatch({
          token,
          authorities,
        });
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
        }>(`${SEG_END_POINTS.PERMISOS}/my-authorities`)
        .pipe(
          map((data) => {
            return data.onlyCodes;
          }),
        ),
    );
  }
}
