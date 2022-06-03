function HttpException(status = 500, message = '', data = {}) {
switch (arguments.length) {
  case 1:
    if(typeof status === 'string') {
      const attemptStatus = parseInt(status);
      if(!isNaN(attemptStatus)) {
        status = 500;
      }
      status = 500;
    }
    this.status = status;
  case 2:
  default:
    this.status = status;
    this.message = message;
    this.data = data;
    break;
}
}

HttpException.prototype = Error.prototype;

module.exports = HttpException;