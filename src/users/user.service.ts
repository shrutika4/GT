
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../users/user.model';




@Injectable()
export class UsersService {
constructor(@InjectModel(Users) private users: typeof Users) {}

async findOne(username: string) {
  const user = await this.users.findOne({
    where: {
      userId: username,
      isActive: true
    }
  });
  return user;
}
async saveorupdateRefreshToken(refreshToken:string,id,refreshtokenexpires){
  await this.users.update(
    {refreshtoken:refreshToken, refreshtokenexpires:refreshtokenexpires},
    {where: { userId: id } });
 }
}

