import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { UserModule } from './user/user.module';
import { credential } from 'firebase-admin';
import { FireormModule } from 'nestjs-fireorm';
import { entities } from './fireorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),

    FireormModule.forRoot({
      firestoreSettings: {
        projectId: process.env.FIRESTORE_PROJECT_ID,
        credential: credential.applicationDefault(),
      },
      fireormSettings: { validateModels: true },
    }),
    FireormModule.forFeature(entities),
    AuthModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
