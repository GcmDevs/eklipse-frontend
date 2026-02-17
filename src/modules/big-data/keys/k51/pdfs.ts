import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { apiUrlGen } from '@end-points/general';

@Component({
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  selector: 'gcm-pdfs-component',
  templateUrl: './pdfs.html',
  styleUrl: './pdfs.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class K51Component {
  url = `${apiUrlGen}/`;
  data: { url: string; tooltip: string }[] = [
    { url: 'v4/gen/enlaces-externos/pdfs/1', tooltip: 'Censo Hospitalario (Entidad)' },
    {
      url: 'v4/gen/enlaces-externos/pdfs/1/resumen',
      tooltip: 'Censo Hospitalario (Entidad resumido)',
    },
    { url: 'v4/gen/enlaces-externos/pdfs/2', tooltip: 'Censo Hospitalario (Grupos)' },
    {
      url: 'v4/gen/enlaces-externos/pdfs/2/resumen',
      tooltip: 'Censo Hospitalario (Grupos resumido)',
    },
  ];

  constructor(private _http: HttpClient) {}

  async clickOnButton(url: string) {
    const result = await firstValueFrom(this._http.get<{ url: string }>(`${apiUrlGen}/${url}`));
    window.open(result.url, '_blank');
  }
}
