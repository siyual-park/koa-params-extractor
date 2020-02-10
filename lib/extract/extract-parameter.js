const isInContext = require('./is-in-context');
const extractElement = require('./extract-element');
const extractValue = require('./extract-value');

const Where = require('../where/where');

function extractParameter(parameter, ctx) {
  const whereIsNotCustom = parameter.where instanceof Where;

  let param;
  if (whereIsNotCustom) {
    if (parameter.where.context && isInContext(parameter.where.name, ctx)) {
      param = extractElement(parameter.where.name, ctx);
    } else if (parameter.where.nodeRequest && isInContext(parameter.where.name, ctx.req)) {
      param = extractElement(parameter.where.name, ctx.req);
    } else if (parameter.where.koaRequest && isInContext(parameter.where.name, ctx.request)) {
      param = extractElement(parameter.where.name, ctx.request);
    }
  } else param = parameter.where;

  return parameter.name ? extractValue(parameter.name, param) : param;
}

module.exports = extractParameter;
