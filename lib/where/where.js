function Where(name, koaRequest, nodeRequest, context) {
  this.name = name;
  this.koaRequest = koaRequest;
  this.nodeRequest = nodeRequest;
  this.context = context;
}

module.exports = Where;
