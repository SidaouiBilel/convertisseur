import { localStorageSync } from 'ngrx-store-localstorage';
import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  ActionReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { environment } from '@src/environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  router: routerReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: [], rehydrate: true})(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [
  localStorageSyncReducer,
  initStateFromLocalStorage
];
if (!environment.production) {
  metaReducers.unshift(storeFreeze);
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectRouterState = createFeatureSelector<AppState, RouterReducerState<RouterStateUrl>>(
  'router'
);

export interface AppState {
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}
