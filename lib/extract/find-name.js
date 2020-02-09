const Where = require('../where/where');

function findName(parameter) {
  return parameter.where instanceof Where
    ? parameter.where.name : parameter.name || parameter.as;
}

module.exports = findName;
