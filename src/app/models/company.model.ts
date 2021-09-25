import { User } from './user.model';

export class Company {
    constructor(
        public id?: number,
        public name?: string,
        public user?: User) {
    }
}