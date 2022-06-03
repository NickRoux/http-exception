const HttpException = require('./httpException');

module.exports = class NotFoundException extends HttpException {
  constructor(message = 'Not Found', data = null) {
    super(404, message, data);
  }
};