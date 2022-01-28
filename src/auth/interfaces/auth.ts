import { User } from 'src/fireorm/entities/User';
import { UserDetails } from '../../utils/types';

export interface IAuthService {
  validateUser(details: UserDetails): Promise<User>;
}
