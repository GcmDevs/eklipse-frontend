import { GcmContextCode } from '@common/domain/types';

export interface LoginUserPayload {
  context: GcmContextCode;
  username: string;
  password: string;
}
