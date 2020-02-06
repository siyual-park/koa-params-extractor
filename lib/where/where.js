class Where {
  constructor(name, koaRequest, nodeRequest, global) {
    this.name = name;
    this.koaRequest = koaRequest;
    this.nodeRequest = nodeRequest;
    this.global = global;
  }
}

module.exports = Where;
