import { GcmContextCode } from '@kato-lee/utilities/types';

export interface LoginUserPayload {
  context: GcmContextCode;
  username: string;
  password: string;
}
