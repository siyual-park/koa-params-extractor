function isInContext(name, context) {
  if (!name) return true;
  return context[name] !== undefined;
}

module.exports = isInContext;
