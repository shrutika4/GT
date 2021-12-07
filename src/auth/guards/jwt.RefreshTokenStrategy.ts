import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import {Injectable, UnauthorizedException, Body} from '@nestjs/common';
import { jwtConstants } from '../constants';
import { UsersService } from 'src/users/user.service';
import  { ExtractJwt } from '@nestjs/jwt;'
 
@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy,"jwt-refreshtoken") {
  constructor(private userService:UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('accessToken'),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
      passReqToCallback:true
    });
  }
 
  async validate(req,payload: any) {
    var user = await this.userService.findOne(payload.username);
    if(!user || user.userId!=req.body.username){
        throw new UnauthorizedException();
    }
    if(req.body.refreshToken != (await user).refreshtoken){
        throw new UnauthorizedException();
    }
    if( new Date() > new Date((await user).refreshtokenexpires)){
      throw new UnauthorizedException();
    }
    return { userId: payload.sub, username: payload.username };
  }
}