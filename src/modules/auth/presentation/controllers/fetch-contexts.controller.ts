import { Injectable } from '@angular/core';
import { FetchContextsImpl } from '@modules/auth/infrastructure/services';
import { GcmContextType } from '@common/types';
import { Either } from '@kato-lee/utilities';

type Result = Either<string, GcmContextType[]>;

@Injectable()
export class FetchContextsController {
  constructor(private _loginUser: FetchContextsImpl) {}

  public async execute(): Promise<Result> {
    try {
      const result = await this._loginUser.execute();
      return Either.right(result);
    } catch (error) {
      return Either.left(error);
    }
  }
}
