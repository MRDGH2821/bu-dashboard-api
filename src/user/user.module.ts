import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { SERVICES } from '../utils/constants';
@Module({
  providers: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
