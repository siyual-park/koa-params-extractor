const Where = require('../where/where');

function Parameter(
  where = new Where(null, true, true, true),
  name = null,
  options = {complete: true, as: null}
) {
  this.where = where;
  this.name = name;
  this.complete = options.complete;
  this.as = options.as;
}

module.exports = Parameter;
