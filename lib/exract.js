function extract(ctx) {
  const response = {};

  if (ctx.headers) response.headers = ctx.headers;
  else if (ctx.req && ctx.req.headers) response.headers = ctx.req.headers;
  else if (ctx.request && ctx.request.headers) response.headers = ctx.request.headers;

  if (ctx.params) response.params = ctx.params;
  else if (ctx.req && ctx.req.params) response.params = ctx.req.params;
  else if (ctx.request && ctx.request.params) response.params = ctx.request.params;

  if (ctx.query) response.query = ctx.query;
  else if (ctx.req && ctx.req.query) response.query = ctx.req.query;
  else if (ctx.request && ctx.request.query) response.query = ctx.request.query;

  if (ctx.body) response.body = ctx.body;
  else if (ctx.req && ctx.req.body) response.body = ctx.req.body;
  else if (ctx.request && ctx.request.body) response.body = ctx.request.body;

  return response;
}

module.exports = extract;
