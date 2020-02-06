function createOptions(options = {}) {
  let localOption = {};

  if (options.complete === undefined) localOption.complete = !!options.name;
  else localOption.complete = !!options.name;

  localOption.as = options.as;
  localOption.name = options.name;

  return localOption;
}

module.exports = createOptions;