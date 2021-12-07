// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AuthService {}
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
var randtoken = require('rand-token');
@Injectable()
export class AuthService {
  
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);    
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    const refreshGenToken=await this.generateRefreshToken(user.username);
    return {
      access_token: this.jwtService.sign(payload),
      refreshToken: refreshGenToken
    };
  }
  async generateRefreshToken(userId):  Promise<string>{
    var refreshToken = randtoken.generate(16);
    var expirydate =new Date();
    expirydate.setDate(expirydate.getDate() + 6);
    await this.usersService.saveorupdateRefreshToken(refreshToken, userId, expirydate);
    return refreshToken;
  }
}


