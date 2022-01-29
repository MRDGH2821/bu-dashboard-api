import { Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user';
@Injectable()
export class UserService implements IUserService {
  constructor() {}

  createUser() {
    console.log('Create User');
  }

  findUser() {
    console.log('Find User');
  }
}
