import { TablePathAuthType } from '@common/application/services';
import { GcmContextType } from '../types';

export class UserDataFromToken {
  constructor(
    private _id: string,
    private _document: string,
    private _fullName: string,
  ) {}

  get id(): string {
    return this._id;
  }

  get document(): string {
    return this._document;
  }

  get fullName(): string {
    return this._fullName;
  }
}

export class TokenDecoded {
  constructor(
    private _tablePath: TablePathAuthType,
    private _user: UserDataFromToken,
    private _context: GcmContextType,
    private _createdAt: Date,
    private _expiredAt: Date,
  ) {}

  get tablePath(): TablePathAuthType {
    return this._tablePath;
  }

  get user(): UserDataFromToken {
    return this._user;
  }

  get context(): GcmContextType {
    return this._context;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get expiredAt(): Date {
    return this._expiredAt;
  }
}
