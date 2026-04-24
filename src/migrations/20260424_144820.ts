import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "footer_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_rels_projects_id_idx" ON "header_rels" USING btree ("projects_id");
  CREATE INDEX "footer_rels_projects_id_idx" ON "footer_rels" USING btree ("projects_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_projects_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_projects_fk";
  
  DROP INDEX "header_rels_projects_id_idx";
  DROP INDEX "footer_rels_projects_id_idx";
  ALTER TABLE "header_rels" DROP COLUMN "projects_id";
  ALTER TABLE "footer_rels" DROP COLUMN "projects_id";`)
}
