import User from '../entities/User';

export default interface UserUseCase {
    describe(): Promise<User>;
};
