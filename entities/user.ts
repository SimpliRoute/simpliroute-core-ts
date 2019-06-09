import Account from './Account';

export default interface User {
    id: number;
    username: string;
    name: string;
    phone: string;
    email: string;
    created: string;
    modified: string;
    lastLogin: string;
    account?: Account;
}
