class CantFindParameter {
  constructor(message = 'Cant find parameter.') {
    this.statusCode = 400;
    this.message = message;
  }
}

module.exports = CantFindParameter;
