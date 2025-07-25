// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Pet } from '../client';

export abstract class APIResource {
  protected _client: Pet;

  constructor(client: Pet) {
    this._client = client;
  }
}
