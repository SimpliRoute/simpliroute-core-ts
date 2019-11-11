import { User } from './entity';

export default interface UserUseCase {
    describe(): Promise<User>;
}
