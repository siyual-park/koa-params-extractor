const property = require('./property');

function extract(ctx, properties = [property.headers, property.params, property.query, property.body]) {
  const response = {};

  properties.forEach((property) => {
    let param;
    if (property.where.global && ctx[property.name]) {
      param = ctx[property.name];
    } else if (property.where.nodeRequest && ctx.req && ctx.req[property.name]) {
      param = ctx.req[property.name];
    } else if (property.where.koaRequest && ctx.request && ctx.request[property.name]) {
      param = ctx.request[property.name];
    }

    if (property.where.destructuring) Object.assign(response, param);
    else response[property.name] = param;
  });

  return response;
}

module.exports = extract;
