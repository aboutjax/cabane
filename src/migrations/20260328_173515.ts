import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_project_status" AS ENUM('inProgress', 'completed', 'onHold');
  CREATE TYPE "public"."enum__projects_v_version_project_status" AS ENUM('inProgress', 'completed', 'onHold');
  ALTER TABLE "projects" ADD COLUMN "date" timestamp(3) with time zone;
  ALTER TABLE "projects" ADD COLUMN "location" varchar;
  ALTER TABLE "projects" ADD COLUMN "project_status" "enum_projects_project_status" DEFAULT 'inProgress';
  ALTER TABLE "_projects_v" ADD COLUMN "version_date" timestamp(3) with time zone;
  ALTER TABLE "_projects_v" ADD COLUMN "version_location" varchar;
  ALTER TABLE "_projects_v" ADD COLUMN "version_project_status" "enum__projects_v_version_project_status" DEFAULT 'inProgress';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN "date";
  ALTER TABLE "projects" DROP COLUMN "location";
  ALTER TABLE "projects" DROP COLUMN "project_status";
  ALTER TABLE "_projects_v" DROP COLUMN "version_date";
  ALTER TABLE "_projects_v" DROP COLUMN "version_location";
  ALTER TABLE "_projects_v" DROP COLUMN "version_project_status";
  DROP TYPE "public"."enum_projects_project_status";
  DROP TYPE "public"."enum__projects_v_version_project_status";`)
}
