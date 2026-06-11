import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_gallery_layout" ADD VALUE 'fullWidthCarousel';
  ALTER TYPE "public"."enum__pages_v_blocks_gallery_layout" ADD VALUE 'fullWidthCarousel';
  ALTER TYPE "public"."enum_projects_blocks_gallery_layout" ADD VALUE 'fullWidthCarousel';
  ALTER TYPE "public"."enum__projects_v_blocks_gallery_layout" ADD VALUE 'fullWidthCarousel';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::text;
  DROP TYPE "public"."enum_pages_blocks_gallery_layout";
  CREATE TYPE "public"."enum_pages_blocks_gallery_layout" AS ENUM('grid', 'carousel', 'masonry');
  ALTER TABLE "pages_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::"public"."enum_pages_blocks_gallery_layout";
  ALTER TABLE "pages_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE "public"."enum_pages_blocks_gallery_layout" USING "layout"::"public"."enum_pages_blocks_gallery_layout";
  ALTER TABLE "_pages_v_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::text;
  DROP TYPE "public"."enum__pages_v_blocks_gallery_layout";
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_layout" AS ENUM('grid', 'carousel', 'masonry');
  ALTER TABLE "_pages_v_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::"public"."enum__pages_v_blocks_gallery_layout";
  ALTER TABLE "_pages_v_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE "public"."enum__pages_v_blocks_gallery_layout" USING "layout"::"public"."enum__pages_v_blocks_gallery_layout";
  ALTER TABLE "projects_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE text;
  ALTER TABLE "projects_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::text;
  DROP TYPE "public"."enum_projects_blocks_gallery_layout";
  CREATE TYPE "public"."enum_projects_blocks_gallery_layout" AS ENUM('grid', 'carousel', 'masonry');
  ALTER TABLE "projects_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::"public"."enum_projects_blocks_gallery_layout";
  ALTER TABLE "projects_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE "public"."enum_projects_blocks_gallery_layout" USING "layout"::"public"."enum_projects_blocks_gallery_layout";
  ALTER TABLE "_projects_v_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE text;
  ALTER TABLE "_projects_v_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::text;
  DROP TYPE "public"."enum__projects_v_blocks_gallery_layout";
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_layout" AS ENUM('grid', 'carousel', 'masonry');
  ALTER TABLE "_projects_v_blocks_gallery" ALTER COLUMN "layout" SET DEFAULT 'grid'::"public"."enum__projects_v_blocks_gallery_layout";
  ALTER TABLE "_projects_v_blocks_gallery" ALTER COLUMN "layout" SET DATA TYPE "public"."enum__projects_v_blocks_gallery_layout" USING "layout"::"public"."enum__projects_v_blocks_gallery_layout";`)
}
