import { Collection } from 'fireorm';

@Collection()
export class Session {
  id: string;
  expiredAt: number;
  json = '';
}
