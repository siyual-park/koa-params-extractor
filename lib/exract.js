const property = require('./property');

function extract(ctx, properties = [property.headers, property.params, property.query, property.body]) {
  const response = {};

  properties.forEach((property) => {
    if (property.where.global && ctx[property.name]) {
      response[property.name] = ctx[property.name];
    } else if (property.where.nodeRequest && ctx.req && ctx.req[property.name]) {
      response[property.name] = ctx.req[property.name];
    } else if (property.where.koaRequest && ctx.request && ctx.request[property.name]) {
      response[property.name] = ctx.request[property.name];
    }
  });

  return response;
}

module.exports = extract;
