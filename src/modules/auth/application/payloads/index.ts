import { GcmContextCode } from '@common/types';

export interface LoginUserPayload {
  context: GcmContextCode;
  username: string;
  password: string;
}
