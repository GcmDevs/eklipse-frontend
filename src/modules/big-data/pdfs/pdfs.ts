import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Centro, CentrosSuggestionsComponent } from '@stores/centros';
import { TakDialogModule } from '@kato-lee/components/dialogs';
import { decodeToken } from '@common/services';
import { GCM_CONTEXTS } from '@kato-lee/utilities/types';
import { apiUrlGen } from '@end-points/general';

@Component({
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CentrosSuggestionsComponent,
    TakDialogModule,
  ],
  selector: 'gcm-pdfs-component',
  templateUrl: './pdfs.html',
  styleUrl: './pdfs.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfsComponent {
  url = `${apiUrlGen}/`;
  centro!: Centro;
  hiddenContexts = [GCM_CONTEXTS.AMMEDICAL];

  constructor(
    private _http: HttpClient,
    public dialogRef: MatDialogRef<PdfsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      key: number;
      pdfs: { url: string; tooltip: string }[];
      incluyeContexto: boolean;
    },
  ) {}

  async clickOnButton(url: string) {
    const tkDcd = decodeToken();
    const contexto = this.centro ? this.centro.contexto : tkDcd.context;
    const centroId = this.centro
      ? this.centro.id
      : contexto === GCM_CONTEXTS.ALTACENTRO
        ? this.data.key === 56
          ? 1
          : this.data.key === 53
            ? 2
            : undefined
        : undefined;

    let params: any = {
      contexto: contexto.getCode(),
    };

    if (centroId) params.centroId = centroId;

    const result = await firstValueFrom(
      this._http.get<{ url: string }>(`${apiUrlGen}/${url}`, {
        params,
      }),
    );
    window.open(result.url, '_blank');
  }
}
