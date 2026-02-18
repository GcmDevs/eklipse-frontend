import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  AfterViewInit,
  ElementRef,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { clearLocalStorage, STORAGE_KEYS } from '@common/services';
import { AdminLayoutConfig, CtmSnavItems, CustomLayoutComponent } from '@kato-lee/admin-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GcmContextType } from '@kato-lee/utilities/types';
import { ADMIN_AUTHORITY } from '@auths/principal';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TakModal } from '@kato-lee/components/modal';
import { LOCAL_URLS } from '@common/constants';
import { SessionStore } from '@stores/session';
import { CentrosStore } from '@stores/centros';
import { SIDE_NAV } from './admin.snav';

function getNombreFormateado(w: string) {
  const splt = w.split(' ');
  const fw = splt[0];
  splt[0] = fw.length <= 2 ? fw.toLowerCase() : fw[0].toUpperCase() + fw.slice(1).toLowerCase();
  const wFt = splt.reduce(
    (a, b) =>
      a + ` ${b.length <= 2 ? b.toLowerCase() : b[0].toUpperCase() + b.slice(1).toLowerCase()}`,
  );
  return wFt;
}

@Component({
  standalone: true,
  imports: [
    CustomLayoutComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
  ],
  selector: 'gcm-admin-layout',
  template: `
    @if (resourcesLoaded()) {
      <app-admin-layout [config]="config" (onLogout)="clickOnLogout()">
        <section tak-custom-header>
          <div class="d-flex space-between">
            <div></div>
            <div></div>
            <div style="margin-right: 10px;">
              <button mat-icon-button [matMenuTriggerFor]="menu" style="color: white">
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="clickOnLogout()">
                  <mat-icon>logout</mat-icon>
                  <span>Cerrar sesión</span>
                </button>
              </mat-menu>
            </div>
          </div>
        </section>
        <router-outlet />
      </app-admin-layout>
    }
  `,
  styles: [
    `
      .gcm-admin-layout {
        .d-flex {
          display: flex;
          align-items: center;
          &.space-between {
            justify-content: space-between;
          }
        }
      }
      .iframe-local-cb {
        border: none;
      }
      @media only screen and (max-width: 640px) {
        .iframe-local-cb {
          height: calc(100vh - 133px);
        }
      }
      @media only screen and (min-width: 641px) {
        .iframe-local-cb {
          height: calc(100vh - 70px);
        }
      }
      .padding-0px {
        padding: 0px !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayoutComponent implements AfterViewInit, OnInit, OnDestroy {
  public config: AdminLayoutConfig = {
    showHeader: true,
    showSidebarDarkModeBtn: false,
    appIcon: 'assets/images/layouts/sidebar-branding.png',
    userImage: 'assets/images/layouts/generic-user-profile.jpg',
    userName: 'NO DEFINIDO',
    appTitle: 'Eklipse GCM',
    appSidebarTitle: 'Grupo Clínica Médicos',
    appSidebarSubtitle: 'Alta complejidad / Medicos Centro',
    disableHiddenCollections: false,
    navigation: SIDE_NAV,
    authorities: [],
    context: undefined,
    adminAuthority: undefined,
    isDinamicSidebar: true,
    sidebarDebounceTime: 1,
    hasFooter: false,
    accordionInCollections: true,
    includeBreadcrumbs: false,
  };

  public context: GcmContextType = undefined!;

  public userFullNameSliced = 'BIENVENIDO';
  public userFullName = 'BIENVENIDO';

  public resourcesLoaded = signal(false);

  constructor(
    href: ElementRef<HTMLElement>,
    private _router: Router,
    private _modal: TakModal,
    private _session: SessionStore,
    private _centros: CentrosStore,
  ) {
    href.nativeElement.classList.add('gcm-admin-layout');
  }

  ngAfterViewInit(): void {
    const interval = setInterval(() => {
      const takHeader = document.getElementsByTagName('tak-header')[0];
      const takOutlet = document.getElementsByClassName('tak__outlet')[0];
      if (takHeader && takOutlet) {
        takHeader.classList.add('disappear-header-on-power-bi');
        takOutlet.classList.add('remove-padding-on-power-bi');
        clearInterval(interval);
      }
    }, 1);
  }

  public ngOnInit(): void {
    this._loadInitialResources();
    clearLocalStorage([STORAGE_KEYS.authToken]);
  }

  public clickOnLogout(): void {
    this._modal
      .confirm('¿Deseas cerrar tu sesión actual?', '¿Cerrar sesión?', {
        deniedButton: 'Cancelar',
        confirmButton: 'Cerrar sesión',
      })
      .subscribe((success) => {
        if (success) {
          clearLocalStorage();
          this._session.clear();
          this._centros.clear();
          this._router.navigate([LOCAL_URLS.login]);
          setTimeout(() => {
            location.reload();
          }, 300);
        }
      });
  }

  private async _loadInitialResources(): Promise<void> {
    await this._session.autoInstance();
    await this._centros.autoInstance();

    const subscription = this._session.observable().subscribe((session) => {
      if (session.wasLoaded) {
        const _fullName = session.user.fullName;
        this.userFullName = _fullName;
        this.userFullNameSliced =
          _fullName.length > 20 ? `${_fullName.slice(0, 20)}...` : _fullName;
        this.config.userName = getNombreFormateado(_fullName);
        this.context = session.context;
        this.config.context = session.context as any;
        this.config.adminAuthority = ADMIN_AUTHORITY;
        this.config.appSidebarSubtitle = session.context.getForHumans();
        this.config.authorities = session.authorities;

        this.config.navigation.map((c: CtmSnavItems) => {
          if (c.showCollectionContent === undefined) {
            if (this.config.disableHiddenCollections) c.showCollectionContent = true;
            else c.showCollectionContent = false;
          }

          if (c.authorities && !c.notAddAdminAuthority) {
            c.authorities.unshift(ADMIN_AUTHORITY);
          }
          if (c.objects) {
            c.objects.map((d) => {
              if (d.authorities && !c.notAddAdminAuthority) {
                d.authorities.unshift(ADMIN_AUTHORITY);
              }
              if (d.dropdownLinks) {
                d.dropdownLinks.map((e) => {
                  if (e.authorities && !c.notAddAdminAuthority) {
                    e.authorities.unshift(ADMIN_AUTHORITY);
                  }
                });
              }
            });
          }

          if (['dropdown', 'collection'].indexOf(c.type) >= 0) {
            const dropdowns = c.type === 'dropdown' ? [c] : c.objects;

            let avalaibleModules = 0;

            dropdowns?.map((dr) => {
              if (dr.dropdownLinks) {
                let avalaibleModulesDropdown = 0;
                dr.dropdownLinks.forEach((dl) => {
                  if (dl.authorities) {
                    this.config.authorities.forEach((au) => {
                      if (dl.authorities!.includes(au)) {
                        if (
                          !dl.disableOnContexts?.includes(this.context) &&
                          !dl.forceDisabledContent
                        ) {
                          avalaibleModules++;
                          avalaibleModulesDropdown++;
                        }
                      }
                    });
                  } else {
                    if (!dl.disableOnContexts?.includes(this.context) && !dl.forceDisabledContent) {
                      avalaibleModules++;
                      avalaibleModulesDropdown++;
                    }
                  }
                });
                if (!avalaibleModulesDropdown) dr.forceDisabledContent = true;
                else dr.forceDisabledContent = false;
              } else {
                if (dr.authorities) {
                  this.config.authorities.forEach((au) => {
                    if (dr.authorities!.includes(au)) {
                      if (
                        !dr.disableOnContexts?.includes(this.context) &&
                        !dr.forceDisabledContent
                      ) {
                        avalaibleModules++;
                      }
                    }
                  });
                } else {
                  if (!dr.disableOnContexts?.includes(this.context) && !dr.forceDisabledContent) {
                    avalaibleModules++;
                  }
                }
              }

              if (!avalaibleModules) c.forceDisabledContent = true;
              else c.forceDisabledContent = false;
            });
          }
        });

        this.resourcesLoaded.set(true);
      }
    });

    subscription.unsubscribe();
  }

  public ngOnDestroy(): void {
    //document.getElementsByTagName('html')[0].classList.remove(this._darkThemeClassName);
  }
}
