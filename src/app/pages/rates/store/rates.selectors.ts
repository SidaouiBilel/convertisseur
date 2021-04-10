import { createSelector } from '@ngrx/store';
import { selectRates } from './rates.state';
import { Rates } from './rates.models';

export const selectTabs = createSelector(
  selectRates,
  (object: Rates) => object.tabs
);
