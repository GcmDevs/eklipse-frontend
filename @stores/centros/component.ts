import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  EventEmitter,
  Component,
  OnDestroy,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { GcmContextType } from '@common/types';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { TakSelectFieldComponent } from '@kato-lee/components/fields';
import { ALL_CENTROS, Centro, CentrosStore } from '../centros';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SessionStore } from '../session';

@Component({
  selector: 'gcm-centros-suggestions',
  imports: [
    ReactiveFormsModule,
    TakSelectFieldComponent,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  template: `
    @if (
      (suggestions.length > 1 && !showAllOption) ||
      (suggestions.length > 2 && showAllOption) ||
      showAllTime
    ) {
      @if (type === 'menu') {
        <div
          [matTooltip]="showTooltip ? 'Filtrar por centro de atención' : ''"
          [style.max-width.px]="maxWidth"
        >
          @if (type === 'menu') {
            <span>
              <button mat-icon-button [matMenuTriggerFor]="menu">
                <mat-icon>filter_list</mat-icon>
              </button>
              <mat-menu #menu="matMenu">
                @for (centro of suggestions; track $index) {
                  <a mat-menu-item (click)="onSelectItem(centro)" [title]="centro.nombre">
                    {{ centro.nombre }}
                  </a>
                }
              </mat-menu>
            </span>
          }
        </div>
      } @else {
        <div [style.max-width.px]="maxWidth">
          <tak-select-field
            [appearance]="appearance"
            [suggestions]="suggestions"
            value="id"
            option="nombre"
            [formControl]="control"
          >
            Centro de atención
          </tak-select-field>
        </div>
      }
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CentrosSuggestionsComponent implements OnInit, OnDestroy {
  @Input() type: 'select' | 'menu' | 'mobile' = 'select';
  @Input() maxWidth = 0;
  @Input() remember = false;
  @Input() keyByUser = '0';
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() showAllOption = true;
  @Input() showAllTime = false;
  @Input() showAllContexts = false;
  @Input() showTooltip = true;
  @Input() selectCentroDefault = true;
  @Input() hiddenContexts: GcmContextType[] = [];

  @Input() isDisabled = false;

  @Output() onSelect: EventEmitter<Centro> = new EventEmitter();

  private _suggestions: Centro[] = [];
  private _subscription: Subscription;
  private _keyForRemember = '';

  public control = new FormControl(this._suggestions[0]);

  constructor(
    private _centrosStore: CentrosStore,
    private _sessionStore: SessionStore,
    private _cd: ChangeDetectorRef,
  ) {
    this._subscription = this.control.valueChanges.subscribe((centro) => {
      const centroSelected = this._suggestions.filter(
        (suggestion) => suggestion.ekId === centro?.ekId,
      );
      if (centroSelected.length) this.onSelectItem(centroSelected[0]);
    });
  }

  public async ngOnInit(): Promise<void> {
    if (this.isDisabled) this.control.disable();

    if (!this.maxWidth) this.maxWidth = this.type === 'menu' ? 40 : 200;

    await this._centrosStore.autoInstance();
    await this._sessionStore.autoInstance();

    let context: GcmContextType;

    const subs1 = this._sessionStore.observable().subscribe((session) => {
      context = session.context;
    });

    const subs2 = this._centrosStore.observable().subscribe((centros) => {
      centros.forEach((centro) => {
        if (this.showAllContexts) {
          if (
            !this.hiddenContexts.filter((el) => el.getCode() === centro.contexto.getCode()).length
          ) {
            this._suggestions.push(centro);
          }
        } else if (centro.contexto === context) this._suggestions.push(centro);
      });
    });

    subs1.unsubscribe();
    subs2.unsubscribe();

    if (this.showAllOption) this._suggestions.unshift(ALL_CENTROS);

    this._generateUniqueKey();

    const centroId = localStorage.getItem(this._keyForRemember);
    if (centroId) {
      this.control.setValue(this._suggestions.filter((el) => el.ekId === +centroId)[0], {
        emitEvent: false,
      });
    } else {
      if (this.selectCentroDefault) this.control.setValue(this._suggestions[0]);
    }
    this._cd.markForCheck();
  }

  public reset(emitEvent = true): void {
    if (this.showAllOption) {
      this.control.setValue(this._suggestions.filter((el) => el === ALL_CENTROS)[0], { emitEvent });
      this._setKeyForRememberCentro(ALL_CENTROS.ekId);
    }
  }

  clean() {
    this.control.setValue(null);
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public onSelectItem(centro: Centro) {
    this.onSelect.emit(centro);
    this._setKeyForRememberCentro(centro.id);
  }

  private _generateUniqueKey() {
    const hrefSplited = location.href.split('/');
    const keyText = hrefSplited[hrefSplited.length - 1];

    this._keyForRemember = `${keyText}CentroSug${this.keyByUser}`;
  }

  get suggestions(): Centro[] {
    return this._suggestions;
  }

  private _setKeyForRememberCentro(id?: number) {
    const centroId = id || this.control.value!.id;
    if (this.remember) localStorage.setItem(this._keyForRemember, centroId.toString());
  }
}
