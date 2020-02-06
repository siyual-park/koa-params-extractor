const Where = require('../where/where');

function Parameter(name, where) {
  this.name = name;
  this.where = where || new Where(null, true, true, true);
}

module.exports = Parameter;
