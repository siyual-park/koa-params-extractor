function extractElement(name, context) {
  if (context[name] !== undefined) return context[name];
  return context;
}

module.exports = extractElement;
