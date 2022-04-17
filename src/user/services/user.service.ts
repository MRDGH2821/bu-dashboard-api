import { Injectable } from '@nestjs/common';
import { refreshToken } from 'firebase-admin/app';
import { IBaseRepository } from 'fireorm';

import { InjectRepository } from 'nestjs-fireorm';
import { User } from 'src/utils/fireorm/entities/User';
import { UpdateUserDetails, UserDetails } from 'src/utils/types';
import { IUserService } from '../interfaces/user';
@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: IBaseRepository<User>,
  ) {}

  async createUser(details: UserDetails) {
    console.log('Creating User: ', details);
    //    console.log(details);
    const dat = new User();
    dat.id = details.discordId;
    dat.discordId = details.discordId;
    const newUser = await this.userRepository.create(dat);
    return this.userRepository.findById(newUser.id);
  }

  findUser(discordId: string) {
    console.log('Finding User: ', discordId);
    return this.userRepository.findById(discordId);
  }

  updateUser(user: User, details: UpdateUserDetails) {
    console.log('Update user');
    const data = {
      id: user.discordId,
      accessToken: details.accessToken;
      refreshToken: details.refreshToken
    }
    return this.userRepository.update(data);
  }
}
