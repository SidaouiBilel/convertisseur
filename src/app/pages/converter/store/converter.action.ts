import { Action } from '@ngrx/store';
import { ConversionHistory } from './converter.model';

export enum ConverterAtionTypes {
  SAVECONVERTIONRATIO = '[Converter] Save conversion ratio',
  SAVEFIXEDRATIO = '[Converter] Save fixed conversion ratio',
  RANDOMONVERTIONRATIO = '[Converter] Random conversion ratio',
  SWITCHCONVERSION = '[Converter] Switch Conversion',
  SAVEHISTORY = '[Converter] SAVE HISTORY',
  DELETEHISTORY = '[Converter] Delete HISTORY'
}

export class ActionDeleteHistory implements Action {
  readonly type = ConverterAtionTypes.DELETEHISTORY;
}
export class ActionSaveRatio implements Action {
  readonly type = ConverterAtionTypes.SAVECONVERTIONRATIO;
  constructor(public payload: number) {}
}
export class ActionSaveFixedRatio implements Action {
  readonly type = ConverterAtionTypes.SAVEFIXEDRATIO;
  constructor(public payload: number) {}
}

export class ActionrandomRatio implements Action {
  readonly type = ConverterAtionTypes.RANDOMONVERTIONRATIO;
  constructor(public payload: number) {}
}

export class ActionSaveHistory implements Action {
  readonly type = ConverterAtionTypes.SAVEHISTORY;
  constructor(public payload: ConversionHistory) {}
}

export class ActionSwitchConversion implements Action {
  readonly type = ConverterAtionTypes.SWITCHCONVERSION;
  constructor(public payload: 'EuroToDollar' | 'DollarToEuro') {}
}

export type ConverterActions =  ActionSaveRatio | ActionrandomRatio | ActionSwitchConversion | ActionSaveFixedRatio |
                                ActionSaveHistory | ActionDeleteHistory;
