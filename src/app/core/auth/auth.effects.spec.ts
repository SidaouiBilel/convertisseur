import { Router } from '@angular/router';

describe('AuthEffects', () => {
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
  });
});
