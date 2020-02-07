const parameter = require('./parameter');

function isInContext(name, context) {
  if (!name) return true;
  return context[name] !== undefined;
}

function extractElement(name, context) {
  if (context[name] !== undefined) return context[name];
  return context;
}

function extractValue(name, context) {
  if (typeof context.get === 'function') return context.get(name);
  return context[name];
}

function extract(ctx, parameters = [parameter.headers, parameter.params, parameter.query, parameter.body]) {
  let request = {};

  parameters.forEach((parameter) => {
    let param;
    if (parameter.where.context && isInContext(parameter.where.name, ctx)) {
      param = extractElement(parameter.where.name, ctx);
    } else if (parameter.where.nodeRequest && isInContext(parameter.where.name, ctx.req)) {
      param = extractElement(parameter.where.name, ctx.req);
    } else if (parameter.where.koaRequest && isInContext(parameter.where.name, ctx.request)) {
      param = extractElement(parameter.where.name, ctx.request);
    }

    let where = parameter.where.name;
    if (parameter.name) {
      param = extractValue(parameter.name, param);
      where = parameter.name;
    }
    if (parameter.as) where = parameter.as;

    if (!parameter.combineLevel) {
      if (typeof request === 'object' && typeof param === 'object') Object.assign(request, param);
      else request = param;
    } else request[where] = param;
  });

  return request;
}

module.exports = extract;


























