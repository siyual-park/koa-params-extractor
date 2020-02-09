const Where = require('../where/where');

function findName(parameter) {
  const whereIsNotCustom = parameter.where instanceof Where;
  const parameterName = parameter.name || parameter.as;

  return whereIsNotCustom ? parameterName || parameter.where.name : parameterName;
}

module.exports = findName;
