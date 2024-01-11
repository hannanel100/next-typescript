import { JwtAthenticationGuard } from './jwt-authentication.guard';

describe('JwtAthenticationGuard', () => {
  it('should be defined', () => {
    expect(new JwtAthenticationGuard()).toBeDefined();
  });
});
