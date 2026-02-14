import { LoginUserI } from '../interfaces';
import { LoginUserPayload } from '../payloads';

export abstract class LoginTerceroService {
  abstract execute(payload: LoginUserPayload, fromMobile: boolean): Promise<LoginUserI>;
}
