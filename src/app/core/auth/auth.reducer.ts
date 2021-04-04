import { AuthState } from './auth.models';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { Action } from '@ngrx/store';

export const initialState: AuthState = {
  isAuthenticated: false,
  token: '',
  profile: {}
};

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.SAVE:
      return { ...state, profile: action.payload };

    case AuthActionTypes.LOGIN:
      return { ...state, isAuthenticated: true, token: action.payload };

    case AuthActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, token: '', profile: {} };

    default:
      return state;
  }
}
