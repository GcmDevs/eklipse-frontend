import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { formatFullName, getDisplayFirstName, getInitials } from 'src/functions';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardConfig } from '@aside/config';
import { SessionStore } from '@stores/session';
import { CentrosStore } from '@stores/centros';
import { LOCAL_URLS } from '@common/constants';
import { clearLocalStorage } from '@common/services';
import { TakModal } from '@kato-lee/components/modal';

@Component({
  selector: 'app-dashboard',
  imports: [TopbarComponent, SidebarComponent, RouterModule],
  templateUrl: './component.html',
  styleUrl: './component.scss',
})
export class DashboardComponent implements OnInit {
  config!: DashboardConfig;

  sidebarOpen = false;

  resourcesLoaded = signal(false);

  constructor(
    private _session: SessionStore,
    private _centros: CentrosStore,
    private _modal: TakModal,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this._loadInitialResources();
  }

  clickOnLogout(): void {
    this._modal.confirm('¿Desea cerrar su sesión?', '¿Segur@?').subscribe((success) => {
      if (success) {
        clearLocalStorage();
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
        this.config = {
          enterpriseName: 'Grupo Clinica Medicos',
          roleName: 'Usuario',
          contextCode: session.context.getCode(),
          contextForHumans: session.context.getForHumans(),
          authorities: session.authorities,
          userFullName: formatFullName(session.user.fullName),
          userFirstName: getDisplayFirstName(session.user.fullName),
          userInitials: getInitials(session.user.fullName),
        };
        this.resourcesLoaded.set(true);
      }
    });
    subscription.unsubscribe();
  }

  openSidebar(): void {
    this.sidebarOpen = true;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
