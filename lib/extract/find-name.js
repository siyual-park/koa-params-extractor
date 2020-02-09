const Where = require('../where/where');

function findName(parameter) {
  const whereIsNotCustom = parameter.where instanceof Where;

  let name;
  if (whereIsNotCustom) name = parameter.where.name;
  name = parameter.name || parameter.as || name;

  return name;
}

module.exports = findName;
