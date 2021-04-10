import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '@src/app/core';
import { Rates } from './rates.models';

export const FEATURE_NAME = 'rates';

export const selectRates = createFeatureSelector<State, Rates>(
  FEATURE_NAME
);

export interface State extends AppState {
  rates: Rates;
}
