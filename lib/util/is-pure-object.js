function isPureObject(input) {
  if (input === null || input === undefined || typeof input !== 'object') return false;
  // eslint-disable-next-line no-prototype-builtins
  return Object.getPrototypeOf(input).isPrototypeOf(Object);
}

module.exports = isPureObject;
