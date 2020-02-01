class Where {
  constructor(destructuring, koaRequest, nodeRequest, global) {
    this.destructuring = destructuring;
    this.koaRequest = koaRequest;
    this.nodeRequest = nodeRequest;
    this.global = global;
  }
}

module.exports = Where;
