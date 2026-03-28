import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_payload_folders_folder_type" ADD VALUE 'projects' BEFORE 'media';
  ALTER TABLE "projects" ADD COLUMN "folder_id" integer;
  ALTER TABLE "_projects_v" ADD COLUMN "version_folder_id" integer;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_folder_id_payload_folders_id_fk" FOREIGN KEY ("version_folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "projects_folder_idx" ON "projects" USING btree ("folder_id");
  CREATE INDEX "_projects_v_version_version_folder_idx" ON "_projects_v" USING btree ("version_folder_id");
  ALTER TABLE "projects" DROP COLUMN "year";
  ALTER TABLE "_projects_v" DROP COLUMN "version_year";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP CONSTRAINT "projects_folder_id_payload_folders_id_fk";
  
  ALTER TABLE "_projects_v" DROP CONSTRAINT "_projects_v_version_folder_id_payload_folders_id_fk";
  
  ALTER TABLE "payload_folders_folder_type" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_payload_folders_folder_type";
  CREATE TYPE "public"."enum_payload_folders_folder_type" AS ENUM('media');
  ALTER TABLE "payload_folders_folder_type" ALTER COLUMN "value" SET DATA TYPE "public"."enum_payload_folders_folder_type" USING "value"::"public"."enum_payload_folders_folder_type";
  DROP INDEX "projects_folder_idx";
  DROP INDEX "_projects_v_version_version_folder_idx";
  ALTER TABLE "projects" ADD COLUMN "year" numeric;
  ALTER TABLE "_projects_v" ADD COLUMN "version_year" numeric;
  ALTER TABLE "projects" DROP COLUMN "folder_id";
  ALTER TABLE "_projects_v" DROP COLUMN "version_folder_id";`)
}
