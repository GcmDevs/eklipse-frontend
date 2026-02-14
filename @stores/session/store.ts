import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { Session, TokCreAndExpInfo } from './entity';
import { AppState } from '@stores/state';
import { GCM_CONTEXTS } from '@common/domain/types';
import { UserDataFromToken } from '@common/domain/models';

export const setSession = createAction('[Session] Set session', props<{ data: Session }>());
export const sessionFeatureKey = 'session';
export const sessionInitialState: Session = new Session(
  new TokCreAndExpInfo('GENUSUARIO', new Date(), new Date()),
  GCM_CONTEXTS.ALTACENTRO,
  new UserDataFromToken('', '', ''),
  [],
  false,
);

export const sessionReducer = createReducer(
  sessionInitialState,
  on(setSession, (_state, { data }) => data),
);

export const selectSession = (state: AppState) => Object.freeze(state.session);
export const sessionState = createSelector(selectSession, (state) => state);
