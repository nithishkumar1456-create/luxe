/**
 * LUXE VASTRA Digital Platform - Database Seeder Skeleton
 * Establishes baseline system roles and default system permissions
 * as specified in LVF-SSOT-001 Section 3 and Section 12.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Standard System Roles as defined by SSOT Section 3
 */
const SYSTEM_ROLES = [
  { code: 'CUSTOMER', name: 'Customer', description: 'Browse and purchase' },
  { code: 'VIP_CUSTOMER', name: 'VIP Customer', description: 'Private client VIP experience' },
  { code: 'DESIGNER', name: 'Designer', description: 'Manage collections and samples' },
  { code: 'CREATIVE_DIRECTOR', name: 'Creative Director', description: 'Approve collection direction' },
  { code: 'PRODUCTION_MANAGER', name: 'Production Manager', description: 'Garment manufacturing execution' },
  { code: 'INVENTORY_MANAGER', name: 'Inventory Manager', description: 'Stock, warehouses and transfers' },
  { code: 'WAREHOUSE_MANAGER', name: 'Warehouse Manager', description: 'Bin locations and dispatch' },
  { code: 'QC_MANAGER', name: 'QC Manager', description: 'Quality inspection and approvals' },
  { code: 'MARKETING_MANAGER', name: 'Marketing Manager', description: 'Campaigns and media' },
  { code: 'EVENT_MANAGER', name: 'Event Manager', description: 'Grand Couture Week management' },
  { code: 'FINANCE', name: 'Finance', description: 'Invoices, payments, financial reports' },
  { code: 'HR', name: 'Human Resources', description: 'Employee master and department records' },
  { code: 'ADMIN', name: 'Admin', description: 'Operational administration' },
  { code: 'SUPER_ADMIN', name: 'Super Admin', description: 'Full platform governance' }
];

async function main() {
  console.log('[Seed] Seeding system architecture baseline roles...');
  for (const role of SYSTEM_ROLES) {
    await prisma.role.upsert({
      where: { code: role.code },
      update: {},
      create: {
        code: role.code,
        name: role.name,
        description: role.description,
        isSystem: true
      }
    });
  }
  console.log('[Seed] Baseline roles seeded successfully.');
}

main()
  .catch((e) => {
    console.error('[Seed Error]:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
