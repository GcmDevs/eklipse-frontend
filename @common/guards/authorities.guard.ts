import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { env } from '../../@environments/environment';
import { SessionStore } from '../../@stores/session';
import { LOCAL_URLS } from '../constants';

const _validateAuthorities = (
  authorities: string[] | undefined,
  myAuthorities: string[],
): boolean => {
  if (authorities) {
    let canActivate = false;

    authorities.map((authority) => {
      if (myAuthorities.indexOf(authority) >= 0) canActivate = true;
    });

    return canActivate;
  } else {
    return true;
  }
};

let isNotFirstCharge = false;

export const AuthoritiesGuard = (route: ActivatedRouteSnapshot) => {
  const showUnsafe = route.data!['showUnsafe'];

  if (showUnsafe) return true;

  if (location.href === `${env.serveHost}/#/${LOCAL_URLS.home}` || isNotFirstCharge) {
    isNotFirstCharge = true;
    const router = inject(Router);
    const sessionStore = inject(SessionStore);
    const myAuthorities: string[] = [];

    if (env.production) {
      const fetchAuthorities = sessionStore.observable().subscribe((session) => {
        if (session.wasLoaded) myAuthorities.push(...session.authorities);
      });
      fetchAuthorities.unsubscribe();
    } else {
      myAuthorities.push('admin');
    }

    const requiredAuthorities = route.data!['authorities']
      ? ['admin', ...route.data['authorities']]
      : undefined;

    const canActivate = _validateAuthorities(requiredAuthorities, myAuthorities);

    if (!canActivate) router.navigate([LOCAL_URLS.home]);
    return canActivate;
  } else {
    setTimeout(() => {
      isNotFirstCharge = true;
    });
    return true;
  }
};
