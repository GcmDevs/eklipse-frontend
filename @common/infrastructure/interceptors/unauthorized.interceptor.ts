import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {
  clearLocalStorage,
  redirectByTablePath,
  TablePathAuthType,
} from '@common/application/services';
import { LOCAL_URLS } from '@common/application/constants';
import { SessionStore } from '@stores/session';
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const router = inject(Router);
    const sessionStore = inject(SessionStore);

    let tablePath: TablePathAuthType = 'GENUSUARIO';

    const obs = sessionStore.observable().subscribe((session) => {
      if (session.wasLoaded) tablePath = session.token.tablePath;
    });
    obs.unsubscribe();

    return next.handle(req).pipe(
      catchError((err) => {
        if ([401].indexOf(err.status) !== -1) {
          if (!location.href.includes(LOCAL_URLS.login)) {
            clearLocalStorage();
            sessionStore.clear();
            redirectByTablePath(tablePath, router);
          }
        }
        return throwError(() => err);
      }),
    );
  }
}
