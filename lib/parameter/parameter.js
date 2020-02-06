const Where = require('../where/where');

function Parameter(where, name = null, complete = true) {
  this.where = where || new Where(null, true, true, true);
  this.name = name;
  this.complete = complete;
}

module.exports = Parameter;
