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
import { APP_INFO, LOCAL_URLS } from '@common/application/constants';
import { STORAGE_KEYS } from '@common/application/services';
import { GcmContextType } from '@common/domain/types';
import { SessionStore } from '@stores/session';
import { CentrosStore } from '@stores/centros';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TakGeneralFieldComponent, TakSelectFieldComponent } from '@kato-lee/components/fields';
import { MatButtonModule } from '@angular/material/button';
import { TakToast } from '@kato-lee/components/toast';
import { FetchContextsService, LoginUserService } from '@modules/auth/application/services';
import { FetchContextsImpl, LoginUserImpl } from '@modules/auth/infrastructure/services';
import { AuthenticateUserController, FetchContextsController } from '../../controllers';
import { LoginForm } from './form';

@Component({
  standalone: true,
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
    AuthenticateUserController,
    FetchContextsImpl,
    { provide: FetchContextsService, useClass: FetchContextsImpl },
    { provide: LoginUserService, useClass: LoginUserImpl },
  ],
  selector: 'app-login-page--web',
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
    private _auth: AuthenticateUserController,
    private _session: SessionStore,
    private _centros: CentrosStore,
    private _toast: TakToast,
    private _router: Router,
    private _title: Title,
  ) {
    href.nativeElement.classList.add('app-login-page--web');
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

      const result = await this._auth.execute(this.loginForm.model);

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
