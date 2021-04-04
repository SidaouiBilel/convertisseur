import { createSelector } from '@ngrx/store';
import { Converter, Ratio } from './converter.model';
import { selectConverter } from './converter.state';

export const selectRatio = createSelector(
  selectConverter,
  (object: Converter) => object.changeRatio
);

export const selectFixedRatio = createSelector(
  selectConverter,
  (object: Converter) => object.fixedRatio
);

export const selectType = createSelector(
  selectConverter,
  (object: Converter) => object.type
);

export const selectHistory = createSelector(
  selectConverter,
  (object: Converter) => object.history
);

