const HttpException = require('./httpException');

module.exports = class UnauthenticatedException extends HttpException {
  constructor(message='Unauthenticated', data= null) {
    super(401, message,  data);
  }
};