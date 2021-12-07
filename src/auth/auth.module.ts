// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';

// @Module({
//   providers: [AuthService],
//   controllers: [AuthController]
// })
//export class AuthModule {}
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/user.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtRefreshTokenStrategy } from '../auth/guards/jwt.RefreshTokenStrategy';
import { JwtStrategy } from '../auth/guards/jwt.strategy';
import { LocalStrategy } from '../auth/guards/local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '900s' },
    }),
  ],
  providers: [AuthService, LocalStrategy,JwtStrategy,JwtRefreshTokenStrategy],
  exports: [AuthService],
})
export class AuthModule {}

