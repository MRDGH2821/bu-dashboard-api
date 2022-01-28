import { Inject, Injectable } from '@nestjs/common';
import { SERVICES } from '../../utils/constants';
import { IUserService } from '../../user/interfaces/user';
@Injectable()
export class AuthService {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) { }

  validateUser(){
    
  }

}
