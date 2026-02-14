import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserService } from '@modules/auth/application/services';
import { LoginUserPayload } from '@modules/auth/application/payloads';
import { LoginUserI } from '@modules/auth/application/interfaces';
import { SEG_END_POINTS } from '@end-points/seguridad';

const encryptData = (value: string) => {
  const words = CryptoJS.enc.Utf8.parse(value);
  const base64 = CryptoJS.enc.Base64.stringify(words);
  return base64;
};

@Injectable()
export class LoginTerceroImpl implements LoginUserService {
  constructor(private _http: HttpClient) {}

  public async execute(payload: LoginUserPayload, fromMobile: boolean): Promise<LoginUserI> {
    payload.username = encryptData(payload.username);
    payload.password = encryptData(payload.password);
    return firstValueFrom(
      this._http.post<LoginUserI>(`${SEG_END_POINTS.AUTH}/login-tercero`, payload, {
        params: { fromMobile },
      }),
    );
  }
}
