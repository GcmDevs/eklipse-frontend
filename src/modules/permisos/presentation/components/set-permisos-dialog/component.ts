import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  ElementRef,
  Component,
  OnDestroy,
  Inject,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TakGeneralFieldComponent } from '@kato-lee/components/fields';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { TakToast } from '@kato-lee/components/toast';
import { cloneDeep } from '@kato-lee/utilities';
import { PermisoRolImpl, PermisoUsuarioImpl } from '@modules/permisos/infrastructure/services';
import { PermisoRolService, PermisoUsuarioService } from '@modules/permisos/application/services';
import { PermisoRepository, RolRepository } from '@modules/permisos/domain/repositories';
import { Permiso, Rol, Usuario } from '@modules/permisos/domain/entities';
import { RolDependienteType } from '@modules/permisos/domain/types';
import {
  PermisoProxyRepository,
  RolProxyRepository,
} from '@modules/permisos/infrastructure/repositories';
import { MODULES } from '@authorities/principal';
import {
  PermisoCrudController,
  PermisoRolController,
  PermisoUsuarioController,
} from '../../controllers';

@Component({
  standalone: true,
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    TakGeneralFieldComponent,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [
    { provide: PermisoUsuarioService, useClass: PermisoUsuarioImpl },
    { provide: PermisoRepository, useClass: PermisoProxyRepository },
    { provide: PermisoRolService, useClass: PermisoRolImpl },
    { provide: RolRepository, useClass: RolProxyRepository },
    PermisoUsuarioController,
    PermisoCrudController,
    PermisoRolController,
  ],
  selector: 'app-set-permisos-dialog',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPermisosDialog implements OnInit, OnDestroy {
  public dataSource = new MatTableDataSource<Permiso>([]);

  public filter = new FormControl('');

  private _subscription: Subscription;

  constructor(
    href: ElementRef<HTMLElement>,
    public dialogRef: MatDialogRef<SetPermisosDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      data: Usuario | Rol;
      tipoEntidad: 'usuario' | 'rol';
      version: 'standard' | 'enlaces-externos' | 'gemi';
    },
    private _permisoUsuario: PermisoUsuarioController,
    private _permisoRol: PermisoRolController,
    private _permisosCrud: PermisoCrudController,
    private _toast: TakToast,
    private _cd: ChangeDetectorRef,
  ) {
    href.nativeElement.classList.add('app-set-permisos-dialog');
    this._subscription = this.filter.valueChanges.subscribe((value) => {
      this.dataSource.filter = value!.trim().toLowerCase();
    });
  }

  public async ngOnInit(): Promise<void> {
    const result = await this._permisosCrud.fetch();

    const EXT = MODULES.EXT.CODE;
    const GMN = MODULES.GMN.CODE;

    result.fold({
      right: (permisos) => {
        const _permisos = cloneDeep(
          this.data.version === 'standard'
            ? permisos.filter((p) => [EXT, GMN].indexOf(p.codigo.slice(0, 3)) < 0)
            : this.data.version === 'enlaces-externos'
              ? permisos.filter((p) => [EXT].indexOf(p.codigo.slice(0, 3)) >= 0)
              : this.data.version === 'gemi'
                ? permisos.filter((p) => [GMN].indexOf(p.codigo.slice(0, 3)) >= 0)
                : permisos,
        );

        _permisos.map((permiso) => {
          const permisoUsuario = this.data.data.permisos.filter(
            (el) => el.codigo === permiso.codigo,
          );
          if (permisoUsuario.length) {
            permiso.isByRol = permisoUsuario[0].isByRol;
            permiso.isActive = true;
            permiso.rolDependienteCode = permisoUsuario[0].rolDependienteCode;
          } else {
            permiso.isActive = false;
          }
        });

        this.dataSource = new MatTableDataSource<Permiso>(_permisos);
        this._cd.markForCheck();
      },
      left: (error) => {
        this._toast.danger(error);
      },
    });
  }

  async onTogglePermiso(permiso: Permiso, isChecked: boolean) {
    let result;

    const transaction = isChecked ? 'agregado' : 'retirado';

    if (this.data.tipoEntidad === 'usuario') {
      if (isChecked)
        result = await this._permisoUsuario.addPermiso(permiso, this.data.data as Usuario);
      else result = await this._permisoUsuario.removePermiso(permiso, this.data.data as Usuario);
    } else {
      if (isChecked) result = await this._permisoRol.add(permiso, this.data.data as Rol);
      else result = await this._permisoRol.remove(permiso, this.data.data as Rol);
    }

    result.fold({
      right: (success) => {
        if (success) {
          permiso.isActive = isChecked;
        } else {
          this._toast.danger(`El permiso no fue ${transaction} correctamente`);
        }
      },
      left: () => {
        this._toast.danger(`El permiso no fue ${transaction} correctamente`);
      },
    });
  }

  async onToggleRolDependiente(permiso: Permiso, isChecked: boolean, rol: RolDependienteType) {
    permiso.setRolDependiente(rol.getCode());
    if (isChecked) await this.onTogglePermiso(permiso, isChecked);
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public onClose(): void {
    const permisos = this.dataSource.data.filter((el) => el.isActive && el.tipo.code === 3);
    this.dialogRef.close({ data: this.data.data, permisos });
  }
}
