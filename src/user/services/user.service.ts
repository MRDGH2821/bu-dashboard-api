import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'fireorm';

import { InjectRepository } from 'nestjs-fireorm';
import { User } from 'src/utils/fireorm/entities/User';
import { UserDetails } from 'src/utils/types';
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
}
