"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, password, role, updatedAt, createdAt) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
}
exports.User = User;
