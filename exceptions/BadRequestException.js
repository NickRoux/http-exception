const HttpException = require('./httpException');

module.exports = class BadRequestException extends HttpException {
  constructor(message = 'Bad Request', data = null) {
    super(400, message, data);
  }
};