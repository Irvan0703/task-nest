# Task Management API

RESTful API sederhana untuk mengelola task (tugas) berbasis **NestJS**,
**TypeORM**, dan **MySQL**. Project ini dibuat untuk memenuhi Mini
Project Backend dengan fitur Authentication, Authorization, Transaction,
dan Audit Log.

------------------------------------------------------------------------

## 🚀 Tech Stack

-   Node.js
-   TypeScript
-   NestJS
-   TypeORM
-   MySQL
-   JWT Authentication
-   Redis (optional)
-   Postman (API Documentation)

------------------------------------------------------------------------

## 📌 Fitur Utama

### ✅ Authentication & Authorization

-   Login menggunakan JWT
-   Role-based access (`ADMIN`, `USER`)
-   Guard & Decorator (`JwtAuthGuard`, `RolesGuard`)

### ✅ Task Management

-   User dapat membuat task
-   User hanya bisa melihat task miliknya
-   Admin dapat melihat semua task

### ✅ Database Relational

-   Relasi **User → Tasks (One-to-Many)**
-   Foreign key constraint

### ✅ Transaction & Audit Log

-   Create Task + Insert Audit Log dalam **1 transaction**
-   Rollback otomatis jika salah satu proses gagal

### ✅ API Documentation

-   Menggunakan **Postman Collection**
-   Siap import dan testing

------------------------------------------------------------------------

## 📂 Struktur Folder

    src/
     ├── auth/
     ├── users/
     ├── tasks/
     ├── audit/
     ├── database/
     └── main.ts
    postman/
     └── task-management-api.postman_collection.json

------------------------------------------------------------------------

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

``` bash
git clone https://github.com/username/task-management-api.git
cd task-management-api
```

### 2️⃣ Install Dependency

``` bash
npm install
```

### 3️⃣ Setup Environment

Buat file `.env`:

``` env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=task_management_db

JWT_SECRET=secret123
JWT_EXPIRES_IN=1d
```

### 4️⃣ Jalankan Database

Pastikan MySQL sudah berjalan dan database sudah dibuat:

``` sql
CREATE DATABASE task_management_db;
```

### 5️⃣ Run Application

``` bash
npm run start:dev
```

Server berjalan di:

    http://localhost:3000

------------------------------------------------------------------------

## 🔐 Authentication

### Login

    POST /auth/login

Request Body:

``` json
{
  "email": "admin@test.com",
  "password": "123456"
}
```

Response:

``` json
{
  "access_token": "JWT_TOKEN"
}
```

Gunakan token ini untuk endpoint protected.

------------------------------------------------------------------------

## 📝 Task API

### Create Task (USER / ADMIN)

    POST /tasks
    Authorization: Bearer <JWT_TOKEN>

``` json
{
  "title": "Belajar NestJS",
  "description": "Transaction & Audit Log"
}
```

### Get My Tasks (USER)

    GET /tasks/me

### Get All Tasks (ADMIN)

    GET /tasks

------------------------------------------------------------------------

## 📘 API Documentation (Postman)

-   Import file:

```{=html}
<!-- -->
```
    postman/task-management-api.postman_collection.json

-   Gunakan environment:

```{=html}
<!-- -->
```
    base_url = http://localhost:3000
    access_token = <JWT>

------------------------------------------------------------------------

## 🧪 Testing

-   Semua endpoint dapat diuji menggunakan Postman
-   Transaction dapat diuji dengan simulasi error untuk memastikan
    rollback

------------------------------------------------------------------------

## 📌 Catatan

-   `synchronize: true` hanya digunakan untuk development
-   Untuk production disarankan menggunakan migration

------------------------------------------------------------------------

## 👨‍💻 Author

Muhamad Irfanul Hadi

------------------------------------------------------------------------

## ✅ Status Project

✔ Authentication & Authorization\
✔ Role-Based Access\
✔ Relational Database\
✔ Transaction & Audit Log\
✔ Postman Documentation\
