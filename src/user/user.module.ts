import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { SERVICES } from '../utils/constants';
import { FireormModule } from 'nestjs-fireorm';
import { User } from 'src/utils/fireorm/entities/User';
@Module({
  imports: [FireormModule.forFeature([User])],
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
