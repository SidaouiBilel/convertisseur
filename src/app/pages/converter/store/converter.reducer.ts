import { ConverterActions, ConverterAtionTypes } from './converter.action';
import { Converter } from './converter.model';

export const initialState: Converter = {
  type: 'EuroToDollar',
  changeRatio: 1.1,
  fixedRatio: 0,
  history: []
};

export function ConverterReducer(state: Converter = initialState, action: ConverterActions): Converter {
  switch (action.type) {
    case ConverterAtionTypes.SAVEHISTORY:
      const newHistories = [...state.history];
      newHistories.push(action.payload);
      return {
        ...state,
        history: newHistories.slice(Math.max(newHistories.length - 5, 0))
      };

    case ConverterAtionTypes.DELETEHISTORY:
      return {
        ...state,
        history: []
      };

    case ConverterAtionTypes.SAVEFIXEDRATIO:
      return {
        ...state,
        fixedRatio: action.payload
      };

    case ConverterAtionTypes.SAVECONVERTIONRATIO:
      return {
        ...state,
        changeRatio: action.payload
      };

    case ConverterAtionTypes.SWITCHCONVERSION:
      return {
        ...state,
        type: action.payload
      };

    case ConverterAtionTypes.RANDOMONVERTIONRATIO:
      return {
        ...state,
        changeRatio: state.changeRatio + action.payload
      };

    default:
      return state;
  }
}
