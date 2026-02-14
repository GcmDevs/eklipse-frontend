export class Usuario {
  constructor(
    private _id: string,
    private _cedula: string,
    private _nombreCompleto: string,
    private _rol: Rol,
  ) {}

  get id() {
    return this._id;
  }

  get cedula() {
    return this._cedula;
  }

  get nombreCompleto() {
    return this._nombreCompleto;
  }

  get rol() {
    return this._rol;
  }
}

export class Rol {
  constructor(
    private _id: string,
    private _nombre: string,
  ) {}

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre;
  }
}
