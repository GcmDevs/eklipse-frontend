import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, signal } from '@angular/core';
import { EnlaceExternoI, ENLACES_EXTERNOS, SANITIZED } from './config';
import { LucideAngularModule, LogOutIcon, LayoutGrid, Menu } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-legacy',
  templateUrl: './component.html',
  styleUrl: './component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
})
export class LegacyComponent implements OnInit, OnDestroy {
  //host = `${environment.host}${!environment.production ? ':4200' : ''}`;
  host = `https://eklipse.grupoclinicamedicos.com/legacy`;
  key = signal(0);
  refresh = signal(false);
  isPageLoaded = signal(false);

  actualizacionAutomatica = false;

  links: EnlaceExternoI[] = ENLACES_EXTERNOS;

  private _subs!: Subscription;

  channel!: BroadcastChannel;

  readonly icons = { LogOutIcon, LayoutGrid, Menu };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.channel = new BroadcastChannel('page-state');

    this.channel.onmessage = (e) => {
      if (e.data.type === 'MF_READY') this.isPageLoaded.set(true);
    };

    const key = this._route.snapshot.paramMap.get('key')!;
    this.key.set(+key);

    this.sanitizar();

    this._subs = this._router.events.subscribe(() => {
      this.isPageLoaded.set(false);
      const key = this._route.snapshot.paramMap.get('key')!;
      this.key.set(+key);
    });
  }

  sanitizar() {
    if (SANITIZED.value === false) {
      const links: EnlaceExternoI[] = ENLACES_EXTERNOS;
      links.map(
        (e) =>
          (e.url = this._sanitizer.bypassSecurityTrustResourceUrl(
            `${this.host}/#/${e.url}` as string,
          )),
      );
      this.links = links;
      SANITIZED.setValue(true);
    }
  }

  disableActualizacionAutomatica() {
    if (this.actualizacionAutomatica) {
      this.actualizacionAutomatica = false;
      this.refresh.set(false);
    } else {
      this.actualizacionAutomatica = true;
    }
  }

  clickOnRefresh() {
    this.refresh.set(true);
    setTimeout(() => {
      this.refresh.set(false);
    }, 100);
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
    this.channel.close();
  }

  get sanitized() {
    return SANITIZED;
  }
}
