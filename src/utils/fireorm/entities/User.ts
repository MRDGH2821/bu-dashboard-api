import { Collection } from 'fireorm';

@Collection('users')
export class User {
  id: string; //firebase auto generated
  discordId: string;
  accessToken: string;
  refreshToken: string;
}
