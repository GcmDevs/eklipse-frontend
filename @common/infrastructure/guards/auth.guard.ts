import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { redirectByTablePath, STORAGE_KEYS, TablePathAuthType } from '@common/application/services';
import { CentrosStore } from '@stores/centros';
import { SessionStore } from '@stores/session';

export const AuthGuard = () => {
  const router = inject(Router);
  const sessionStore = inject(SessionStore);
  const centrosStore = inject(CentrosStore);

  let tablePath: TablePathAuthType = 'GENUSUARIO';

  const obs = sessionStore.observable().subscribe((session) => {
    if (session.wasLoaded) tablePath = session.token.tablePath;
  });
  obs.unsubscribe();

  if (localStorage.getItem(STORAGE_KEYS.authToken) === null) {
    sessionStore.clear();
    centrosStore.clear();
    redirectByTablePath(tablePath, router);
    return false;
  }

  return true;
};
