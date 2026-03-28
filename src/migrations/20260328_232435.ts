import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ALTER COLUMN "project_status" SET DATA TYPE text;
  ALTER TABLE "projects" ALTER COLUMN "project_status" SET DEFAULT 'inProgress'::text;
  DROP TYPE "public"."enum_projects_project_status";
  CREATE TYPE "public"."enum_projects_project_status" AS ENUM('inProgress', 'completed', 'speculative', 'competition');
  ALTER TABLE "projects" ALTER COLUMN "project_status" SET DEFAULT 'inProgress'::"public"."enum_projects_project_status";
  ALTER TABLE "projects" ALTER COLUMN "project_status" SET DATA TYPE "public"."enum_projects_project_status" USING "project_status"::"public"."enum_projects_project_status";
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DATA TYPE text;
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DEFAULT 'inProgress'::text;
  DROP TYPE "public"."enum__projects_v_version_project_status";
  CREATE TYPE "public"."enum__projects_v_version_project_status" AS ENUM('inProgress', 'completed', 'speculative', 'competition');
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DEFAULT 'inProgress'::"public"."enum__projects_v_version_project_status";
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DATA TYPE "public"."enum__projects_v_version_project_status" USING "version_project_status"::"public"."enum__projects_v_version_project_status";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ALTER COLUMN "project_status" SET DATA TYPE text;
  ALTER TABLE "projects" ALTER COLUMN "project_status" SET DEFAULT 'inProgress'::text;
  DROP TYPE "public"."enum_projects_project_status";
  CREATE TYPE "public"."enum_projects_project_status" AS ENUM('inProgress', 'completed', 'onHold');
  ALTER TABLE "projects" ALTER COLUMN "project_status" SET DEFAULT 'inProgress'::"public"."enum_projects_project_status";
  ALTER TABLE "projects" ALTER COLUMN "project_status" SET DATA TYPE "public"."enum_projects_project_status" USING "project_status"::"public"."enum_projects_project_status";
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DATA TYPE text;
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DEFAULT 'inProgress'::text;
  DROP TYPE "public"."enum__projects_v_version_project_status";
  CREATE TYPE "public"."enum__projects_v_version_project_status" AS ENUM('inProgress', 'completed', 'onHold');
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DEFAULT 'inProgress'::"public"."enum__projects_v_version_project_status";
  ALTER TABLE "_projects_v" ALTER COLUMN "version_project_status" SET DATA TYPE "public"."enum__projects_v_version_project_status" USING "version_project_status"::"public"."enum__projects_v_version_project_status";`)
}
