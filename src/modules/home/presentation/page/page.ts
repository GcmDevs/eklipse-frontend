import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StatsRowComponent } from './stats-row/stats-row.component';
import { TasksGridComponent } from './tasks-grid/tasks-grid.component';
import { formatFullName, getDisplayFirstName, getInitials, moduleWasDisabled } from 'src/functions';
import { SessionStore } from '@stores/session';
import { DashboardConfig, NAVIGATION_CONFIG } from '@aside/config';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule, MatIconModule, StatsRowComponent, TasksGridComponent],
  templateUrl: './page.html',
  styleUrl: './page.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  config!: DashboardConfig;
  navigation = NAVIGATION_CONFIG;

  resourcesLoaded = signal(false);

  constructor(
    href: ElementRef<HTMLElement>,
    private _session: SessionStore,
  ) {
    href.nativeElement.classList.add('app-home-page');
  }

  ngOnInit(): void {
    const subscription = this._session.observable().subscribe((session) => {
      if (session.wasLoaded) {
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
        }
      }
    });
    subscription.unsubscribe();

    const a = this.navigation.map((m) => {
      m.wasDisabled =
        moduleWasDisabled(
          [this.config.authorities, m.disableOnContexts!],
          [this.config.contextCode, m.authorities!],
        ) || m.forceDisabledContent;

      m.submodules.map((s) => {
        s.wasDisabled =
          moduleWasDisabled(
            [this.config.authorities, s.disableOnContexts!],
            [this.config.contextCode, s.authorities!],
          ) || s.forceDisabledContent;
        s.routes.map((r) => {
          r.wasDisabled =
            moduleWasDisabled(
              [this.config.authorities, r.disableOnContexts!],
              [this.config.contextCode, r.authorities!],
            ) || r.forceDisabledContent;
          return r;
        });
        return s;
      });
      return m;
    });

    this.resourcesLoaded.set(true);
  }

  greeting = computed(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos dias';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  });
}
