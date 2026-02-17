import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { AppState } from '@stores/state';
import { Usuario } from './entity';
import { DataStored } from '@common/domain/models';

export const setUsuarios = createAction('[Usuarios] Set usuarios', props<DataStored<Usuario>>());
export const usuariosFeatureKey = 'usuarios';
export const usuariosInitialState: DataStored<Usuario> = new DataStored<Usuario>([], null);

export const usuariosReducer = createReducer(
  usuariosInitialState,
  on(setUsuarios, (_state, stored) => {
    return new DataStored<Usuario>((stored as any)._data, (stored as any)._lastUpdate);
  }),
);

export const selectUsuarios = (state: AppState) => Object.freeze(state.usuarios);
export const usuariosState = createSelector(selectUsuarios, (state) => state);
