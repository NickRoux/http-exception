const exceptions = require('../exceptions');

test('exceptions.NotFoundException', () => {
  const error = new exceptions.NotFoundException();
  expect(error.status).toBe(404);
  expect(error.message).toBe('Not Found')
});

test('exceptions.NotFoundException with message', () => {
  const error = new exceptions.NotFoundException('entity not found');
  expect(error.status).toBe(404);
  expect(error.message).toBe('entity not found')
});

test('exceptions.NotFoundException with message and data', () => {
  const error = new exceptions.NotFoundException('entity not found', {
    id: 1
  });
  expect(error.status).toBe(404);
  expect(error.message).toBe('entity not found');
  expect.objectContaining({
    id: 1
  });
});

test('exceptions.InternalServerException', () => {
  const error = new exceptions.InternalServerException();
  expect(error.status).toBe(500);
  expect(error.message).toBe('server encountered an unexpected error')
});

test('exceptions.InternalServerException with message', () => {
  const error = new exceptions.InternalServerException('downstream system down');
  expect(error.status).toBe(500);
  expect(error.message).toBe('downstream system down')
});

test('exceptions.InternalServerException with message and data', () => {
  const error = new exceptions.InternalServerException('downstream system down', {
    id: 1
  });
  expect(error.status).toBe(500);
  expect(error.message).toBe('downstream system down');
  expect.objectContaining({
    id: 1
  });
});

test('exceptions.UnauthenticatedException', () => {
  const error = new exceptions.UnauthenticatedException();
  expect(error.status).toBe(401);
  expect(error.message).toBe('Unauthenticated')
});

test('exceptions.UnauthenticatedException with message', () => {
  const error = new exceptions.UnauthenticatedException('account missing');
  expect(error.status).toBe(401);
  expect(error.message).toBe('account missing')
});

test('exceptions.UnauthenticatedException with message and data', () => {
  const error = new exceptions.UnauthenticatedException('account missing', {
    id: 1
  });
  expect(error.status).toBe(401);
  expect(error.message).toBe('account missing');
  expect.objectContaining({
    id: 1
  });
});

test('exceptions.UnauthorizedException', () => {
  const error = new exceptions.UnauthorizedException();
  expect(error.status).toBe(403);
  expect(error.message).toBe('Unauthorized')
});

test('exceptions.UnauthorizedException with message', () => {
  const error = new exceptions.UnauthorizedException('user is not authorized');
  expect(error.status).toBe(403);
  expect(error.message).toBe('user is not authorized')
});

test('exceptions.UnauthorizedException with message and data', () => {
  const error = new exceptions.UnauthorizedException('user is not authorized', {
    id: 1
  });
  expect(error.status).toBe(403);
  expect(error.message).toBe('user is not authorized');
  expect.objectContaining({
    id: 1
  });
});

test('exceptions.BadRequestException', () => {
  const error = new exceptions.BadRequestException();
  expect(error.status).toBe(400);
  expect(error.message).toBe('Bad Request')
});

test('exceptions.BadRequestException with message', () => {
  const error = new exceptions.BadRequestException('data malformed');
  expect(error.status).toBe(400);
  expect(error.message).toBe('data malformed')
});

test('exceptions.BadRequestException with message and data', () => {
  const error = new exceptions.BadRequestException('data malformed', ['id is not a number', 'name is required']);
  expect(error.status).toBe(400);
  expect(error.message).toBe('data malformed');
  expect.objectContaining(['id is not a number', 'name is required']);
});