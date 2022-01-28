import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Firestore } from '@google-cloud/firestore';
import { FirestoreStore } from '@google-cloud/connect-firestore';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: process.env.COOKIES_SECRET,
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
  try {
    await app.listen(process.env.PORT);
    console.log(`Running on: ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
