import User from '../entities/User';

export default interface UserUseCase{
    getInfoByToken(token: string): Promise<User>;
}
