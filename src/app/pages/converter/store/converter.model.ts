export interface Converter {
  type: 'EuroToDollar' | 'DollarToEuro';
  changeRatio: number;
  fixedRatio: number;
  history: ConversionHistory[];
}

export interface ConversionHistory {
  from: string;
  to: string;
  fromValue: number;
  toValue: number;
  changeRatio: number;
  fixedRatio: number;
  used: 'live' | 'fixed';
}

export interface Ratio {
  used: number;
  live: number;
  fixed: number;
}
