import { selectAuth, selectIsAuthenticated } from './auth.selectors';

describe('Auth Selectors', () => {
  it('selectAuth', () => {
    const state = createAuthState();
    expect(selectAuth(state)).toBe(state.auth);
  });

  it('selectIsAuthenticated', () => {
    const state = createAuthState();
    expect(selectIsAuthenticated(state)).toBe(false);
  });
});

function createAuthState(): any {
  return {
    auth: {
      isAuthenticated: false,
      token: '',
      profile: {}
    },
    router: {} as any
  };
}
