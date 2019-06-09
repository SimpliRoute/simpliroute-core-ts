import User from '../entities/user';

export default interface UserRepository {
    getUserAccountInfoByToken(token: string): Promise<User>;
}
