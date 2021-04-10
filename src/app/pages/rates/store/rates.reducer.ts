import { RatesActions, RatesAtionTypes } from './rates.actions';
import { Rates } from './rates.models';

export const initialState: Rates = {
  tabs: [
    {title: 'EUR', base: 'EUR', closable: true},
    {title: 'USD', base: 'USD', closable: true},
    {title: 'JPY', base: 'JPY', closable: true},
    {title: 'DEFAULT', base: 'Default', closable: false},
  ]
};

export function RatesReducer(state: Rates = initialState, action: RatesActions): Rates {
  switch (action.type) {
    case RatesAtionTypes.SAVENEWTAB:
      const newTabs = [...state.tabs];
      newTabs.push(action.payload);
      return {
        ...state,
        tabs: newTabs
      };

    case RatesAtionTypes.DELETETAB:
      const nTabs = [...state.tabs];
      nTabs.splice(action.payload, 1);
      return {
        ...state,
        tabs: nTabs
      };

    default:
      return state;
  }
}
