import absFloor from './_internal/absFloor';
import { MS_IN_HOUR } from './_internal/constants';
import parse from './parse';
import { DateInput } from './types';

export default function diffInHours(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = (+date - +parsed) / MS_IN_HOUR;

  return asFloat ? output : absFloor(output);
}
