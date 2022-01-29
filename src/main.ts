import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Firestore } from '@google-cloud/firestore';
import { FirestoreStore } from '@google-cloud/connect-firestore';
import * as session from 'express-session';
import * as passport from 'passport';
import { getRepository } from 'fireorm';
import { Session } from './utils/fireorm/entities/Session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository = getRepository(Session);
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 86400000,
      },
      store: new FirestoreStore({
        dataset: new Firestore(),
        kind: 'express-sessions',
      }),
    }),
  );
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  app.use(passport.initialize());
  app.use(passport.session());
  try {
    await app.listen(process.env.PORT);
    console.log(`Running on: ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
