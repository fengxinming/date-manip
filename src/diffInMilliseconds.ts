import absFloor from './_internal/absFloor';
import parse from './parse';
import { DateInput } from './types';

export default function diffInMilliseconds(
  date: Date,
  input: DateInput,
  asFloat?: boolean
): number {
  const parsed = parse(input);
  const output = +date - +parsed;

  return asFloat ? output : absFloor(output);
}
