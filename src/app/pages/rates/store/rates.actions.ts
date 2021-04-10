import { Action } from '@ngrx/store';
import { Tab } from './rates.models';

export enum RatesAtionTypes {
  SAVENEWTAB = '[Rates] SAVE TAB',
  DELETETAB = '[RATES] DELETE TAB'
}

export class ActionSaveNewTab implements Action {
  readonly type = RatesAtionTypes.SAVENEWTAB;
  constructor(public payload: Tab) {}
}

export class ActionDeleteTab implements Action {
  readonly type = RatesAtionTypes.DELETETAB;
  constructor(public payload: number) {}
}

export type RatesActions =  ActionSaveNewTab | ActionDeleteTab;
