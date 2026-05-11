import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_archive_sort" AS ENUM('_order', '-publishedAt', 'publishedAt', 'title', '-title', '-updatedAt');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_sort" AS ENUM('_order', '-publishedAt', 'publishedAt', 'title', '-title', '-updatedAt');
  CREATE TYPE "public"."enum_projects_blocks_archive_sort" AS ENUM('_order', '-publishedAt', 'publishedAt', 'title', '-title', '-updatedAt');
  CREATE TYPE "public"."enum__projects_v_blocks_archive_sort" AS ENUM('_order', '-publishedAt', 'publishedAt', 'title', '-title', '-updatedAt');
  ALTER TABLE "pages_blocks_archive" ADD COLUMN "sort" "enum_pages_blocks_archive_sort" DEFAULT '_order';
  ALTER TABLE "_pages_v_blocks_archive" ADD COLUMN "sort" "enum__pages_v_blocks_archive_sort" DEFAULT '_order';
  ALTER TABLE "posts" ADD COLUMN "_order" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version__order" varchar;
  ALTER TABLE "projects_blocks_archive" ADD COLUMN "sort" "enum_projects_blocks_archive_sort" DEFAULT '_order';
  ALTER TABLE "projects" ADD COLUMN "_order" varchar;
  ALTER TABLE "_projects_v_blocks_archive" ADD COLUMN "sort" "enum__projects_v_blocks_archive_sort" DEFAULT '_order';
  ALTER TABLE "_projects_v" ADD COLUMN "version__order" varchar;
  CREATE INDEX "posts__order_idx" ON "posts" USING btree ("_order");
  CREATE INDEX "_posts_v_version_version__order_idx" ON "_posts_v" USING btree ("version__order");
  CREATE INDEX "projects__order_idx" ON "projects" USING btree ("_order");
  CREATE INDEX "_projects_v_version_version__order_idx" ON "_projects_v" USING btree ("version__order");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "posts__order_idx";
  DROP INDEX "_posts_v_version_version__order_idx";
  DROP INDEX "projects__order_idx";
  DROP INDEX "_projects_v_version_version__order_idx";
  ALTER TABLE "pages_blocks_archive" DROP COLUMN "sort";
  ALTER TABLE "_pages_v_blocks_archive" DROP COLUMN "sort";
  ALTER TABLE "posts" DROP COLUMN "_order";
  ALTER TABLE "_posts_v" DROP COLUMN "version__order";
  ALTER TABLE "projects_blocks_archive" DROP COLUMN "sort";
  ALTER TABLE "projects" DROP COLUMN "_order";
  ALTER TABLE "_projects_v_blocks_archive" DROP COLUMN "sort";
  ALTER TABLE "_projects_v" DROP COLUMN "version__order";
  DROP TYPE "public"."enum_pages_blocks_archive_sort";
  DROP TYPE "public"."enum__pages_v_blocks_archive_sort";
  DROP TYPE "public"."enum_projects_blocks_archive_sort";
  DROP TYPE "public"."enum__projects_v_blocks_archive_sort";`)
}
