import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  providers: [],
  selector: 'app-example-page-one',
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page {
  constructor(href: ElementRef<HTMLElement>) {
    href.nativeElement.classList.add('app-example-page-one');
  }
}
