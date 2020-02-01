const Where = require('./where');
const Property = require('./property');

module.exports = new Property(
  'body', new Where(false, true, true, false)
);
