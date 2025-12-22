export class User {
    constructor (
        private readonly id:string,
        private email:string,
        private password:string,
        private role:'admin'| 'parent' | 'teacher' | 'student',
        private updatedAt:Date,
        private createdAt:Date
    ) {}
}