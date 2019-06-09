import User from '../../entities/user';

import UserRepository from '../repository';
import UseCase from '../usecase';

export default class UserUseCase implements UseCase {
    constructor(private userRepository: UserRepository) {}

    getInfoByToken(token: string): Promise<User> {
        return this.userRepository.getUserAccountInfoByToken(token);
    }
}
