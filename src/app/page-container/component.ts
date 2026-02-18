import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LOCAL_URLS } from '@common/constants';
import {
  LucideAngularModule,
  Home,
  ChevronRight,
  ArrowLeft,
  Layers,
  LayoutGrid,
  CheckCircle2,
  ShieldCheck,
  Lock,
  UserCog,
  Users,
  Menu,
} from 'lucide-angular';
import { Subscription } from 'rxjs';
import { SidebarComponent } from '../admin/sidebar/sidebar.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, SidebarComponent],
  templateUrl: './component.html',
  styleUrl: './component.scss',
})
export class PageContainerComponent implements OnInit, OnDestroy {
  sidebarOpen = false;

  module = signal('Modulo');
  subModule = signal('SubModulo');
  route = signal('Ruta');

  private _routerSubs!: Subscription;

  readonly icons = {
    Home,
    ChevronRight,
    ArrowLeft,
    Layers,
    LayoutGrid,
    CheckCircle2,
    ShieldCheck,
    Lock,
    UserCog,
    Users,
    Menu,
  };

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._routerSubs = this._router.events.subscribe((event) => {
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
    });
  }

  openSidebar(): void {
    this.sidebarOpen = true;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  ngOnDestroy(): void {
    if (this._routerSubs) this._routerSubs.unsubscribe();
  }

  get homeHref() {
    return LOCAL_URLS.home;
  }
}
