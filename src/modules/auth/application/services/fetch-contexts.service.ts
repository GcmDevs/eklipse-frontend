import { GcmContextType } from '@common/types';

export abstract class FetchContextsService {
  abstract execute(): Promise<GcmContextType[]>;
}
