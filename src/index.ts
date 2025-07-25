// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export { Pet as default } from './client';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './core/api-promise';
export { Pet, type ClientOptions } from './client';
export {
  PetError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './core/error';
