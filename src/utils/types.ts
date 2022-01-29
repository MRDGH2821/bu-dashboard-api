import { User } from 'src/utils/fireorm/entities/User';

export type UserDetails = {
  discordId: string;
};

export type Done = (err: Error, user: User) => void;
