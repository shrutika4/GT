import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
//import { Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';
import { ExtractJwt } from '@nestjs/jwt';
import { Strategy } from 'passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'accessToken') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    console.log("JWT Validate payload",payload);
    return { userId: payload.sub, username: payload.username };
  }
}