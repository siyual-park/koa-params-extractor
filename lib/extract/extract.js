const parameter = require('../parameter');
const isExtractMany = require('./is-extract-many');
const extractOne = require('./extract-one');
const extractMany = require('./extract-many');

function extract(ctx, parameters = [parameter.headers, parameter.params, parameter.query, parameter.body]) {
  if (!isExtractMany(parameters)) return extractOne(ctx, parameters);
  else return extractMany(ctx, parameters);
}

module.exports = extract;
