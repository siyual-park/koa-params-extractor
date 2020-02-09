function isInContext(name, context) {
  return !name ? true : context[name] !== undefined;
}

module.exports = isInContext;
