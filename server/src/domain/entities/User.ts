export type UserRole = 'admin'| 'parent' | 'teacher' | 'student';


export class User {
    constructor (
        private readonly id:string,
        private email:string,
        private password:string,
        private role:UserRole,
        private createdAt:Date,
        private updatedAt:Date
    ) {
        this.validate();
    }

    private validate(){
        if(!this.email.includes("@")){
            throw new Error('Invalid email format');
        }
    }

    changePassword(newPassword:string) {
        if(newPassword.length<6){
            throw new Error("Password must be at least 6 characters");
        }

        this.password = newPassword;
        this.updatedAt = new Date();
    }

    changeRole(role:UserRole){
        this.role = role;
        this.updatedAt = new Date();
    }


    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getRole() {
        return this.role;
    }

    getCreatedAt() {
        return this.createdAt;
    }

}