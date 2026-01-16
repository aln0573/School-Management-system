🏫 School Management System (B2B SaaS)

A multi-tenant B2B SaaS School Management System built using Clean Architecture, designed to manage multiple schools with strict role-based access control.
Each school acts as a tenant, with isolated data and its own users (Admins, Teachers, Students, Parents), managed by a Super Admin (platform owner).



🚀 Features

🔐 Authentication & Authorization

JWT-based authentication
Secure cookie-based auth (HttpOnly)
Role-based authorization
Single login UI for all roles

🏢 Multi-Tenant Architecture

Super Admin creates and manages schools
Each school has isolated data
Users operate strictly within their school

👥 Role Management

Super Admin – platform owner
School Admin – manages school users
Teacher
Student
Parent

✅ Validation & Security

Request validation using Zod
Password hashing with bcrypt
Centralized authorization middleware

🧠 Architecture Overview

This project follows Clean Architecture principles:

src/
├─ domain/ # Core business logic (entities, interfaces)
├─ application/ # Use-cases (business rules)
├─ infrastructure/ # Database & external services
├─ presentation/ # Controllers, routes, validators
└─ di/ # Dependency Injection

Why Clean Architecture?

Framework-independent business logic
Easy to test and maintain
Scales well for large systems
Clear separation of concerns

🧩 Tech Stack

Backend: Node.js, Express, TypeScript
Database: MongoDB (Mongoose)
Authentication: JWT (HttpOnly Cookies)
Validation: Zod
Dependency Injection: tsyringe
Architecture: Clean Architecture

🔐 Authentication Flow

User logs in via /api/auth/login
Server validates credentials
JWT is generated and stored in an HttpOnly cookie
Cookie is automatically sent with each request
Middleware verifies JWT and attaches user info to request

🧑‍💼 Authorization Model
Role Permissions
Super Admin Create & manage schools
School Admin Manage teachers, students, parents
Teacher Access assigned academic data
Student View personal academic data
Parent View child-related data

🏢 Multi-School (Tenant) Flow
Super Admin
↓
Creates School
↓
School Admin
↓
Creates Teachers / Students / Parents
↓
Users operate inside their school only

Each request is validated using schoolId to ensure tenant isolation.

📂 Project Structure (Detailed)
presentation/
├─ controllers/
│ ├─ AuthController.ts
│ ├─ UserController.ts
│ └─ SchoolController.ts
│
├─ routes/
│ ├─ auth.routes.ts
│ ├─ user.routes.ts
│ └─ super-admin/
│ └─ school.routes.ts
│
├─ middlewares/
│ ├─ authenticate.ts
│ └─ authorize.ts
│
└─ validators/
├─ auth.validator.ts
└─ user.validator.ts

▶️ Running the Project
Install dependencies
npm install

Start development server
npm run dev

🌱 Seeding Super Admin (One-Time)
npm run seed:super-admin

This creates the initial Super Admin account.
The script is meant to run only once.

📌 API Endpoints (Sample)
Auth
POST /api/auth/login

Super Admin
POST /api/super-admin/schools

School Admin
POST /api/users

🔒 Security Practices

HttpOnly cookies to prevent XSS
Password hashing with bcrypt
No sensitive data stored in JWT payload
Role-based & tenant-based access control

🧠 Learning Outcomes

This project demonstrates:

Clean Architecture in real applications
Multi-tenant SaaS design
Secure authentication & authorization
Scalable backend structure
Industry-standard backend practices

📈 Future Enhancements

Refresh token implementation
Email onboarding for schools
Audit logs for Super Admin
Subscription & billing module
Pagination & filtering
Global error handler

👨‍💻 Author

Afrid KH
Backend Developer | MERN Stack
Focused on scalable backend systems and clean architecture

⭐ Final Note

This project is built with real-world scalability and security in mind and reflects production-level backend design, not just a demo application.
