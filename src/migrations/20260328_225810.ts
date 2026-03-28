import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_archive_relation_to" ADD VALUE 'projects';
  ALTER TYPE "public"."enum__pages_v_blocks_archive_relation_to" ADD VALUE 'projects';
  ALTER TABLE "projects" DROP CONSTRAINT "projects_folder_id_payload_folders_id_fk";
  
  ALTER TABLE "_projects_v" DROP CONSTRAINT "_projects_v_version_folder_id_payload_folders_id_fk";
  
  ALTER TABLE "payload_folders_folder_type" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_payload_folders_folder_type";
  CREATE TYPE "public"."enum_payload_folders_folder_type" AS ENUM('media');
  ALTER TABLE "payload_folders_folder_type" ALTER COLUMN "value" SET DATA TYPE "public"."enum_payload_folders_folder_type" USING "value"::"public"."enum_payload_folders_folder_type";
  DROP INDEX "projects_folder_idx";
  DROP INDEX "_projects_v_version_version_folder_idx";
  ALTER TABLE "pages_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");
  ALTER TABLE "projects" DROP COLUMN "folder_id";
  ALTER TABLE "_projects_v" DROP COLUMN "version_folder_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_payload_folders_folder_type" ADD VALUE 'projects' BEFORE 'media';
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_projects_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_projects_fk";
  
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::text;
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::"public"."enum_pages_blocks_archive_relation_to";
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum_pages_blocks_archive_relation_to" USING "relation_to"::"public"."enum_pages_blocks_archive_relation_to";
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::text;
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::"public"."enum__pages_v_blocks_archive_relation_to";
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum__pages_v_blocks_archive_relation_to" USING "relation_to"::"public"."enum__pages_v_blocks_archive_relation_to";
  DROP INDEX "pages_rels_projects_id_idx";
  DROP INDEX "_pages_v_rels_projects_id_idx";
  ALTER TABLE "projects" ADD COLUMN "folder_id" integer;
  ALTER TABLE "_projects_v" ADD COLUMN "version_folder_id" integer;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_folder_id_payload_folders_id_fk" FOREIGN KEY ("version_folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "projects_folder_idx" ON "projects" USING btree ("folder_id");
  CREATE INDEX "_projects_v_version_version_folder_idx" ON "_projects_v" USING btree ("version_folder_id");
  ALTER TABLE "pages_rels" DROP COLUMN "projects_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "projects_id";`)
}
