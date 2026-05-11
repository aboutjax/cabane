import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_projects_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_projects_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_projects_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_projects_blocks_archive_relation_to" AS ENUM('posts', 'projects');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__projects_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__projects_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__projects_v_blocks_archive_relation_to" AS ENUM('posts', 'projects');
  CREATE TABLE "projects_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_projects_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_projects_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "projects_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_projects_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_projects_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_projects_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "projects_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_projects_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_projects_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_our_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "projects_blocks_our_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Process',
  	"sub_heading" varchar DEFAULT 'Structured, iterative framework used to solve complex problems and create user-centered products or services',
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__projects_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__projects_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__projects_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__projects_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__projects_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__projects_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__projects_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_our_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_our_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Our Process',
  	"sub_heading" varchar DEFAULT 'Structured, iterative framework used to solve complex problems and create user-centered products or services',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "projects_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "projects_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "projects_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "_projects_v_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "_projects_v_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "_projects_v_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "projects_blocks_cta_links" ADD CONSTRAINT "projects_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_cta" ADD CONSTRAINT "projects_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_content_columns" ADD CONSTRAINT "projects_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_content" ADD CONSTRAINT "projects_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_media_block" ADD CONSTRAINT "projects_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_media_block" ADD CONSTRAINT "projects_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_archive" ADD CONSTRAINT "projects_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_form_block" ADD CONSTRAINT "projects_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_form_block" ADD CONSTRAINT "projects_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_our_process_steps" ADD CONSTRAINT "projects_blocks_our_process_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_our_process_steps" ADD CONSTRAINT "projects_blocks_our_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_our_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_our_process" ADD CONSTRAINT "projects_blocks_our_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_cta_links" ADD CONSTRAINT "_projects_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_cta" ADD CONSTRAINT "_projects_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_content_columns" ADD CONSTRAINT "_projects_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_content" ADD CONSTRAINT "_projects_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_media_block" ADD CONSTRAINT "_projects_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_media_block" ADD CONSTRAINT "_projects_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_archive" ADD CONSTRAINT "_projects_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_form_block" ADD CONSTRAINT "_projects_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_form_block" ADD CONSTRAINT "_projects_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_our_process_steps" ADD CONSTRAINT "_projects_v_blocks_our_process_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_our_process_steps" ADD CONSTRAINT "_projects_v_blocks_our_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_our_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_our_process" ADD CONSTRAINT "_projects_v_blocks_our_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_blocks_cta_links_order_idx" ON "projects_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "projects_blocks_cta_links_parent_id_idx" ON "projects_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_cta_order_idx" ON "projects_blocks_cta" USING btree ("_order");
  CREATE INDEX "projects_blocks_cta_parent_id_idx" ON "projects_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_cta_path_idx" ON "projects_blocks_cta" USING btree ("_path");
  CREATE INDEX "projects_blocks_content_columns_order_idx" ON "projects_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "projects_blocks_content_columns_parent_id_idx" ON "projects_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_content_order_idx" ON "projects_blocks_content" USING btree ("_order");
  CREATE INDEX "projects_blocks_content_parent_id_idx" ON "projects_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_content_path_idx" ON "projects_blocks_content" USING btree ("_path");
  CREATE INDEX "projects_blocks_media_block_order_idx" ON "projects_blocks_media_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_media_block_parent_id_idx" ON "projects_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_media_block_path_idx" ON "projects_blocks_media_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_media_block_media_idx" ON "projects_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "projects_blocks_archive_order_idx" ON "projects_blocks_archive" USING btree ("_order");
  CREATE INDEX "projects_blocks_archive_parent_id_idx" ON "projects_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_archive_path_idx" ON "projects_blocks_archive" USING btree ("_path");
  CREATE INDEX "projects_blocks_form_block_order_idx" ON "projects_blocks_form_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_form_block_parent_id_idx" ON "projects_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_form_block_path_idx" ON "projects_blocks_form_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_form_block_form_idx" ON "projects_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "projects_blocks_our_process_steps_order_idx" ON "projects_blocks_our_process_steps" USING btree ("_order");
  CREATE INDEX "projects_blocks_our_process_steps_parent_id_idx" ON "projects_blocks_our_process_steps" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_our_process_steps_image_idx" ON "projects_blocks_our_process_steps" USING btree ("image_id");
  CREATE INDEX "projects_blocks_our_process_order_idx" ON "projects_blocks_our_process" USING btree ("_order");
  CREATE INDEX "projects_blocks_our_process_parent_id_idx" ON "projects_blocks_our_process" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_our_process_path_idx" ON "projects_blocks_our_process" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_cta_links_order_idx" ON "_projects_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_cta_links_parent_id_idx" ON "_projects_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_cta_order_idx" ON "_projects_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_cta_parent_id_idx" ON "_projects_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_cta_path_idx" ON "_projects_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_content_columns_order_idx" ON "_projects_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_content_columns_parent_id_idx" ON "_projects_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_content_order_idx" ON "_projects_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_content_parent_id_idx" ON "_projects_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_content_path_idx" ON "_projects_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_media_block_order_idx" ON "_projects_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_media_block_parent_id_idx" ON "_projects_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_media_block_path_idx" ON "_projects_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_media_block_media_idx" ON "_projects_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_projects_v_blocks_archive_order_idx" ON "_projects_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_archive_parent_id_idx" ON "_projects_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_archive_path_idx" ON "_projects_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_form_block_order_idx" ON "_projects_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_form_block_parent_id_idx" ON "_projects_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_form_block_path_idx" ON "_projects_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_form_block_form_idx" ON "_projects_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_projects_v_blocks_our_process_steps_order_idx" ON "_projects_v_blocks_our_process_steps" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_our_process_steps_parent_id_idx" ON "_projects_v_blocks_our_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_our_process_steps_image_idx" ON "_projects_v_blocks_our_process_steps" USING btree ("image_id");
  CREATE INDEX "_projects_v_blocks_our_process_order_idx" ON "_projects_v_blocks_our_process" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_our_process_parent_id_idx" ON "_projects_v_blocks_our_process" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_our_process_path_idx" ON "_projects_v_blocks_our_process" USING btree ("_path");
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_rels_pages_id_idx" ON "projects_rels" USING btree ("pages_id");
  CREATE INDEX "projects_rels_posts_id_idx" ON "projects_rels" USING btree ("posts_id");
  CREATE INDEX "projects_rels_projects_id_idx" ON "projects_rels" USING btree ("projects_id");
  CREATE INDEX "_projects_v_rels_pages_id_idx" ON "_projects_v_rels" USING btree ("pages_id");
  CREATE INDEX "_projects_v_rels_posts_id_idx" ON "_projects_v_rels" USING btree ("posts_id");
  CREATE INDEX "_projects_v_rels_projects_id_idx" ON "_projects_v_rels" USING btree ("projects_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_form_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_our_process_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects_blocks_our_process" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_content_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_archive" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_form_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_our_process_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_projects_v_blocks_our_process" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "projects_blocks_cta_links" CASCADE;
  DROP TABLE "projects_blocks_cta" CASCADE;
  DROP TABLE "projects_blocks_content_columns" CASCADE;
  DROP TABLE "projects_blocks_content" CASCADE;
  DROP TABLE "projects_blocks_media_block" CASCADE;
  DROP TABLE "projects_blocks_archive" CASCADE;
  DROP TABLE "projects_blocks_form_block" CASCADE;
  DROP TABLE "projects_blocks_our_process_steps" CASCADE;
  DROP TABLE "projects_blocks_our_process" CASCADE;
  DROP TABLE "_projects_v_blocks_cta_links" CASCADE;
  DROP TABLE "_projects_v_blocks_cta" CASCADE;
  DROP TABLE "_projects_v_blocks_content_columns" CASCADE;
  DROP TABLE "_projects_v_blocks_content" CASCADE;
  DROP TABLE "_projects_v_blocks_media_block" CASCADE;
  DROP TABLE "_projects_v_blocks_archive" CASCADE;
  DROP TABLE "_projects_v_blocks_form_block" CASCADE;
  DROP TABLE "_projects_v_blocks_our_process_steps" CASCADE;
  DROP TABLE "_projects_v_blocks_our_process" CASCADE;
  ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_pages_fk";
  
  ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_posts_fk";
  
  ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_projects_fk";
  
  ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_pages_fk";
  
  ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_posts_fk";
  
  ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_projects_fk";
  
  DROP INDEX "projects_rels_pages_id_idx";
  DROP INDEX "projects_rels_posts_id_idx";
  DROP INDEX "projects_rels_projects_id_idx";
  DROP INDEX "_projects_v_rels_pages_id_idx";
  DROP INDEX "_projects_v_rels_posts_id_idx";
  DROP INDEX "_projects_v_rels_projects_id_idx";
  ALTER TABLE "projects_rels" DROP COLUMN "pages_id";
  ALTER TABLE "projects_rels" DROP COLUMN "posts_id";
  ALTER TABLE "projects_rels" DROP COLUMN "projects_id";
  ALTER TABLE "_projects_v_rels" DROP COLUMN "pages_id";
  ALTER TABLE "_projects_v_rels" DROP COLUMN "posts_id";
  ALTER TABLE "_projects_v_rels" DROP COLUMN "projects_id";
  DROP TYPE "public"."enum_projects_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_projects_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_projects_blocks_content_columns_size";
  DROP TYPE "public"."enum_projects_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_projects_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_projects_blocks_archive_populate_by";
  DROP TYPE "public"."enum_projects_blocks_archive_relation_to";
  DROP TYPE "public"."enum__projects_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__projects_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__projects_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__projects_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__projects_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__projects_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__projects_v_blocks_archive_relation_to";`)
}
