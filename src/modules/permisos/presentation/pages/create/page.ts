import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TakAutocompleteFieldComponent,
  TakGeneralFieldComponent,
  TakRemoteAutocompleteFieldComponent,
} from '@kato-lee/components/fields';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { TakToast } from '@kato-lee/components/toast';
import { TakModal } from '@kato-lee/components/modal';
import { SEG_END_POINTS } from '@end-points/seguridad';
import { CreateAuthoritiesServices } from './service';

@Component({
  selector: 'app-create-authorities-page',
  imports: [
    FormsModule,
    TakGeneralFieldComponent,
    TakAutocompleteFieldComponent,
    TakRemoteAutocompleteFieldComponent,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [CreateAuthoritiesServices],
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page {
  public module: any = { name: '' };
  public subModule: any = { name: '', module: null };
  public authority: any = { name: '', module: null, subModule: null };

  public remoteUrlModules = SEG_END_POINTS.MODULOS;

  constructor(
    href: ElementRef<HTMLElement>,
    private _createAuthoritiesServices: CreateAuthoritiesServices,
    private _cd: ChangeDetectorRef,
    private _toast: TakToast,
    private _modal: TakModal,
  ) {
    href.nativeElement.classList.add('app-create-authorities');
  }

  async clicOnCreateModule() {
    this._modal
      .confirm('Seguro desea registrar este modulo', 'Segur@?')
      .subscribe(async (success) => {
        if (success) {
          try {
            await this._createAuthoritiesServices.createModule(this.module.name);
            this._toast.success('Modulo registrado correctamente');
            this.module.name = '';
            this._cd.markForCheck();
          } catch (error: any) {
            this._toast.danger(error.error.message);
          }
        }
      });
  }

  async clicOnCreateSubModule() {
    this._modal
      .confirm('Seguro desea registrar este submodulo', 'Segur@?')
      .subscribe(async (success) => {
        if (success) {
          try {
            await this._createAuthoritiesServices.createSubModule(
              this.subModule.name,
              (this.subModule.module as any).id,
            );
            this._toast.success('Submodulo registrado correctamente');
            this.subModule.name = '';
            this._cd.markForCheck();
          } catch (error: any) {
            this._toast.danger(error.error.message);
          }
        }
      });
  }

  async clicOnCreateAuthority() {
    this._modal
      .confirm('Seguro desea registrar este permiso', 'Segur@?')
      .subscribe(async (success) => {
        if (success) {
          try {
            await this._createAuthoritiesServices.createAuthority(
              this.authority.name,
              this.authority.module ? (this.authority.module as any).id : undefined,
              this.authority.subModule ? (this.authority.subModule as any).id : undefined,
            );
            this._toast.success('Permiso registrado correctamente');
            this.authority.nombre = '';
            this._cd.markForCheck();
          } catch (error: any) {
            this._toast.danger(error.error.message);
          }
        }
      });
  }
}
