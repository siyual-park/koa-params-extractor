const Parameter = require('./parameter');

const headers = require('./headers');
const params = require('./params');
const query = require('./query');
const body = require('./body');
const cookies = require('./cookies');

module.exports = {
  Parameter, headers, params, query, body, cookies,
};
