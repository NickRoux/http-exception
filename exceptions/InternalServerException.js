const HttpException = require('./httpException');

module.exports = class InternalServerException extends HttpException {
  constructor(message = 'server encountered an unexpected error', data = null) {
    super(500, message, data);
  }
};