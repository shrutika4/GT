// import { Controller } from '@nestjs/common';

// @Controller('user')
// export class UserController {}
// import { Body, Controller, Post,Query,Request, UseGuards } from "@nestjs/common";
// import { ApiTags } from "@nestjs/swagger";

import { AuthService } from "src/auth/auth.service";
import { JwtRefreshAuthGuard } from "src/auth/guards/jwt-refresh.auth.guard";
import { LocalAuthGuard, } from "src/auth/guards/local-auth.guard";
//import { LoginDto, RefreshDto } from "./dto/login.dto";
import { Body, Post, UseGuards } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import { Extract} from "@nestjs/jwt"


@ApiTags('Auth')
@Controller('v1/user/auth')
export class UsersController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Body() query: LoginDto) {
      console.log('query',query);
      return this.authService.login(query);
    }

    @UseGuards(JwtRefreshAuthGuard)
    @Post('/refreshtoken')
    async refreshToken(@Body() query: RefreshDto){
      return await this.authService.login(query);
    }
}

