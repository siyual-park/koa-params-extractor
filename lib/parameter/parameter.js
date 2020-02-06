const Where = require('../where/where');

function Parameter(
  where = new Where(null, true, true, true),
  name = null,
  complete = true
) {
  this.where = where;
  this.name = name;
  this.complete = complete;
}

module.exports = Parameter;
