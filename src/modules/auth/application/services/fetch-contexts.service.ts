import { GcmContextType } from '@common/domain/types';

export abstract class FetchContextsService {
  abstract execute(): Promise<GcmContextType[]>;
}
