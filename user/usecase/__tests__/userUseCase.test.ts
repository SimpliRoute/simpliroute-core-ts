import UserUseCase from '../userUseCase';
import UserRepository from '../../repository';

describe('User use cases', () => {
    it('Must call user repository with the given token', () => {
        const token = 'abc123';
        const userRepository: UserRepository = {
            getUserAccountInfoByToken : jest.fn()
        };
        const userUseCase = new UserUseCase(userRepository);
        userUseCase.getInfoByToken(token);
        expect(userRepository.getUserAccountInfoByToken).toHaveBeenCalledWith(token);
    });
});
