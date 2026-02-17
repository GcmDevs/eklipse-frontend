import { AppState } from '@stores/state';
import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { UserDataFromToken } from '@common/application/services';
import { Session, TokCreAndExpInfo } from './entity';
import { GCM_CONTEXTS } from '@common/domain/types';

export const setSession = createAction('[Session] Set session', props<{ data: Session }>());
export const sessionFeatureKey = 'session';
export const sessionInitialState: Session = new Session(
  new TokCreAndExpInfo(new Date(), new Date()),
  GCM_CONTEXTS.ALTACENTRO,
  new UserDataFromToken('', '', ''),
  [],
  false,
);

export const sessionReducer = createReducer(
  sessionInitialState,
  on(setSession, (_state, { data }) => data),
);

export const selectSession = (state: AppState) => state.session;
export const sessionState = createSelector(selectSession, (state) => state);
