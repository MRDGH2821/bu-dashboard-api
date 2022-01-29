import { Inject, Injectable } from '@nestjs/common';
import { SERVICES } from '../../utils/constants';
import { IUserService } from '../../user/interfaces/user';
import { UserDetails } from 'src/utils/types';
@Injectable()
export class AuthService {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}

  async validateUser(details: UserDetails) {
    const user = await this.userService.findUser(details.discordId);
    return user || this.userService.createUser(details);
  }
}
