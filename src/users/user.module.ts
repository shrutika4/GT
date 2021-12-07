// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';

// @Module({
//   providers: [UserService]
// })
// export class UserModule {}
import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize';
 import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from '../users/user.model';
import { UsersService } from '../users/user.service';

@Module({
  imports:[SequelizeModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}


