const Where = require('../where/where');

function findName(parameter) {
  const whereIsNotCustom = parameter.where instanceof Where;
  const parameterName = parameter.name || parameter.as;

  return whereIsNotCustom ? parameter.where.name || parameterName : parameterName;
}

module.exports = findName;
