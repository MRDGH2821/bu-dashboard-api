import { User } from 'src/utils/fireorm/entities/User';

export type UserDetails = {
  discordId: string;
  accessToken: string;
  refreshToken: string;
};

export type UpdateUserDetails = {
  accessToken: string;
  refreshToken: string;
};

export type Done = (err: Error, user: User) => void;
