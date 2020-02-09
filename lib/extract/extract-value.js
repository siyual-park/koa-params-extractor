function extractValue(name, context) {
  if (typeof context.get === 'function') {
    const element = context.get(name);
    return element ? element : context;
  }
  return context[name] !== undefined ? context[name] : context;
}

module.exports = extractValue;
