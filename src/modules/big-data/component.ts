import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EnlaceExternoI, BIG_DATA_LINKS, SANITIZED } from './config';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { apiUrlGen } from '@end-points/general';
import { PdfsComponent } from './pdfs/pdfs';

@Component({
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  selector: 'app-big-data',
  templateUrl: './component.html',
  styleUrl: './component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageOnePage implements OnInit, OnDestroy {
  url = `${apiUrlGen}/`;

  public key = 0;
  private _interval!: any;
  private _interval2!: any;
  private _intervalMs = 300000;

  lastUpdate = new Date();
  refresh = false;
  actualizacionAutomatica = true;

  msParaActualizarse = this._intervalMs;

  links: EnlaceExternoI[] = BIG_DATA_LINKS;

  subs!: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _sanitizer: DomSanitizer,
    private _cd: ChangeDetectorRef,
    private _dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    const key = this._route.snapshot.paramMap.get('key')!;
    this.key = +key;

    this.sanitizar();
    this.subs = this._router.events.subscribe(() => {
      this.ejecutarAlDestruir();
      const key = this._route.snapshot.paramMap.get('key')!;
      this.key = +key;
      this._cd.markForCheck();
      this.setIntervalMsRefresh();
      this.setTimeout();
    });
  }

  setTimeout() {
    this._interval = setInterval(() => {
      clearInterval(this._interval2);
      this.msParaActualizarse = this._intervalMs;
      this.refresh = true;
      this._cd.markForCheck();
      setTimeout(() => {
        this.refresh = false;
        this.lastUpdate = new Date();
        this._cd.markForCheck();
      }, 100);
      this.setIntervalMsRefresh();
    }, this._intervalMs);
  }

  setIntervalMsRefresh() {
    this._interval2 = setInterval(() => {
      this.msParaActualizarse = this.msParaActualizarse - 1000;
      this._cd.markForCheck();
    }, 1000);
  }

  ejecutarAlDestruir() {
    try {
      clearInterval(this._interval);
      clearInterval(this._interval2);
      this.msParaActualizarse = this._intervalMs;
    } catch (error) {}
  }

  sanitizar() {
    if (SANITIZED.value === false) {
      const links: EnlaceExternoI[] = BIG_DATA_LINKS;
      links.map((e) => (e.url = this._sanitizer.bypassSecurityTrustResourceUrl(e.url as string)));
      this.links = links;
      SANITIZED.setValue(true);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.ejecutarAlDestruir();
  }

  disableActualizacionAutomatica() {
    if (this.actualizacionAutomatica) {
      this.actualizacionAutomatica = false;
      this.refresh = false;
      this.msParaActualizarse = this._intervalMs;
      try {
        clearInterval(this._interval);
        clearInterval(this._interval2);
      } catch (error) {}
    } else {
      this.actualizacionAutomatica = true;
      this.setIntervalMsRefresh();
      this.setTimeout();
    }
    this._cd.markForCheck();
  }

  clickOnRefresh() {
    this.refresh = true;
    setTimeout(() => {
      this.refresh = false;
      this.lastUpdate = new Date();
      this._cd.markForCheck();
    }, 100);
  }

  get sanitized() {
    return SANITIZED;
  }

  clickOnShowDialog(
    key: number,
    pdfs: { url: string; tooltip: string }[],
    incluyeContexto: boolean,
  ) {
    this._dialog.open(PdfsComponent, {
      data: { key, pdfs, incluyeContexto },
      width: '50%',
      maxWidth: '50%',
    });
  }
}
