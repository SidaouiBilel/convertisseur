import { Ratio } from '@src/app/pages/converter/store/converter.model';

export function Random(start, end): number {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

export function getUsedRatio(live: number, fixed: number): Ratio{
  if (fixed > live + 0.02 || fixed < live - 0.02) {
    return {used: live, live, fixed};
  }
  return {used: fixed, live, fixed};
}
