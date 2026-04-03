import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Step 1: Drop defaults and convert enum columns to text
  await db.execute(sql`
  ALTER TABLE "pages" ALTER COLUMN "hero_type" DROP DEFAULT;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" DROP DEFAULT;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;`)

  // Step 2: Rename splash → blob and drop old enum types
  await db.execute(sql`
  UPDATE "pages" SET "hero_type" = 'blob' WHERE "hero_type" = 'splash';
  UPDATE "_pages_v" SET "version_hero_type" = 'blob' WHERE "version_hero_type" = 'splash';
  DROP TYPE IF EXISTS "public"."enum_pages_hero_type";
  DROP TYPE IF EXISTS "public"."enum__pages_v_version_hero_type";`)

  // Step 3: Recreate enum types with blob and convert columns back
  await db.execute(sql`
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'blob');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'blob');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";`)

  // Step 4: Create OurProcess tables
  await db.execute(sql`
  CREATE TABLE IF NOT EXISTS "pages_blocks_our_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer
  );

  CREATE TABLE IF NOT EXISTS "pages_blocks_our_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Process',
  	"sub_heading" varchar DEFAULT 'Structured, iterative framework used to solve complex problems and create user-centered products or services',
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_our_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );

  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_our_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Process',
  	"sub_heading" varchar DEFAULT 'Structured, iterative framework used to solve complex problems and create user-centered products or services',
  	"_uuid" varchar,
  	"block_name" varchar
  );`)

  // Step 5: Add constraints and indexes
  await db.execute(sql`
  DO $$ BEGIN
    ALTER TABLE "pages_blocks_our_process_steps" ADD CONSTRAINT "pages_blocks_our_process_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  DO $$ BEGIN
    ALTER TABLE "pages_blocks_our_process_steps" ADD CONSTRAINT "pages_blocks_our_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_our_process"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  DO $$ BEGIN
    ALTER TABLE "pages_blocks_our_process" ADD CONSTRAINT "pages_blocks_our_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_our_process_steps" ADD CONSTRAINT "_pages_v_blocks_our_process_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_our_process_steps" ADD CONSTRAINT "_pages_v_blocks_our_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_our_process"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_our_process" ADD CONSTRAINT "_pages_v_blocks_our_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_process_steps_order_idx" ON "pages_blocks_our_process_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_process_steps_parent_id_idx" ON "pages_blocks_our_process_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_process_steps_image_idx" ON "pages_blocks_our_process_steps" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_process_order_idx" ON "pages_blocks_our_process" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_process_parent_id_idx" ON "pages_blocks_our_process" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_process_path_idx" ON "pages_blocks_our_process" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_process_steps_order_idx" ON "_pages_v_blocks_our_process_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_process_steps_parent_id_idx" ON "_pages_v_blocks_our_process_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_process_steps_image_idx" ON "_pages_v_blocks_our_process_steps" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_process_order_idx" ON "_pages_v_blocks_our_process" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_process_parent_id_idx" ON "_pages_v_blocks_our_process" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_process_path_idx" ON "_pages_v_blocks_our_process" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_our_process_steps" CASCADE;
  DROP TABLE "pages_blocks_our_process" CASCADE;
  DROP TABLE "_pages_v_blocks_our_process_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_our_process" CASCADE;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::"public"."enum_pages_hero_type";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";`)
}
