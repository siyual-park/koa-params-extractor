const Where = require('../where/where');
const createOptions = require('./create-options');

function Parameter(
  where = new Where(null, true, true, true),
  options
) {
  const localOptions = createOptions(options);

  this.where = where;
  this.name = localOptions.name;
  this.complete = localOptions.complete;
  this.as = localOptions.as;
}

module.exports = Parameter;
