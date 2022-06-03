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

function y(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.NotFoundException());
  }
}

function z(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.UnauthorizedException());
  }
}

function z(req, res, next) {
  try {
    // do something
  } catch (err) {
    next(httpExceptions.InternalServerException());
  }
}
```