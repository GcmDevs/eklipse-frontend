import { GcmContextCode, gcmContextTypeFactory } from '@common/domain/types';
import { TokenDecoded, UserDataFromToken } from '@common/domain/models';
import { jwtDecode } from 'jwt-decode';
import { LOCAL_URLS } from '../constants/config';
import { Router } from '@angular/router';

export type TablePathAuthType = 'GENUSUARIO' | 'EKINNOFERPROVEEDOR';

export const STORAGE_KEYS = {
  authToken: 'ekl-token',
  isDarkTheme: 'ekl-dk-th',
  sidebarIsCompact: 'tak-sidebar-is-compact',
  forceWebVersion: 'fc-web-vs',
  forceMobileVersion: 'fc-mob-vs',
  validacionData: 'gcm-validacion-data',
  conteoInventario: 'conteo-inventario',
};

export const PROTECTED_STORAGE_KEYS = [
  STORAGE_KEYS.isDarkTheme,
  STORAGE_KEYS.sidebarIsCompact,
  STORAGE_KEYS.forceWebVersion,
  STORAGE_KEYS.forceMobileVersion,
  STORAGE_KEYS.validacionData,
  STORAGE_KEYS.conteoInventario,
];

interface AuthTokenI {
  jti: string;
  sub: GcmContextCode;
  dcm: string;
  fnm: string;
  tbl: TablePathAuthType;
  iat: number;
  exp: number;
}

const tokenDateToDate = (date: number): Date => {
  const _ = new Date(0);
  return new Date(_.setUTCSeconds(date));
};

export const decodeToken = (
  token: string = localStorage.getItem(STORAGE_KEYS.authToken)!,
): TokenDecoded => {
  try {
    const tokDecoded: AuthTokenI = jwtDecode(token);

    return new TokenDecoded(
      tokDecoded.tbl,
      new UserDataFromToken(tokDecoded.jti, tokDecoded.dcm, tokDecoded.fnm),
      gcmContextTypeFactory(tokDecoded.sub),
      tokenDateToDate(tokDecoded.iat),
      tokenDateToDate(tokDecoded.exp),
    );
  } catch (error) {
    throw new Error('Token not found or invalid');
  }
};

export const clearLocalStorage = (except: string[] = []) => {
  const toDelete: string[] = [];

  for (let i = 0, length = localStorage.length; i < length; i++) {
    const storageKey = localStorage.key(i) || '';

    if ([...PROTECTED_STORAGE_KEYS, ...except].indexOf(storageKey) < 0) toDelete.push(storageKey);
  }

  toDelete.forEach((td) => {
    localStorage.removeItem(td);
  });
};

export const redirectByTablePath = (tablePath: TablePathAuthType, router: Router) => {
  if (tablePath === 'GENUSUARIO') router.navigate([LOCAL_URLS.login]);
  else router.navigate([LOCAL_URLS.loginTerceros]);
};
