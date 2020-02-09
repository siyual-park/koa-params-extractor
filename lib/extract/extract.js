const parameter = require('../parameter');
const extractParameter = require('./extract-parameter');
const findName = require('./find-name');

function extract(ctx, parameters = [parameter.headers, parameter.params, parameter.query, parameter.body]) {
  let request = {};

  parameters.forEach((parameter) => {
    const param = extractParameter(parameter, ctx);
    const name = findName(parameter);

    if (!parameter.combineLevel) {
      if (typeof request === 'object' && typeof param === 'object') Object.assign(request, param);
      else request = param;
    } else request[name] = param;
  });

  return request;
}

module.exports = extract;


























