import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SEG_END_POINTS } from '@end-points/seguridad';

export interface ModuleI {
  id: string;
  code: string;
  name: string;
}

@Injectable()
export class CreateAuthoritiesServices {
  constructor(private _http: HttpClient) {}

  public createModule(name: string): Promise<boolean> {
    return firstValueFrom(this._http.post<boolean>(`${SEG_END_POINTS.MODULOS}`, { name }));
  }

  public createSubModule(name: string, moduleId: string): Promise<boolean> {
    return firstValueFrom(
      this._http.post<boolean>(`${SEG_END_POINTS.SUBMODULOS}`, {
        name,
        moduleId,
      }),
    );
  }

  public createAuthority(name: string, moduleId?: string, subModuleId?: string): Promise<boolean> {
    return firstValueFrom(
      this._http.post<boolean>(`${SEG_END_POINTS.PERMISOS}`, {
        name,
        moduleId,
        subModuleId,
      }),
    );
  }
}
