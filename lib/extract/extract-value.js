function extractValue(name, context) {
  if (typeof context.get === 'function') return context.get(name);
  if (context[name] !== undefined) return context[name];
  return context;
}

module.exports = extractValue;
