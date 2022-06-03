# http-exception
HTTP error package

## How to use

```javascript
const httpExceptions = require('http-exception');

function x(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.BadRequestException());
  }
}

function x2(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.BadRequestException('custom message', {
      code: 'CUSTOM_CODE',
      data: {
        foo: 'bar'
      }
    }));
  }
}

function y(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.NotFoundException());
  }
}

function y2(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.NotFoundException('custom message', {
      code: 'CUSTOM_CODE',
      data: {
        foo: 'bar'
      }
    }));
  }
}

function z(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.UnauthorizedException());
  }
}

function z2(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.UnauthorizedException('custom message', {
      code: 'CUSTOM_CODE',
      data: {
        foo: 'bar'
      }
    }));
  }
}

function z(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.InternalServerException());
  }
}

function z2(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.InternalServerException('custom message', {
      code: 'CUSTOM_CODE',
      data: {
        foo: 'bar'
      }
    }));
  }
}
```