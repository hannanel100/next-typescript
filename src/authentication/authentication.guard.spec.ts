import { AuthenticationGuard } from './localAuthentication.guard';

describe('AuthenticationGuard', () => {
  it('should be defined', () => {
    expect(new AuthenticationGuard()).toBeDefined();
  });
});
