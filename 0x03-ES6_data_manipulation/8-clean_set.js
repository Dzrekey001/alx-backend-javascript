export default function cleanSet(set, startString) {
  const string = [];

  if (startString === '' || typeof startString !== 'string') return '';

  for (const str of set) {
    if (typeof str === 'string' && str.startsWith(startString)) {
      string.push(str.slice(startString.length));
    }
  }
  return string.join('-');
}
