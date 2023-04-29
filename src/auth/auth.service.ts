import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(login: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ where: { login } });
    if (user === null || !await bcrypt.compare(pass, user.password)) {
      throw new UnauthorizedException();
    }
    const payload = { login: user.login, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
