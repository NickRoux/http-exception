function HttpException(status = 500, message = '', data = {}) {
  this.status = parseStatus(status);
  this.message = message;
  this.data = data;
}

function parseStatus(status) {
  if(status === undefined) {
    status = 500;
  }
  if(status === null) {
    status = 500;
  }
  if(status === 0) {
    status = 500;
  }
  if(status === '') {
    status = 500;
  }
  if (typeof status === 'string') {
    const attemptStatus = parseInt(status);
    if (!isNaN(attemptStatus)) {
      status = 500;
    }
    this.status = attemptStatus;
  }
  if (typeof status === 'number') {
    this.status = status;
  }
  if(status < 100) {
    status = 500;
  }
  if(status > 599) {
    status = 500;
  }
  return status;
}

HttpException.prototype = Error.prototype;

module.exports = HttpException;