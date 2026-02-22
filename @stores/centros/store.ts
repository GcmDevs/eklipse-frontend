import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { AppState } from '../state';
import { Centro } from './entity';

export const setCentros = createAction('[Centros] Set centros', props<{ data: Centro[] }>());
export const centrosFeatureKey = 'centros';
export const centrosInitialState: Centro[] = [];

export const centrosReducer = createReducer(
  centrosInitialState,
  on(setCentros, (_state, { data }) => data),
);

export const selectCentros = (state: AppState) => Object.freeze(state.centros);
export const centrosState = createSelector(selectCentros, (state) => state);
