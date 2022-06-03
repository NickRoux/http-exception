const HttpException = require('./httpException');

module.exports = class UnauthorizedException extends HttpException {
  constructor(message='Unauthorized', data=null) {
    super(403, message,  data);
  }
};