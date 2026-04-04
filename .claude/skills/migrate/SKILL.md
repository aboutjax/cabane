---
name: migrate
description: Run Payload CMS migration workflow — create, verify SQL, apply, and build
---

# Migration Skill

1. Read the changed collection file to understand schema diff
2. Run `pnpm payload migrate:create`
3. Read the generated SQL migration file
4. Check for enum dependencies or foreign key issues
5. Run `pnpm payload migrate`
6. Verify with `pnpm build`

Never use migrate:reset on production. If migration fails, fix the SQL manually.
