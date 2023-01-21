import { TestBed } from '@angular/core/testing';

import { GetSingleProductInfoResolver } from './get-single-product-info.resolver';

describe('GetSingleProductInfoResolver', () => {
  let resolver: GetSingleProductInfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetSingleProductInfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
