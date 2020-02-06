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
    if (parameter.where.global && isInContext(parameter.where.name, ctx)) {
      param = extractElement(parameter.where.name, ctx);
    } else if (parameter.where.nodeRequest && isInContext(parameter.where.name, ctx.req)) {
      param = extractElement(parameter.where.name, ctx.req);
    } else if (parameter.where.koaRequest && isInContext(parameter.where.name, ctx.request)) {
      param = extractElement(parameter.where.name, ctx.request);
    }

    if (parameter.name) {
      if (parameter.complete) request = extractValue(parameter.name, param);
      else if (!parameter.complete) {
        if (parameter.as) request[parameter.as] = extractValue(parameter.name, param);
        else request[parameter.name] = extractValue(parameter.name, param);
      }
    } else {
      if (parameter.complete) request = param;
      else if (!parameter.complete) Object.assign(request, param);
    }
  });

  return request;
}

module.exports = extract;
