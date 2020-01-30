const Where = require('./where');

class Property {
  constructor(name, where) {
    this.name = name;

    if (where) this.where = where;
    else this.where = new Where(true, true, true);
  }
}

module.exports = Property;
