import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    console.log('User',user);
    if (!user) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Login Failed',
      }, HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
