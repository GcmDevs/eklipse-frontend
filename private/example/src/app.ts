import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Example</h1>
    <div class="mf-divider"></div>
    <section>
      <p>Modulo iniciado el 18/Feb/26.</p>
    </section>
  `,
  styles: [
    `
      .mf-divider {
        border: 1px solid rgba(0, 0, 0, 0.12);
      }
    `,
  ],
})
export class App {}
