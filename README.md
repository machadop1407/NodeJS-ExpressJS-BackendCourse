# Complete Backend Course | NodeJS, ExpressJS, JWT, Prisma, PostgreSQL

<div align="center">

<br />

<a href="https://youtu.be/RZ6Rk_g2GLY" target="_blank">

   <img width="1280" height="720" alt="Complete Backend Course | NodeJS, ExpressJS, JWT, Prisma, PostgreSQL" src="./banner.png" />

</a>

<br />

<div>

<img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />

<img src="https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />

<img src="https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=jsonwebtoken&logoColor=white" alt="JWT" />

<img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />

<img src="https://img.shields.io/badge/-PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />

<img src="https://img.shields.io/badge/-Zod-3E63DD?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />

</div>

<h3 align="center">Build a Complete Backend API with Authentication, Movie Management & Watchlist Features</h3>

<div align="center">

Follow the full video tutorial on <a href="https://youtu.be/RZ6Rk_g2GLY" target="_blank"><b>YouTube</b></a>

</div>

<br />

</div>

## 📋 Table of Contents

1. [Introduction](#-introduction)

2. [Tech Stack](#-tech-stack)

3. [Features](#-features)

4. [Quick Start](#-quick-start)

5. [API Endpoints](#-api-endpoints)

6. [Database Schema](#-database-schema)

7. [Deployment](#-deployment)

8. [Course & Channel](#-course--channel)

---

## 🚀 Introduction

In this comprehensive backend course, you'll learn how to build a **complete RESTful API** from scratch using **Node.js**, **Express.js**, and modern backend development practices. This video walks you through building:

1. **User Authentication System** - Secure registration, login, and JWT-based authentication

2. **Movie Management API** - Full CRUD operations for movie data

3. **Watchlist Feature** - Personal watchlist with status tracking and ratings

Perfect for developers looking to master backend development, learn API design, implement authentication, work with databases using Prisma ORM, and build production-ready backend applications.

🎥 **Watch the full tutorial**: [YouTube](https://youtu.be/RZ6Rk_g2GLY)

---

## ⚙️ Tech Stack

- **Node.js** – JavaScript runtime for server-side development

- **Express.js** – Fast, minimalist web framework for Node.js

- **JWT (JSON Web Tokens)** – Secure authentication and authorization

- **Prisma** – Next-generation ORM for database management

- **PostgreSQL** – Powerful, open-source relational database

- **Zod** – TypeScript-first schema validation library

- **bcryptjs** – Password hashing for secure user authentication

- **dotenv** – Environment variable management

---

## ⚡️ Features

### 🔐 Authentication System

- 📝 **User Registration** - Secure user signup with email validation

- 🔑 **User Login** - JWT-based authentication with token generation

- 🚪 **User Logout** - Token invalidation and session management

- 🔒 **Password Hashing** - Secure password storage using bcryptjs

- 🛡️ **Protected Routes** - Middleware-based route protection

### 🎬 Movie Management

- 📋 **CRUD Operations** - Create, read, update, and delete movies

- 🎯 **Movie Details** - Store title, overview, release year, genres, runtime, and poster URLs

- 👤 **User Association** - Track which user created each movie

- 🔍 **Query Support** - Filter and search movie data

### 📺 Watchlist System

- ➕ **Add to Watchlist** - Save movies to personal watchlist

- 📊 **Status Tracking** - Track watch status (Planned, Watching, Completed, Dropped)

- ⭐ **Rating System** - Rate movies with optional notes

- 🗑️ **Remove Items** - Delete movies from watchlist

- ✏️ **Update Items** - Modify watchlist item status and ratings

### 🛠️ Additional Features

- ✅ **Request Validation** - Zod schema validation for all endpoints

- 🚨 **Error Handling** - Centralized error handling middleware

- 🔐 **JWT Middleware** - Automatic token verification for protected routes

- 🗄️ **Database Migrations** - Prisma migrations for schema management

- 🌱 **Database Seeding** - Seed script for initial data

---

## 👌 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)

- [PostgreSQL](https://www.postgresql.org/) (v14 or higher)

- [Git](https://git-scm.com/)


# ⚠️ Upgrading This Project to Prisma ORM v7

Prisma ORM **v7 introduces breaking changes** that affect how this backend project works.
If you want to use Prisma v7 instead of v6 (used in the original tutorial), you must apply **all changes below**.

---

## 🔧 1. Install Prisma v7 Packages

```bash
npm install @prisma/client@7
npm install -D prisma@7
npm install @prisma/adapter-pg dotenv
```

---

## 🔧 2. Enable ESM in `package.json` (Required)

Prisma v7 is **ESM-only**.

```json
{
  "type": "module"
}
```

---

## 🔧 3. Update Your Prisma Schema

Replace the old generator:

```prisma
generator client {
  provider = "prisma-client-js"
  engineType = "binary"
}
```

With the new v7 version:

```prisma
generator client {
  provider = "prisma-client-js"
}
```

---

## 🔧 4. Create `prisma.config.ts` (Required in v7)

Create this file at the project root:

```ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})
```

Prisma v7 no longer reads connection URLs from the schema.

---

## 🔧 5. Update Prisma Client Instantiation

**Old (v4–v6):**

```js
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
```

**New (Prisma v7):**

```js
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

export const prisma = new PrismaClient({ adapter });
```

This is required across your project wherever Prisma Client is created.

---

## 🔧 6. Load `.env` Manually

Prisma v7 **does not** automatically load `.env`.

Install dotenv:

```bash
npm install dotenv
```

Add to your entry file (e.g., `server.js`):

```js
import "dotenv/config";
```

---

## 🔧 7. Update Node.js Version

| Requirement       | Recommended |
| ----------------- | ----------- |
| Node **20.19.0+** | Node 22.x   |

Prisma v7 will not run on older Node versions.

---

## 🔧 8. Removed APIs You Might Be Using

### ❌ `prisma.$use()` middleware

→ Replace with client extensions:

```js
const prisma = new PrismaClient().$extends({
  query: {
    user: {
      async findMany({ args, query }) {
        return query(args);
      }
    }
  }
});
```

### ❌ Metrics API removed

If you used `$metrics`, it no longer exists.

---

## ✔️ Summary of Required Changes

| Change                       | Required  |
| ---------------------------- | --------- |
| Update dependencies          | ✅         |
| ESM mode                     | ✅         |
| New Prisma generator         | ✅         |
| Add driver adapter           | ✅         |
| Create `prisma.config.ts`    | ✅         |
| Load `.env` manually         | ✅         |
| Update client instantiation  | ✅         |
| Replace middleware (if used) | As needed |
| Update Node version          | Yes       |


### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/backend-course.git
cd backend-course
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
JWT_SECRET="your-super-secret-jwt-key"
PORT=5001
```

4. **Set up the database**

```bash
# Run Prisma migrations
npx prisma migrate dev

# (Optional) Seed the database with sample data
npm run seed:movies
```

5. **Start the development server**

```bash
npm run dev
```

The API will be available at: [http://localhost:5001](http://localhost:5001)

---

## 🔌 API Endpoints

### Authentication Routes

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and receive JWT token
- `POST /auth/logout` - Logout (invalidate token)

### Movie Routes

- `GET /movies` - Get all movies
- `POST /movies` - Create a new movie
- `PUT /movies/:id` - Update a movie
- `DELETE /movies/:id` - Delete a movie

### Watchlist Routes (Protected)

- `POST /watchlist` - Add movie to watchlist
- `PUT /watchlist/:id` - Update watchlist item
- `DELETE /watchlist/:id` - Remove movie from watchlist

---

## 🗄️ Database Schema

### User Model

- `id` - Unique identifier (UUID)
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password
- `createdAt` - Account creation timestamp

### Movie Model

- `id` - Unique identifier (UUID)
- `title` - Movie title
- `overview` - Movie description
- `releaseYear` - Year of release
- `genres` - Array of genre strings
- `runtime` - Movie duration in minutes
- `posterUrl` - URL to movie poster image
- `createdBy` - User ID of creator
- `createdAt` - Creation timestamp

### WatchlistItem Model

- `id` - Unique identifier (UUID)
- `userId` - Reference to User
- `movieId` - Reference to Movie
- `status` - Watch status (PLANNED, WATCHING, COMPLETED, DROPPED)
- `rating` - Optional rating (1-10)
- `notes` - Optional personal notes
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

---

## ☁️ Deployment

### Deploy on Railway

1. Push your code to GitHub

2. Go to [railway.app](https://railway.app)

3. Create a new project and import your repository

4. Add PostgreSQL service

5. Set environment variables:
   - `DATABASE_URL` (automatically provided by Railway)
   - `JWT_SECRET` (generate a secure random string)
   - `PORT` (Railway will set this automatically)

6. Deploy your application

Your API will be live on a custom Railway subdomain!

### Alternative Deployment Options

- [Render](https://render.com/) - Full-stack deployment with PostgreSQL

- [Heroku](https://www.heroku.com/) - Platform-as-a-service deployment

- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform) - Simple app deployment

- [AWS](https://aws.amazon.com/) - Enterprise-grade cloud hosting

---

## 🎓 Course & Channel

### Learn More with Pedro Technologies

- 🌐 **Course Website**: [www.webdevultra.com](https://www.webdevultra.com)

- 📺 **YouTube Channel**: [@pedrotechnologies](https://www.youtube.com/@pedrotechnologies)

Follow along for more backend tutorials, full-stack development, and practical coding projects!

---

## 🔗 Useful Links

- [Node.js Documentation](https://nodejs.org/docs)

- [Express.js Documentation](https://expressjs.com/)

- [Prisma Documentation](https://www.prisma.io/docs)

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

- [JWT.io](https://jwt.io/) - JWT token decoder and debugger

- [Zod Documentation](https://zod.dev/)

- [Railway Deployment Guide](https://docs.railway.app/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

