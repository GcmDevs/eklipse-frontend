import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, retry, throwError, timeout } from 'rxjs';
import { FetchContextsService } from '@modules/auth/application/services';
import { GCM_CONTEXTS, GcmContextCode, GcmContextType } from '@common/domain/types';
import { environment } from '@environments/environment';
import { SEG_END_POINTS } from '@end-points/seguridad';

interface GcmContextI {
  code: GcmContextCode;
  forHumans: string;
}

@Injectable()
export class FetchContextsImpl implements FetchContextsService {
  constructor(private _http: HttpClient) {}

  public execute(): Promise<GcmContextType[]> {
    return firstValueFrom(
      this._http.get<GcmContextI[]>(`${SEG_END_POINTS.AUTH}/contexts`).pipe(
        timeout({
          each: 5000,
          with: () => throwError(() => {}),
        }),
        retry(3),
        map((res) => {
          return res
            .filter((el) => el.code !== GCM_CONTEXTS.DEVELOPMENT.getCode())
            .map((el) => {
              return new GcmContextType(el.code, el.forHumans);
            });
        }),
      ),
    );
  }
}
