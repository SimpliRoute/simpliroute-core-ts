import User from '../entities/user';

export default interface UserUseCase {
  describe(): Promise<User>;
}
