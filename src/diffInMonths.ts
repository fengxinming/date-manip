import absFloor from './_internal/absFloor';
import monthDiff from './_internal/monthDiff';
import parse from './parse';
import { DateInput } from './types';

export default function diffInMonths(
  date: Date,
  input: DateInput,
  asFloat?: boolean): number {
  const parsed = parse(input);
  const output = monthDiff(date, parsed);

  return asFloat ? output : absFloor(output);
}
