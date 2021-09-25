import { User } from './user.model';

export class Customer {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public user?: User) {
    }
}
