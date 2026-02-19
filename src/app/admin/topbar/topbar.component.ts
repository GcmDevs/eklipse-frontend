import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DashboardConfig } from '@aside/config';
import { LOCAL_URLS } from '@common/constants';
import { clearLocalStorage } from '@common/services';
import { env } from '@env/environment';
import { TakModal } from '@kato-lee/components/modal';
import {
  LucideAngularModule,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  ChevronRight,
  LayoutGrid,
  LogOutIcon,
  Activity,
} from 'lucide-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnInit, OnDestroy {
  @Input({ required: true }) config!: DashboardConfig;

  module = signal('Modulo');
  subModule = signal('SubModulo');
  route = signal('Ruta');

  showHeaderForRoutes = signal(false);

  @Output() menuClicked = new EventEmitter<void>();

  readonly icons = {
    Search,
    Bell,
    Settings,
    LogOut,
    Menu,
    ChevronRight,
    LayoutGrid,
    LogOutIcon,
    Activity,
  };

  readonly home = `${env.localHost}/#/${LOCAL_URLS.home}`;

  menuOpen = signal(false);

  private _routerSubs!: Subscription;

  constructor(
    private _router: Router,
    private _modal: TakModal,
    private _activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._execute();

    this._routerSubs = this._router.events.subscribe(() => {
      this._execute();
    });
  }

  private _execute() {
    if (location.href === this.home) {
      this.showHeaderForRoutes.set(false);
    } else {
      this.showHeaderForRoutes.set(true);
    }
    if (this.showHeaderForRoutes()) {
      try {
        let count = 0;
        let current = this._activeRoute;

        while (current.firstChild) {
          current = current.firstChild;
        }

        if (!count) {
          const splitted = (current.snapshot.data['title'] as string).split('|');
          if (splitted[0]) this.module.set(splitted[0]);
          if (splitted[1]) this.subModule.set(splitted[1]);
          if (splitted[2]) this.route.set(splitted[2]);
          count++;
        }
      } catch (error) {}
    }
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

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  ngOnDestroy(): void {
    if (this._routerSubs) this._routerSubs.unsubscribe();
  }

  get homeHref() {
    return LOCAL_URLS.home;
  }
}
