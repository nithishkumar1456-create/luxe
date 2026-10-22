# LUXE VASTRA Digital Platform

Single Source of Truth Implementation Architecture (`LVF-SSOT-001`).

---

## 1. System Architecture Overview

LUXE VASTRA Digital Platform is an integrated enterprise system for luxury fashion retail, bespoke showroom client management, atelier production traceability, and event orchestration (Grand Couture Week).

The platform is designed around a decoupled, 3-tier system architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend Layer                         │
│   React 19.2.x · Vite 7.x · React Router 7.x · Axios 1.x    │
│  (Role-based UI: Customer, Showroom, Admin, Designer, etc.) │
└──────────────────────────────┬──────────────────────────────┘
                               │ HTTPS / JSON REST API
┌──────────────────────────────▼──────────────────────────────┐
│                      Backend Layer                          │
│        Node.js 24 LTS · Express 5.1.x · Zod 4.x             │
│   (Route -> Controller -> Service -> Authoritative Rules)   │
└──────────────────────────────┬──────────────────────────────┘
                               │ Prisma ORM 6.x
┌──────────────────────────────▼──────────────────────────────┐
│                      Database Layer                         │
│                    PostgreSQL 18.x                          │
│     (Immutable Ledger, Strict Relations & UUID Keys)        │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Standardized Technology Stack & Versions

All team members must adhere strictly to these locked version boundaries:

### Frontend
- **React**: `19.2.x`
- **React DOM**: `19.2.x`
- **JavaScript**: `ES2024+` (No TypeScript without prior formal approval)
- **Vite**: `7.x`
- **React Router**: `7.x`
- **Axios**: `1.x`

### Backend
- **Node.js**: `24.x LTS`
- **npm**: `11.x`
- **Express.js**: `5.1.x`
- **JavaScript**: `ES2024+`
- **Zod**: `4.x`

### Database
- **PostgreSQL**: `18.x`
- **Prisma ORM**: `6.x`

### Code Quality & Tooling
- **ESLint**: `9.x` (Flat config format)
- **Prettier**: `3.x`
- **Git**: Latest Stable
- **VS Code**: Latest Stable

---

## 3. Important Team Rules

1. **Node.js 24 LTS**: Everyone must run Node.js 24 LTS and npm 11.
2. **Version Lock**: Do not change package versions without explicit team approval.
3. **Commit Lockfile**: Always commit `package-lock.json`.
4. **Clean Installs**: Use `npm ci` after cloning or pulling the repository.
5. **Architectural Conventions**: Follow folder structures, naming conventions (database: `snake_case`, API: `camelCase`, components: `PascalCase`), and architectural boundaries.
6. **Git Workflow**: All developers must work through feature branches (`feature/xxx`) and Pull Requests.
7. **Protected Main**: No direct commits to `main` (production) or `develop` (integration).
8. **Prisma Migrations**: All database schema changes must be applied via Prisma migrations (`prisma migrate dev`).
9. **Consistent JavaScript**: Maintain pure ES2024+ JavaScript; do not introduce TypeScript without approval.
10. **Environment Match**: Verify local development environment matches required versions prior to task execution.

---

## 4. Directory Structure

```
luxe/
├── frontend/             # Client application (Vite 7, React 19.2, React Router 7)
│   ├── src/
│   │   ├── components/   # Atomic UI components (Button, Modal, Table, Form, Navbar, Sidebar)
│   │   ├── layouts/      # CustomerLayout, AdminLayout
│   │   ├── pages/        # Ecom, Showroom, Connect, Admin, Event pages
│   │   ├── routes/       # Centralized route definitions with auth/role guards
│   │   ├── services/     # Axios API client & domain services
│   │   ├── store/        # State store (Session & Cart Count)
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # Token storage, formatters, constants
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── backend/              # REST API server (Node 24, Express 5.1, Zod 4)
│   ├── src/
│   │   ├── config/       # Environment & database client configuration
│   │   ├── controllers/  # Request handlers (input delegators)
│   │   ├── middlewares/  # authenticate, authorize, validate, errorHandler
│   │   ├── routes/       # API route declarations
│   │   ├── services/     # Authoritative business logic layer
│   │   ├── validators/   # Zod request schemas
│   │   ├── utils/        # Response envelope, JWT helpers, logger
│   │   ├── app.js        # Express app configuration
│   │   └── server.js     # Server entry point
│   ├── package.json
│   └── eslint.config.js
│
└── database/             # Data Layer (PostgreSQL 18, Prisma ORM 6)
    ├── prisma/
    │   ├── schema.prisma # Authoritative PostgreSQL domain schema
    │   ├── migrations/   # Version-controlled SQL migrations
    │   └── seed.js       # Database initialization & seed skeleton
    ├── package.json
    └── README.md
```
