import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { Usuario } from './entity';
import { AppState } from '@stores/state';

export interface UsuariosData {
  data: Usuario[];
  lastUpdate: Date;
}

export const setUsuarios = createAction('[Usuarios] Set usuarios', props<UsuariosData>());
export const usuariosFeatureKey = 'usuarios';
export const usuariosInitialState: UsuariosData = { data: [], lastUpdate: null! };

export const usuariosReducer = createReducer(
  usuariosInitialState,
  on(setUsuarios, (_state, { data, lastUpdate }) => {
    return { data, lastUpdate };
  }),
);

export const selectUsuarios = (state: AppState) => Object.freeze(state.usuarios);
export const usuariosState = createSelector(selectUsuarios, (state) => state);
