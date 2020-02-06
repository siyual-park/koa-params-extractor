const parameter = require('./parameter');

function extract(ctx, parameters = [parameter.headers, parameter.params, parameter.query, parameter.body]) {
  let request = {};

  parameters.forEach((parameter) => {
    let param;
    if (parameter.where.global) param = ctx;
    else if (parameter.where.nodeRequest) param = ctx.req;
    else if (parameter.where.koaRequest) param = ctx.request;

    if (parameter.where.name) param = param[parameter.where.name];
    if (parameter.name) request = param[parameter.name];
    else Object.assign(request, param);
  });

  return request;
}

module.exports = extract;
