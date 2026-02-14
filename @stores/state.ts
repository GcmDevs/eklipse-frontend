import { ActionReducerMap } from '@ngrx/store';
import { Session, sessionReducer } from './session';
import { Centro, centrosReducer } from './centros';
import { UsuariosData, usuariosReducer } from './usuarios';

export interface AppState {
  centros: Centro[];
  session: Session;
  usuarios: UsuariosData;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  session: sessionReducer,
  centros: centrosReducer,
  usuarios: usuariosReducer,
};
