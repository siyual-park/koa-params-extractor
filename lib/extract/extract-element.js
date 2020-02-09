function extractElement(name, context) {
  return context[name] !== undefined ? context[name] : context;
}

module.exports = extractElement;
