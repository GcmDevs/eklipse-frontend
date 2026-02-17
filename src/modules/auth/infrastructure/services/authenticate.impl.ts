import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from '@modules/auth/application/services';
import { LoginUserPayload } from '@modules/auth/application/payloads';
import { LoginRes } from '@modules/auth/application/responses';
import { SEG_END_POINTS } from '@end-points/seguridad';
import CryptoJS from 'crypto-js';

const encryptData = (value: string) => {
  const words = CryptoJS.enc.Utf8.parse(value);
  const base64 = CryptoJS.enc.Base64.stringify(words);
  return base64;
};

@Injectable()
export class AuthenticateImpl implements AuthenticateService {
  constructor(private _http: HttpClient) {}

  public async loginUser(payload: LoginUserPayload, fromMobile: boolean): Promise<LoginRes> {
    payload.username = encryptData(payload.username);
    payload.password = encryptData(payload.password);
    return firstValueFrom(
      this._http.post<LoginRes>(`${SEG_END_POINTS.AUTH}/login`, payload, {
        params: { fromMobile },
      }),
    );
  }
}
