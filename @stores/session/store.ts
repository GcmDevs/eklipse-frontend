import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { UserDataFromToken } from '../../@common/services';
import { GCM_CONTEXTS } from '@kato-lee/utilities/types';
import { Session, TokCreAndExpInfo } from './entity';
import { AppState } from '../state';

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
