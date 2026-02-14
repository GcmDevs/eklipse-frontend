import { GcmContextType } from '@common/domain/types';

export class Centro {
  constructor(
    private _id: number,
    private _codigo: string,
    private _nombre: string,
    private _contexto: GcmContextType,
    private _ekId: number,
  ) {}

  get id(): number {
    return this._id;
  }

  get codigo(): string {
    return this._codigo;
  }

  get nombre(): string {
    return this._nombre;
  }

  get contexto(): GcmContextType {
    return this._contexto;
  }

  get ekId(): number {
    return this._ekId;
  }
}

export const ALL_CENTROS = new Centro(99, 'ALLCENTROS', 'TODOS', null!, 99);
