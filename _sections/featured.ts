import FREELANCE from './freelance';
import CODING from './coding';

// Featured projects are picked by key from their own category, so each one
// is defined once and shows up both here and in Freelance or Coding.
const pick = <T extends { _key: string }>(list: T[], key: string): T => {
  const item = list.find((p) => p._key === key);
  if (!item) throw new Error(`Featured project "${key}" not found`);
  return item;
};

const FEATURED = [
  pick(FREELANCE, 'eti'),
  pick(FREELANCE, 'iot-grill'),
  pick(CODING, 'musictl'),
  pick(CODING, 'satview'),
];

export default FEATURED;
