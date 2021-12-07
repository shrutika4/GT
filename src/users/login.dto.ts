import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {  
  
    @ApiProperty({
      description: 'User Id',
      required: true,
    })
    username: string;
  
    @ApiProperty({
      description: 'Password',
      required: true,
    })
    password: string;
  }
  export class RefreshDto {

    @ApiProperty({
      description: 'User Id',
      required: true,
    })
    username: string;

    @ApiProperty({
      description: 'accessToken',
      required: true,
    })
    accessToken: string;
    
    @ApiProperty({
      description: 'refreshToken',
      required: true,
    })
    refreshToken: string;
  }