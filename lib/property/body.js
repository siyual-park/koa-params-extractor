const Where = require('./where');
const Property = require('./property');

module.exports = new Property(
  'body', new Where(true, true, false)
);
