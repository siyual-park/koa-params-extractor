const Where = require('../where/where');
const ParameterNameUndefined = require('../error/parameter-name-undefined');

function findName(parameter) {
  const whereIsNotCustom = parameter.where instanceof Where;

  let name;
  if (whereIsNotCustom) name = parameter.where.name;
  name = parameter.name || parameter.as;

  if (name === undefined) throw new ParameterNameUndefined();

  return name;
}

module.exports = findName;
