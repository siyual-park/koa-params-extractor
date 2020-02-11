const extractParameter = require('./extract-parameter');
const findName = require('./find-name');

const ParameterNameUndefined = require('../error/parameter-name-undefined');

function extractOne(ctx, parameters = []) {
  if (!parameters) return undefined;

  let request = {};

  parameters.forEach((parameter) => {
    const param = extractParameter(parameter, ctx);
    const name = findName(parameter);

    if (!parameter.combineLevel) {
      if (typeof request === 'object' && typeof param === 'object') Object.assign(request, param);
      else request = param;
    } else {
      if (name === undefined) throw new ParameterNameUndefined();
      request[name] = param;
    }
  });

  return request;
}

module.exports = extractOne;
