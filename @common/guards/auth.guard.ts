import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { STORAGE_KEYS } from '@common/services';
import { LOCAL_URLS } from '@common/constants';
import { CentrosStore } from '@stores/centros';
import { SessionStore } from '@stores/session';

export const AuthGuard = () => {
  const router = inject(Router);
  const sessionStore = inject(SessionStore);
  const centrosStore = inject(CentrosStore);

  if (localStorage.getItem(STORAGE_KEYS.authToken) === null) {
    sessionStore.clear();
    centrosStore.clear();
    router.navigate([LOCAL_URLS.login]);
    return false;
  }

  return true;
};
