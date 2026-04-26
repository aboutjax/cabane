import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "hero_shader_text_color" varchar DEFAULT '#000000';
  ALTER TABLE "_pages_v" ADD COLUMN IF NOT EXISTS "version_hero_shader_text_color" varchar DEFAULT '#000000';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_shader_text_color";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_shader_text_color";`)
}
