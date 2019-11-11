import { User } from './entity';

export default interface UserRepository {
    getUserAccountInfoByToken(token: string): Promise<User>;
}
