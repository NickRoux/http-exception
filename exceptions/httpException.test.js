const HttpException = require('./httpException');

test('basic 404 HttpException', () => {
  const error = new HttpException(404, 'Not Found');
  expect(error.status).toBe(404);
  expect(error.message).toBe('Not Found');
});

test('HttpException with message and data', () => {
  const error = new HttpException(404, 'Not Found', {
    data: 'some data',
  });
  expect(error.status).toBe(404);
  expect(error.message).toBe('Not Found');
  expect.objectContaining({
    data: 'some data',
  });
});

test('HttpException with message and no data', () => {
  const error = new HttpException(404, null, {
    data: 'some data',
  });
  expect(error.status).toBe(404);
  expect(error.message).toBe(null);
  expect.objectContaining({
    data: 'some data',
  });
});

test('HttpException with message and no data', () => {
  const error = new HttpException(404, null, {
    data: 'some data',
  });
  expect(error.status).toBe(404);
  expect(error.message).toBe(null);
  expect.objectContaining({
    data: 'some data',
  });
});

test('HttpException message argument not provided', () => {
  const error = new HttpException(404,  {
    data: 'some data',
  });
  expect(error.status).toBe(404);
});