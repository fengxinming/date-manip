import absFloor from './_internal/absFloor';
import { MS_IN_DAY } from './_internal/constants';
import parse from './parse';
import { DateInput } from './types';

export default function diffInDays(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = (+date - +parsed) / MS_IN_DAY;

  return asFloat ? output : absFloor(output);
}
