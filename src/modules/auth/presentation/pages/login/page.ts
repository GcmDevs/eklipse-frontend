import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  WritableSignal,
  ElementRef,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_INFO, LOCAL_URLS } from '@common/constants';
import { STORAGE_KEYS } from '@common/services';
import { GcmContextType } from '@common/types';
import { SessionStore } from '@stores/session';
import { CentrosStore } from '@stores/centros';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TakGeneralFieldComponent, TakSelectFieldComponent } from '@kato-lee/components/fields';
import { MatButtonModule } from '@angular/material/button';
import { TakToast } from '@kato-lee/components/toast';
import { FetchContextsService, AuthenticateService } from '@modules/auth/application/services';
import { FetchContextsImpl, AuthenticateImpl } from '@modules/auth/infrastructure/services';
import { AuthenticateController, FetchContextsController } from '../../controllers';
import { LoginForm } from './form';

@Component({
  selector: 'app-login-page',
  imports: [
    NgOptimizedImage,
    MatSnackBarModule,
    ReactiveFormsModule,
    TakSelectFieldComponent,
    TakGeneralFieldComponent,
    MatButtonModule,
  ],
  providers: [
    FetchContextsController,
    AuthenticateController,
    FetchContextsImpl,
    { provide: FetchContextsService, useClass: FetchContextsImpl },
    { provide: AuthenticateService, useClass: AuthenticateImpl },
  ],
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page implements OnInit, OnDestroy {
  readonly keyword = 'access-control';
  readonly app = APP_INFO;

  loginForm = new LoginForm();

  centrosSuggestions: WritableSignal<GcmContextType[]> = signal([]);
  isAuthenticating = signal(false);
  showPass = signal(false);

  constructor(
    href: ElementRef<HTMLElement>,
    private _fetchContexts: FetchContextsController,
    private _authenticateCtrl: AuthenticateController,
    private _session: SessionStore,
    private _centros: CentrosStore,
    private _toast: TakToast,
    private _router: Router,
    private _title: Title,
  ) {
    href.nativeElement.classList.add('app-login-page');
  }

  public async ngOnInit(): Promise<void> {
    this._title.setTitle('Eklipse | Control de acceso');
    document.body.classList.add(this.keyword);

    const contexts = await this._fetchContexts.execute();

    contexts.fold({
      right: (contexts) => {
        this.centrosSuggestions.set(contexts);
      },
      left: (error) => {
        this._toast.danger(error);
      },
    });
  }

  public async clickOnAuthenticate() {
    if (this.loginForm.valid) {
      this.isAuthenticating.set(true);
      let success = false;

      const result = await this._authenticateCtrl.loginUser(this.loginForm.model);

      result.fold({
        right: (response) => {
          localStorage.setItem(STORAGE_KEYS.authToken, response.token!);
          success = true;
        },
        left: (error) => {
          this._toast.danger(error);
          success = false;
        },
      });

      if (success) {
        await this._session.autoInstance();
        await this._centros.autoInstance();
        this._router.navigate([LOCAL_URLS.home]);
      }

      this.isAuthenticating.set(false);
    }
  }

  public ngOnDestroy(): void {
    document.body.classList.remove(this.keyword);
  }
}
