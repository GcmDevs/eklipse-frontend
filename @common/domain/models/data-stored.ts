export class DataStored<T> {
  constructor(
    private _data: T[],
    private _lastUpdate: Date | null,
  ) {}

  get data(): T[] {
    return this._data;
  }

  get lastUpdate(): Date | null {
    return this._lastUpdate;
  }

  set data(data: T[]) {
    this._data = data;
  }

  set lastUpdate(lastUpdate: Date | null) {
    this._lastUpdate = lastUpdate;
  }
}

export class ItemStored<T> {
  constructor(
    private _data: T,
    private _lastUpdate: Date | null,
  ) {}

  get data(): T {
    return this._data;
  }

  get lastUpdate(): Date | null {
    return this._lastUpdate;
  }

  set data(data: T) {
    this._data = data;
  }

  set lastUpdate(lastUpdate: Date | null) {
    this.lastUpdate = lastUpdate;
  }
}
