import { Injectable } from '@angular/core';
import { LoginRes } from '@modules/auth/application/responses';
import { LoginUserPayload } from '@modules/auth/application/payloads';
import { AuthenticateService } from '@modules/auth/application/services';
import { Either } from '@kato-lee/utilities';

type Result = Either<string, LoginRes>;

@Injectable()
export class AuthenticateController {
  constructor(private _authenticate: AuthenticateService) {}

  public async loginUser(payload: LoginUserPayload, fromMobile = false): Promise<Result> {
    try {
      const result = await this._authenticate.loginUser(payload, fromMobile);
      return Either.right(result);
    } catch (error) {
      return Either.left(error);
    }
  }
}
