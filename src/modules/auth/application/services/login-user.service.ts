import { LoginUserI } from '../interfaces';
import { LoginUserPayload } from '../payloads';

export abstract class LoginUserService {
  abstract execute(payload: LoginUserPayload, fromMobile: boolean): Promise<LoginUserI>;
}
