import { ActionReducerMap } from '@ngrx/store';
import { Usuario, usuariosReducer } from './usuarios';
import { Session, sessionReducer } from './session';
import { Centro, centrosReducer } from './centros';
import { DataStored } from '@common/domain/models';

export interface AppState {
  usuarios: DataStored<Usuario>;
  centros: Centro[];
  session: Session;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  session: sessionReducer,
  centros: centrosReducer,
  usuarios: usuariosReducer,
};
