import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LOCAL_URLS } from '@common/application/constants';
import { CentrosStore } from '@stores/centros';
import { SessionStore } from '@stores/session';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    @if (sessionWasLoaded()) {
      <router-outlet />
    } @else {
      <div class="tak-view-loader">
        <div class="tak-spinner">
          <div class="tak-double-bounce1"></div>
          <div class="tak-double-bounce2"></div>
        </div>
      </div>
    }
  `,
})
export class App implements OnInit {
  sessionWasLoaded = signal(false);
  subs: Subscription;

  constructor(
    private _router: Router,
    private _session: SessionStore,
    private _centros: CentrosStore,
  ) {
    this.subs = this._router.events.subscribe(() => {
      if (location.href.includes(LOCAL_URLS.login)) {
        this.sessionWasLoaded.set(true);
      }
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      if (!location.href.includes(LOCAL_URLS.login)) {
        await this._session.autoInstance();
        await this._centros.autoInstance();

        const subscription = this._session.observable().subscribe((session) => {
          if (session.wasLoaded) this.sessionWasLoaded.set(true);
        });

        subscription.unsubscribe();
      }
    } catch (error: any) {
      this.sessionWasLoaded.set(true);
    }

    setTimeout(() => {
      this.subs.unsubscribe();
    }, 5000);
  }
}
