## Project Overview

This is a Payload CMS + Next.js project using TypeScript and PostgreSQL. When modifying collections or fields, always consider the migration impact — never assume migrations will work on first try. After schema changes, run `pnpm payload migrate:create` and verify the SQL before applying.

## Images / Media

When fixing images in Next.js, always check if width/height dimensions are available before using sized mode. If dimensions are missing, use `fill` mode with a positioned container. Never use CSS cropping when Payload has built-in image sizes available.

## Database Migrations

When renaming or removing enum values, fields, or collections in Payload CMS, check for foreign key and enum dependencies in PostgreSQL first. Use `DROP TYPE IF EXISTS ... CASCADE` cautiously and always have a rollback plan. Never use `migrate:reset` on production data.
