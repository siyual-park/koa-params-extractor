class ParameterNameUndefined {
  constructor(message = 'Parameter name undefined.') {
    this.statusCode = 400;
    this.message = message;
  }
}

module.exports = ParameterNameUndefined;
