export class User {
    constructor (
        public readonly id:string,
        public email:string,
        public password:string,
        public role:'admin'| 'parent' | 'teacher' | 'student',
        public updatedAt:Date,
        public createdAt:Date
    ) {}
}