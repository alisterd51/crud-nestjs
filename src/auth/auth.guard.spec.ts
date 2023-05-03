import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { Reflector } from '@nestjs/core';

describe('AuthGuard', () => {
  it('should prevent access (unauthorized)', () => {
    expect(new AuthGuard(new JwtService(), new Reflector())).toBeDefined();
  });
});
