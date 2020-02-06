const Where = require('../where/where');

class Parameter {
  constructor(name, where) {
    this.name = name;
    this.where = where || new Where(null, true, true, true);
  }
}

module.exports = Parameter;
