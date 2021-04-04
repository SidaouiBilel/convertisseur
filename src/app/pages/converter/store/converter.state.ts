import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '@src/app/core';
import { Converter } from './converter.model';

export const FEATURE_NAME = 'converter';

export const selectConverter = createFeatureSelector<State, Converter>(
  FEATURE_NAME
);

export interface State extends AppState {
  converter: Converter;
}
