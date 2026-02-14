import { Injectable } from '@angular/core';
import { SetPermisosDialog } from './component';
import { MatDialog } from '@angular/material/dialog';
import { Rol, Usuario } from '@modules/permisos/domain/entities';

@Injectable()
export class SetPermisosDialogService {
  constructor(private _dialog: MatDialog) {}

  public open(
    data: Usuario | Rol,
    tipoEntidad: 'usuario' | 'rol',
    version: 'standard' | 'enlaces-externos' | 'gemi',
  ) {
    return this._dialog.open(SetPermisosDialog, {
      data: { data, tipoEntidad, version },
      disableClose: true,
    });
  }
}
