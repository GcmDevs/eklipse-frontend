import { GcmContextType } from '@kato-lee/utilities/types';

export abstract class FetchContextsService {
  abstract execute(): Promise<GcmContextType[]>;
}
