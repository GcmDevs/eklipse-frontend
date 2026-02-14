import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_INFO } from '@common/application/constants';
import { STORAGE_KEYS } from '@common/application/services';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TakGeneralFieldComponent } from '@kato-lee/components/fields';
import { MatButtonModule } from '@angular/material/button';
import { TakToast } from '@kato-lee/components/toast';
import { FetchContextsService, LoginTerceroService } from '@modules/auth/application/services';
import { FetchContextsImpl, LoginTerceroImpl } from '@modules/auth/infrastructure/services';
import { AuthenticateTerceroController, FetchContextsController } from '../../controllers';
import { LoginForm } from './form';

@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatSnackBarModule,
    TakGeneralFieldComponent,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [
    FetchContextsController,
    AuthenticateTerceroController,
    FetchContextsImpl,
    { provide: FetchContextsService, useClass: FetchContextsImpl },
    { provide: LoginTerceroService, useClass: LoginTerceroImpl },
  ],
  selector: 'app-login-terceros-page--web',
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page implements OnInit, OnDestroy {
  readonly keyword = 'access-control';
  readonly app = APP_INFO;

  loginForm = new LoginForm();

  isAuthenticating = signal(false);
  showPass = signal(false);

  constructor(
    href: ElementRef<HTMLElement>,
    private _auth: AuthenticateTerceroController,
    private _toast: TakToast,
    private _title: Title,
  ) {
    href.nativeElement.classList.add('app-login-page--web');
  }

  public async ngOnInit(): Promise<void> {
    this._title.setTitle('Eklipse | Control de acceso');
    document.body.classList.add(this.keyword);
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

      if (success) location.reload();

      this.isAuthenticating.set(false);
    }
  }

  public ngOnDestroy(): void {
    document.body.classList.remove(this.keyword);
  }
}
