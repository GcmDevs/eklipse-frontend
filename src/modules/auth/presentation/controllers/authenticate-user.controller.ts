import { Injectable } from '@angular/core';
import { LoginUserI } from '@modules/auth/application/interfaces';
import { LoginUserPayload } from '@modules/auth/application/payloads';
import { LoginUserService } from '@modules/auth/application/services';
import { Either } from '@kato-lee/utilities';

type Result = Either<string, LoginUserI>;

@Injectable()
export class AuthenticateUserController {
  constructor(private _loginUser: LoginUserService) {}

  public async execute(payload: LoginUserPayload, fromMobile = false): Promise<Result> {
    try {
      const result = await this._loginUser.execute(payload, fromMobile);
      return Either.right(result);
    } catch (error) {
      return Either.left(error);
    }
  }
}
