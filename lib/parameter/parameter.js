const Where = require('../where/where');

function Parameter(
  where = new Where(null, true, true, true),
  options = {name: null, combineLevel: 0, as: null, index: undefined}
) {
  this.where = where;
  this.name = options.name;
  this.combineLevel = options.combineLevel;
  this.as = options.as;
  this.index = options.index;
}

module.exports = Parameter;
