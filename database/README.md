# Database Architecture - LUXE VASTRA Digital Platform

- **Engine**: PostgreSQL 18.x
- **ORM**: Prisma ORM 6.x
- **Primary Schema Reference**: `LVF-SSOT-001 Section 12`

---

## 1. Architectural Rules

1. **System of Record**: PostgreSQL 18.x is the sole authority for inventory balances, orders, payments, quality decisions, and event registers.
2. **Key Strategy**: All primary keys are UUIDs generated server-side or via `@default(uuid())`.
3. **Monetary Precision**: Money values strictly utilize `@db.Decimal(12, 2)` (never IEEE floating point).
4. **Time & Audit**: All timestamps are stored in UTC using `@db.Timestamptz`. Audit fields (`created_at`, `updated_at`, `created_by`) are enforced on operational models.
5. **No Direct Production Edits**: All schema alterations must be applied through standard Prisma migrations.

---

## 2. Core Domain Models

- **Identity & Roles**: `users`, `roles`, `permissions`, `user_roles`, `role_permissions`
- **Customer & CRM**: `customers`, `customer_addresses`, `showroom_visits`
- **Catalogue & Hierarchy**: `categories`, `products`, `product_variants`, `product_images`
- **Connect Fashions**: `collections`, `fashion_links`
- **Textile & Production**: `fabric_batches`, `production_orders`, `production_steps`
- **Quality Control**: `quality_inspections` (7-point inspection + decision gate)
- **Inventory & Showrooms**: `warehouses`, `inventory`, `inventory_transactions` (ledger-backed)
- **Ecommerce & In-Store Sales**: `carts`, `cart_items`, `wishlists`, `orders`, `order_items`, `payments`, `shipments`, `order_returns`
- **Grand Couture Week Events**: `events`, `event_milestones`, `event_team_assignments`, `event_guests`, `event_invitations`, `event_registrations`, `event_tasks`, `event_looks`
- **Audit & Notification**: `notifications`, `audit_logs`

---

## 3. Migration and Seed Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Create and apply new migration in development
npm run prisma:migrate -- --name init_schema

# Apply migrations on staging / production
npm run prisma:deploy

# Launch Prisma Studio GUI
npm run prisma:studio

# Run database seed skeleton
npm run prisma:seed
```
