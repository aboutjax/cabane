import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_shader_type" AS ENUM('meshGradient', 'smokeRing', 'neuroNoise', 'dotOrbit', 'dotGrid', 'simplexNoise', 'metaballs', 'waves', 'perlinNoise', 'voronoi', 'warp', 'godRays', 'spiral', 'swirl', 'dithering', 'grainGradient', 'pulsingBorder', 'colorPanels', 'staticMeshGradient', 'staticRadialGradient', 'paperTexture', 'flutedGlass', 'water', 'imageDithering', 'heatmap', 'liquidMetal', 'halftoneDots', 'halftoneCmyk');
  CREATE TYPE "public"."enum_pages_hero_dot_grid_shape" AS ENUM('circle', 'diamond', 'square', 'triangle');
  CREATE TYPE "public"."enum_pages_hero_warp_shape" AS ENUM('checks', 'stripes', 'edge');
  CREATE TYPE "public"."enum_pages_hero_dithering_shape" AS ENUM('simplex', 'warp', 'dots', 'wave', 'ripple', 'swirl', 'sphere');
  CREATE TYPE "public"."enum_pages_hero_dithering_type" AS ENUM('random', '2x2', '4x4', '8x8');
  CREATE TYPE "public"."enum_pages_hero_grain_gradient_shape" AS ENUM('wave', 'dots', 'truchet', 'corners', 'ripple', 'blob', 'sphere');
  CREATE TYPE "public"."enum_pages_hero_pulsing_border_aspect_ratio" AS ENUM('auto', 'square');
  CREATE TYPE "public"."enum_pages_hero_fluted_glass_shape" AS ENUM('lines', 'linesIrregular', 'wave', 'zigzag', 'pattern');
  CREATE TYPE "public"."enum_pages_hero_fluted_glass_distortion_shape" AS ENUM('prism', 'lens', 'contour', 'cascade', 'flat');
  CREATE TYPE "public"."enum_pages_hero_image_dithering_type" AS ENUM('random', '2x2', '4x4', '8x8');
  CREATE TYPE "public"."enum_pages_hero_liquid_metal_shape" AS ENUM('none', 'circle', 'daisy', 'diamond', 'metaballs');
  CREATE TYPE "public"."enum_pages_hero_halftone_dots_grid" AS ENUM('square', 'hex');
  CREATE TYPE "public"."enum_pages_hero_halftone_dots_type" AS ENUM('classic', 'gooey', 'holes', 'soft');
  CREATE TYPE "public"."enum_pages_hero_halftone_cmyk_type" AS ENUM('dots', 'ink', 'sharp');
  CREATE TYPE "public"."enum__pages_v_version_hero_shader_type" AS ENUM('meshGradient', 'smokeRing', 'neuroNoise', 'dotOrbit', 'dotGrid', 'simplexNoise', 'metaballs', 'waves', 'perlinNoise', 'voronoi', 'warp', 'godRays', 'spiral', 'swirl', 'dithering', 'grainGradient', 'pulsingBorder', 'colorPanels', 'staticMeshGradient', 'staticRadialGradient', 'paperTexture', 'flutedGlass', 'water', 'imageDithering', 'heatmap', 'liquidMetal', 'halftoneDots', 'halftoneCmyk');
  CREATE TYPE "public"."enum__pages_v_version_hero_dot_grid_shape" AS ENUM('circle', 'diamond', 'square', 'triangle');
  CREATE TYPE "public"."enum__pages_v_version_hero_warp_shape" AS ENUM('checks', 'stripes', 'edge');
  CREATE TYPE "public"."enum__pages_v_version_hero_dithering_shape" AS ENUM('simplex', 'warp', 'dots', 'wave', 'ripple', 'swirl', 'sphere');
  CREATE TYPE "public"."enum__pages_v_version_hero_dithering_type" AS ENUM('random', '2x2', '4x4', '8x8');
  CREATE TYPE "public"."enum__pages_v_version_hero_grain_gradient_shape" AS ENUM('wave', 'dots', 'truchet', 'corners', 'ripple', 'blob', 'sphere');
  CREATE TYPE "public"."enum__pages_v_version_hero_pulsing_border_aspect_ratio" AS ENUM('auto', 'square');
  CREATE TYPE "public"."enum__pages_v_version_hero_fluted_glass_shape" AS ENUM('lines', 'linesIrregular', 'wave', 'zigzag', 'pattern');
  CREATE TYPE "public"."enum__pages_v_version_hero_fluted_glass_distortion_shape" AS ENUM('prism', 'lens', 'contour', 'cascade', 'flat');
  CREATE TYPE "public"."enum__pages_v_version_hero_image_dithering_type" AS ENUM('random', '2x2', '4x4', '8x8');
  CREATE TYPE "public"."enum__pages_v_version_hero_liquid_metal_shape" AS ENUM('none', 'circle', 'daisy', 'diamond', 'metaballs');
  CREATE TYPE "public"."enum__pages_v_version_hero_halftone_dots_grid" AS ENUM('square', 'hex');
  CREATE TYPE "public"."enum__pages_v_version_hero_halftone_dots_type" AS ENUM('classic', 'gooey', 'holes', 'soft');
  CREATE TYPE "public"."enum__pages_v_version_hero_halftone_cmyk_type" AS ENUM('dots', 'ink', 'sharp');
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'shader';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'shader';
  CREATE TABLE "pages_hero_mesh_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_smoke_ring_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_dot_orbit_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_simplex_noise_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_metaballs_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_voronoi_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_warp_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_god_rays_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_swirl_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_grain_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_pulsing_border_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_color_panels_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_static_mesh_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_static_radial_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "pages_hero_heatmap_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_mesh_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_smoke_ring_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_dot_orbit_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_simplex_noise_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_metaballs_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_voronoi_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_warp_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_god_rays_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_swirl_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_grain_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_pulsing_border_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_color_panels_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_static_mesh_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_static_radial_gradient_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_heatmap_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "hero_shader_type" "enum_pages_hero_shader_type";
  ALTER TABLE "pages" ADD COLUMN "hero_shader_speed" numeric DEFAULT 0.3;
  ALTER TABLE "pages" ADD COLUMN "hero_shader_scale" numeric DEFAULT 1;
  ALTER TABLE "pages" ADD COLUMN "hero_shader_rotation" numeric DEFAULT 0;
  ALTER TABLE "pages" ADD COLUMN "hero_mesh_gradient_distortion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_mesh_gradient_swirl" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_mesh_gradient_grain_mixer" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_mesh_gradient_grain_overlay" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_smoke_ring_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_smoke_ring_thickness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_smoke_ring_radius" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_smoke_ring_inner_shape" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_smoke_ring_noise_iterations" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_smoke_ring_noise_scale" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_neuro_noise_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_neuro_noise_color_mid" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_neuro_noise_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_neuro_noise_brightness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_neuro_noise_contrast" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_orbit_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_orbit_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_orbit_size_range" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_orbit_spreading" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_orbit_steps_per_color" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_color_fill" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_color_stroke" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_gap_x" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_gap_y" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_stroke_width" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_size_range" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_opacity_range" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dot_grid_shape" "enum_pages_hero_dot_grid_shape" DEFAULT 'circle';
  ALTER TABLE "pages" ADD COLUMN "hero_simplex_noise_steps_per_color" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_simplex_noise_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_metaballs_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_metaballs_count" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_metaballs_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_shape" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_amplitude" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_frequency" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_spacing" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_proportion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_waves_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_perlin_noise_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_perlin_noise_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_perlin_noise_proportion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_perlin_noise_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_perlin_noise_octave_count" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_perlin_noise_persistence" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_perlin_noise_lacunarity" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_voronoi_steps_per_color" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_voronoi_color_gap" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_voronoi_color_glow" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_voronoi_distortion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_voronoi_gap" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_voronoi_glow" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_warp_proportion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_warp_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_warp_shape" "enum_pages_hero_warp_shape" DEFAULT 'checks';
  ALTER TABLE "pages" ADD COLUMN "hero_warp_shape_scale" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_warp_distortion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_warp_swirl" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_warp_swirl_iterations" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_color_bloom" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_bloom" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_intensity" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_density" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_spotty" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_mid_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_god_rays_mid_intensity" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_density" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_distortion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_stroke_width" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_stroke_taper" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_stroke_cap" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_noise" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_noise_frequency" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_spiral_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_band_count" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_twist" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_center" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_proportion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_noise" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_swirl_noise_frequency" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_dithering_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_dithering_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_dithering_shape" "enum_pages_hero_dithering_shape" DEFAULT 'simplex';
  ALTER TABLE "pages" ADD COLUMN "hero_dithering_type" "enum_pages_hero_dithering_type" DEFAULT 'random';
  ALTER TABLE "pages" ADD COLUMN "hero_dithering_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_grain_gradient_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_grain_gradient_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_grain_gradient_intensity" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_grain_gradient_noise" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_grain_gradient_shape" "enum_pages_hero_grain_gradient_shape" DEFAULT 'blob';
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_roundness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_thickness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_margin" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_margin_left" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_margin_right" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_margin_top" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_margin_bottom" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_aspect_ratio" "enum_pages_hero_pulsing_border_aspect_ratio" DEFAULT 'auto';
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_intensity" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_bloom" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_spots" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_spot_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_pulse" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_smoke" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_pulsing_border_smoke_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_angle1" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_angle2" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_length" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_edges" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_blur" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_fade_in" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_fade_out" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_density" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_color_panels_gradient" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_positions" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_wave_x" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_wave_x_shift" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_wave_y" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_wave_y_shift" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_mixing" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_grain_mixer" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_mesh_gradient_grain_overlay" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_radius" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_focal_distance" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_focal_angle" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_falloff" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_mixing" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_distortion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_distortion_shift" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_distortion_freq" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_grain_mixer" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_static_radial_gradient_grain_overlay" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_contrast" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_roughness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_fiber" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_fiber_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_crumples" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_crumple_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_folds" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_fold_count" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_fade" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_drops" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_paper_texture_seed" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_color_shadow" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_color_highlight" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_shadows" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_highlights" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_shape" "enum_pages_hero_fluted_glass_shape" DEFAULT 'lines';
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_angle" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_distortion_shape" "enum_pages_hero_fluted_glass_distortion_shape" DEFAULT 'prism';
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_distortion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_shift" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_stretch" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_blur" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_edges" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_margin" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_grain_mixer" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_fluted_glass_grain_overlay" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_water_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_water_color_highlight" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_water_highlights" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_water_layering" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_water_edges" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_water_caustic" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_water_waves" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_water_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_color_highlight" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_type" "enum_pages_hero_image_dithering_type" DEFAULT 'random';
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_color_steps" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_original_colors" boolean;
  ALTER TABLE "pages" ADD COLUMN "hero_image_dithering_inverted" boolean;
  ALTER TABLE "pages" ADD COLUMN "hero_heatmap_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_heatmap_contour" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_heatmap_angle" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_heatmap_noise" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_heatmap_inner_glow" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_heatmap_outer_glow" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_color_tint" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_repetition" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_shift_red" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_shift_blue" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_distortion" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_contour" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_angle" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_liquid_metal_shape" "enum_pages_hero_liquid_metal_shape" DEFAULT 'none';
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_color_front" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_grid" "enum_pages_hero_halftone_dots_grid" DEFAULT 'square';
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_radius" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_contrast" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_original_colors" boolean;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_inverted" boolean;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_grain_mixer" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_grain_overlay" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_grain_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_dots_type" "enum_pages_hero_halftone_dots_type" DEFAULT 'classic';
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_color_back" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_color_c" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_color_m" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_color_y" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_color_k" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_min_dot" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_contrast" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_softness" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_grain_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_grain_mixer" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_grain_overlay" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_grid_noise" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_flood_c" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_flood_m" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_flood_y" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_flood_k" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_gain_c" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_gain_m" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_gain_y" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_gain_k" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_halftone_cmyk_type" "enum_pages_hero_halftone_cmyk_type" DEFAULT 'dots';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_shader_type" "enum__pages_v_version_hero_shader_type";
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_shader_speed" numeric DEFAULT 0.3;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_shader_scale" numeric DEFAULT 1;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_shader_rotation" numeric DEFAULT 0;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_mesh_gradient_distortion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_mesh_gradient_swirl" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_mesh_gradient_grain_mixer" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_mesh_gradient_grain_overlay" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_smoke_ring_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_smoke_ring_thickness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_smoke_ring_radius" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_smoke_ring_inner_shape" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_smoke_ring_noise_iterations" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_smoke_ring_noise_scale" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_neuro_noise_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_neuro_noise_color_mid" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_neuro_noise_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_neuro_noise_brightness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_neuro_noise_contrast" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_orbit_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_orbit_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_orbit_size_range" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_orbit_spreading" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_orbit_steps_per_color" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_color_fill" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_color_stroke" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_gap_x" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_gap_y" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_stroke_width" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_size_range" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_opacity_range" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dot_grid_shape" "enum__pages_v_version_hero_dot_grid_shape" DEFAULT 'circle';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_simplex_noise_steps_per_color" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_simplex_noise_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_metaballs_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_metaballs_count" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_metaballs_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_shape" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_amplitude" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_frequency" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_spacing" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_proportion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_waves_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_perlin_noise_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_perlin_noise_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_perlin_noise_proportion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_perlin_noise_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_perlin_noise_octave_count" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_perlin_noise_persistence" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_perlin_noise_lacunarity" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_voronoi_steps_per_color" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_voronoi_color_gap" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_voronoi_color_glow" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_voronoi_distortion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_voronoi_gap" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_voronoi_glow" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_warp_proportion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_warp_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_warp_shape" "enum__pages_v_version_hero_warp_shape" DEFAULT 'checks';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_warp_shape_scale" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_warp_distortion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_warp_swirl" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_warp_swirl_iterations" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_color_bloom" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_bloom" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_intensity" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_density" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_spotty" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_mid_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_god_rays_mid_intensity" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_density" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_distortion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_stroke_width" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_stroke_taper" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_stroke_cap" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_noise" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_noise_frequency" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_spiral_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_band_count" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_twist" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_center" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_proportion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_noise" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_swirl_noise_frequency" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dithering_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dithering_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dithering_shape" "enum__pages_v_version_hero_dithering_shape" DEFAULT 'simplex';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dithering_type" "enum__pages_v_version_hero_dithering_type" DEFAULT 'random';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_dithering_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_grain_gradient_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_grain_gradient_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_grain_gradient_intensity" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_grain_gradient_noise" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_grain_gradient_shape" "enum__pages_v_version_hero_grain_gradient_shape" DEFAULT 'blob';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_roundness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_thickness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_margin" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_margin_left" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_margin_right" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_margin_top" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_margin_bottom" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_aspect_ratio" "enum__pages_v_version_hero_pulsing_border_aspect_ratio" DEFAULT 'auto';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_intensity" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_bloom" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_spots" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_spot_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_pulse" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_smoke" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_pulsing_border_smoke_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_angle1" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_angle2" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_length" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_edges" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_blur" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_fade_in" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_fade_out" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_density" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_color_panels_gradient" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_positions" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_wave_x" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_wave_x_shift" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_wave_y" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_wave_y_shift" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_mixing" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_grain_mixer" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_mesh_gradient_grain_overlay" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_radius" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_focal_distance" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_focal_angle" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_falloff" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_mixing" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_distortion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_distortion_shift" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_distortion_freq" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_grain_mixer" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_static_radial_gradient_grain_overlay" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_contrast" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_roughness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_fiber" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_fiber_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_crumples" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_crumple_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_folds" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_fold_count" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_fade" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_drops" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_paper_texture_seed" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_color_shadow" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_color_highlight" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_shadows" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_highlights" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_shape" "enum__pages_v_version_hero_fluted_glass_shape" DEFAULT 'lines';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_angle" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_distortion_shape" "enum__pages_v_version_hero_fluted_glass_distortion_shape" DEFAULT 'prism';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_distortion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_shift" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_stretch" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_blur" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_edges" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_margin" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_grain_mixer" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_fluted_glass_grain_overlay" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_color_highlight" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_highlights" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_layering" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_edges" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_caustic" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_waves" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_water_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_color_highlight" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_type" "enum__pages_v_version_hero_image_dithering_type" DEFAULT 'random';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_color_steps" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_original_colors" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_image_dithering_inverted" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heatmap_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heatmap_contour" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heatmap_angle" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heatmap_noise" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heatmap_inner_glow" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heatmap_outer_glow" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_color_tint" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_repetition" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_shift_red" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_shift_blue" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_distortion" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_contour" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_angle" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_liquid_metal_shape" "enum__pages_v_version_hero_liquid_metal_shape" DEFAULT 'none';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_color_front" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_grid" "enum__pages_v_version_hero_halftone_dots_grid" DEFAULT 'square';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_radius" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_contrast" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_original_colors" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_inverted" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_grain_mixer" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_grain_overlay" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_grain_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_dots_type" "enum__pages_v_version_hero_halftone_dots_type" DEFAULT 'classic';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_color_back" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_color_c" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_color_m" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_color_y" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_color_k" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_min_dot" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_contrast" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_softness" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_grain_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_grain_mixer" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_grain_overlay" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_grid_noise" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_flood_c" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_flood_m" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_flood_y" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_flood_k" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_gain_c" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_gain_m" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_gain_y" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_gain_k" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_halftone_cmyk_type" "enum__pages_v_version_hero_halftone_cmyk_type" DEFAULT 'dots';
  ALTER TABLE "pages_hero_mesh_gradient_colors" ADD CONSTRAINT "pages_hero_mesh_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_smoke_ring_colors" ADD CONSTRAINT "pages_hero_smoke_ring_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_dot_orbit_colors" ADD CONSTRAINT "pages_hero_dot_orbit_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_simplex_noise_colors" ADD CONSTRAINT "pages_hero_simplex_noise_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_metaballs_colors" ADD CONSTRAINT "pages_hero_metaballs_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_voronoi_colors" ADD CONSTRAINT "pages_hero_voronoi_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_warp_colors" ADD CONSTRAINT "pages_hero_warp_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_god_rays_colors" ADD CONSTRAINT "pages_hero_god_rays_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_swirl_colors" ADD CONSTRAINT "pages_hero_swirl_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_grain_gradient_colors" ADD CONSTRAINT "pages_hero_grain_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_pulsing_border_colors" ADD CONSTRAINT "pages_hero_pulsing_border_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_color_panels_colors" ADD CONSTRAINT "pages_hero_color_panels_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_static_mesh_gradient_colors" ADD CONSTRAINT "pages_hero_static_mesh_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_static_radial_gradient_colors" ADD CONSTRAINT "pages_hero_static_radial_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_heatmap_colors" ADD CONSTRAINT "pages_hero_heatmap_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_mesh_gradient_colors" ADD CONSTRAINT "_pages_v_version_hero_mesh_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_smoke_ring_colors" ADD CONSTRAINT "_pages_v_version_hero_smoke_ring_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_dot_orbit_colors" ADD CONSTRAINT "_pages_v_version_hero_dot_orbit_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_simplex_noise_colors" ADD CONSTRAINT "_pages_v_version_hero_simplex_noise_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_metaballs_colors" ADD CONSTRAINT "_pages_v_version_hero_metaballs_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_voronoi_colors" ADD CONSTRAINT "_pages_v_version_hero_voronoi_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_warp_colors" ADD CONSTRAINT "_pages_v_version_hero_warp_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_god_rays_colors" ADD CONSTRAINT "_pages_v_version_hero_god_rays_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_swirl_colors" ADD CONSTRAINT "_pages_v_version_hero_swirl_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_grain_gradient_colors" ADD CONSTRAINT "_pages_v_version_hero_grain_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_pulsing_border_colors" ADD CONSTRAINT "_pages_v_version_hero_pulsing_border_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_color_panels_colors" ADD CONSTRAINT "_pages_v_version_hero_color_panels_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_static_mesh_gradient_colors" ADD CONSTRAINT "_pages_v_version_hero_static_mesh_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_static_radial_gradient_colors" ADD CONSTRAINT "_pages_v_version_hero_static_radial_gradient_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_heatmap_colors" ADD CONSTRAINT "_pages_v_version_hero_heatmap_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_mesh_gradient_colors_order_idx" ON "pages_hero_mesh_gradient_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_mesh_gradient_colors_parent_id_idx" ON "pages_hero_mesh_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_smoke_ring_colors_order_idx" ON "pages_hero_smoke_ring_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_smoke_ring_colors_parent_id_idx" ON "pages_hero_smoke_ring_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_dot_orbit_colors_order_idx" ON "pages_hero_dot_orbit_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_dot_orbit_colors_parent_id_idx" ON "pages_hero_dot_orbit_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_simplex_noise_colors_order_idx" ON "pages_hero_simplex_noise_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_simplex_noise_colors_parent_id_idx" ON "pages_hero_simplex_noise_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_metaballs_colors_order_idx" ON "pages_hero_metaballs_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_metaballs_colors_parent_id_idx" ON "pages_hero_metaballs_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_voronoi_colors_order_idx" ON "pages_hero_voronoi_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_voronoi_colors_parent_id_idx" ON "pages_hero_voronoi_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_warp_colors_order_idx" ON "pages_hero_warp_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_warp_colors_parent_id_idx" ON "pages_hero_warp_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_god_rays_colors_order_idx" ON "pages_hero_god_rays_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_god_rays_colors_parent_id_idx" ON "pages_hero_god_rays_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_swirl_colors_order_idx" ON "pages_hero_swirl_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_swirl_colors_parent_id_idx" ON "pages_hero_swirl_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_grain_gradient_colors_order_idx" ON "pages_hero_grain_gradient_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_grain_gradient_colors_parent_id_idx" ON "pages_hero_grain_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_pulsing_border_colors_order_idx" ON "pages_hero_pulsing_border_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_pulsing_border_colors_parent_id_idx" ON "pages_hero_pulsing_border_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_color_panels_colors_order_idx" ON "pages_hero_color_panels_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_color_panels_colors_parent_id_idx" ON "pages_hero_color_panels_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_static_mesh_gradient_colors_order_idx" ON "pages_hero_static_mesh_gradient_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_static_mesh_gradient_colors_parent_id_idx" ON "pages_hero_static_mesh_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_static_radial_gradient_colors_order_idx" ON "pages_hero_static_radial_gradient_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_static_radial_gradient_colors_parent_id_idx" ON "pages_hero_static_radial_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_hero_heatmap_colors_order_idx" ON "pages_hero_heatmap_colors" USING btree ("_order");
  CREATE INDEX "pages_hero_heatmap_colors_parent_id_idx" ON "pages_hero_heatmap_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_mesh_gradient_colors_order_idx" ON "_pages_v_version_hero_mesh_gradient_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_mesh_gradient_colors_parent_id_idx" ON "_pages_v_version_hero_mesh_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_smoke_ring_colors_order_idx" ON "_pages_v_version_hero_smoke_ring_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_smoke_ring_colors_parent_id_idx" ON "_pages_v_version_hero_smoke_ring_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_dot_orbit_colors_order_idx" ON "_pages_v_version_hero_dot_orbit_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_dot_orbit_colors_parent_id_idx" ON "_pages_v_version_hero_dot_orbit_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_simplex_noise_colors_order_idx" ON "_pages_v_version_hero_simplex_noise_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_simplex_noise_colors_parent_id_idx" ON "_pages_v_version_hero_simplex_noise_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_metaballs_colors_order_idx" ON "_pages_v_version_hero_metaballs_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_metaballs_colors_parent_id_idx" ON "_pages_v_version_hero_metaballs_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_voronoi_colors_order_idx" ON "_pages_v_version_hero_voronoi_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_voronoi_colors_parent_id_idx" ON "_pages_v_version_hero_voronoi_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_warp_colors_order_idx" ON "_pages_v_version_hero_warp_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_warp_colors_parent_id_idx" ON "_pages_v_version_hero_warp_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_god_rays_colors_order_idx" ON "_pages_v_version_hero_god_rays_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_god_rays_colors_parent_id_idx" ON "_pages_v_version_hero_god_rays_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_swirl_colors_order_idx" ON "_pages_v_version_hero_swirl_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_swirl_colors_parent_id_idx" ON "_pages_v_version_hero_swirl_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_grain_gradient_colors_order_idx" ON "_pages_v_version_hero_grain_gradient_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_grain_gradient_colors_parent_id_idx" ON "_pages_v_version_hero_grain_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_pulsing_border_colors_order_idx" ON "_pages_v_version_hero_pulsing_border_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_pulsing_border_colors_parent_id_idx" ON "_pages_v_version_hero_pulsing_border_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_color_panels_colors_order_idx" ON "_pages_v_version_hero_color_panels_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_color_panels_colors_parent_id_idx" ON "_pages_v_version_hero_color_panels_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_static_mesh_gradient_colors_order_idx" ON "_pages_v_version_hero_static_mesh_gradient_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_static_mesh_gradient_colors_parent_id_idx" ON "_pages_v_version_hero_static_mesh_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_static_radial_gradient_colors_order_idx" ON "_pages_v_version_hero_static_radial_gradient_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_static_radial_gradient_colors_parent_id_idx" ON "_pages_v_version_hero_static_radial_gradient_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_hero_heatmap_colors_order_idx" ON "_pages_v_version_hero_heatmap_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_heatmap_colors_parent_id_idx" ON "_pages_v_version_hero_heatmap_colors" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_mesh_gradient_colors" CASCADE;
  DROP TABLE "pages_hero_smoke_ring_colors" CASCADE;
  DROP TABLE "pages_hero_dot_orbit_colors" CASCADE;
  DROP TABLE "pages_hero_simplex_noise_colors" CASCADE;
  DROP TABLE "pages_hero_metaballs_colors" CASCADE;
  DROP TABLE "pages_hero_voronoi_colors" CASCADE;
  DROP TABLE "pages_hero_warp_colors" CASCADE;
  DROP TABLE "pages_hero_god_rays_colors" CASCADE;
  DROP TABLE "pages_hero_swirl_colors" CASCADE;
  DROP TABLE "pages_hero_grain_gradient_colors" CASCADE;
  DROP TABLE "pages_hero_pulsing_border_colors" CASCADE;
  DROP TABLE "pages_hero_color_panels_colors" CASCADE;
  DROP TABLE "pages_hero_static_mesh_gradient_colors" CASCADE;
  DROP TABLE "pages_hero_static_radial_gradient_colors" CASCADE;
  DROP TABLE "pages_hero_heatmap_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_mesh_gradient_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_smoke_ring_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_dot_orbit_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_simplex_noise_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_metaballs_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_voronoi_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_warp_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_god_rays_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_swirl_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_grain_gradient_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_pulsing_border_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_color_panels_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_static_mesh_gradient_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_static_radial_gradient_colors" CASCADE;
  DROP TABLE "_pages_v_version_hero_heatmap_colors" CASCADE;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'blob');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::"public"."enum_pages_hero_type";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'blob');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "pages" DROP COLUMN "hero_shader_type";
  ALTER TABLE "pages" DROP COLUMN "hero_shader_speed";
  ALTER TABLE "pages" DROP COLUMN "hero_shader_scale";
  ALTER TABLE "pages" DROP COLUMN "hero_shader_rotation";
  ALTER TABLE "pages" DROP COLUMN "hero_mesh_gradient_distortion";
  ALTER TABLE "pages" DROP COLUMN "hero_mesh_gradient_swirl";
  ALTER TABLE "pages" DROP COLUMN "hero_mesh_gradient_grain_mixer";
  ALTER TABLE "pages" DROP COLUMN "hero_mesh_gradient_grain_overlay";
  ALTER TABLE "pages" DROP COLUMN "hero_smoke_ring_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_smoke_ring_thickness";
  ALTER TABLE "pages" DROP COLUMN "hero_smoke_ring_radius";
  ALTER TABLE "pages" DROP COLUMN "hero_smoke_ring_inner_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_smoke_ring_noise_iterations";
  ALTER TABLE "pages" DROP COLUMN "hero_smoke_ring_noise_scale";
  ALTER TABLE "pages" DROP COLUMN "hero_neuro_noise_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_neuro_noise_color_mid";
  ALTER TABLE "pages" DROP COLUMN "hero_neuro_noise_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_neuro_noise_brightness";
  ALTER TABLE "pages" DROP COLUMN "hero_neuro_noise_contrast";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_orbit_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_orbit_size";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_orbit_size_range";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_orbit_spreading";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_orbit_steps_per_color";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_color_fill";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_color_stroke";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_size";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_gap_x";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_gap_y";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_stroke_width";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_size_range";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_opacity_range";
  ALTER TABLE "pages" DROP COLUMN "hero_dot_grid_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_simplex_noise_steps_per_color";
  ALTER TABLE "pages" DROP COLUMN "hero_simplex_noise_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_metaballs_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_metaballs_count";
  ALTER TABLE "pages" DROP COLUMN "hero_metaballs_size";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_amplitude";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_frequency";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_spacing";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_proportion";
  ALTER TABLE "pages" DROP COLUMN "hero_waves_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_perlin_noise_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_perlin_noise_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_perlin_noise_proportion";
  ALTER TABLE "pages" DROP COLUMN "hero_perlin_noise_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_perlin_noise_octave_count";
  ALTER TABLE "pages" DROP COLUMN "hero_perlin_noise_persistence";
  ALTER TABLE "pages" DROP COLUMN "hero_perlin_noise_lacunarity";
  ALTER TABLE "pages" DROP COLUMN "hero_voronoi_steps_per_color";
  ALTER TABLE "pages" DROP COLUMN "hero_voronoi_color_gap";
  ALTER TABLE "pages" DROP COLUMN "hero_voronoi_color_glow";
  ALTER TABLE "pages" DROP COLUMN "hero_voronoi_distortion";
  ALTER TABLE "pages" DROP COLUMN "hero_voronoi_gap";
  ALTER TABLE "pages" DROP COLUMN "hero_voronoi_glow";
  ALTER TABLE "pages" DROP COLUMN "hero_warp_proportion";
  ALTER TABLE "pages" DROP COLUMN "hero_warp_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_warp_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_warp_shape_scale";
  ALTER TABLE "pages" DROP COLUMN "hero_warp_distortion";
  ALTER TABLE "pages" DROP COLUMN "hero_warp_swirl";
  ALTER TABLE "pages" DROP COLUMN "hero_warp_swirl_iterations";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_color_bloom";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_bloom";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_intensity";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_density";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_spotty";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_mid_size";
  ALTER TABLE "pages" DROP COLUMN "hero_god_rays_mid_intensity";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_density";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_distortion";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_stroke_width";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_stroke_taper";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_stroke_cap";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_noise";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_noise_frequency";
  ALTER TABLE "pages" DROP COLUMN "hero_spiral_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_band_count";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_twist";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_center";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_proportion";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_noise";
  ALTER TABLE "pages" DROP COLUMN "hero_swirl_noise_frequency";
  ALTER TABLE "pages" DROP COLUMN "hero_dithering_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_dithering_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_dithering_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_dithering_type";
  ALTER TABLE "pages" DROP COLUMN "hero_dithering_size";
  ALTER TABLE "pages" DROP COLUMN "hero_grain_gradient_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_grain_gradient_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_grain_gradient_intensity";
  ALTER TABLE "pages" DROP COLUMN "hero_grain_gradient_noise";
  ALTER TABLE "pages" DROP COLUMN "hero_grain_gradient_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_roundness";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_thickness";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_margin";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_margin_left";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_margin_right";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_margin_top";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_margin_bottom";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_aspect_ratio";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_intensity";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_bloom";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_spots";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_spot_size";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_pulse";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_smoke";
  ALTER TABLE "pages" DROP COLUMN "hero_pulsing_border_smoke_size";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_angle1";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_angle2";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_length";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_edges";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_blur";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_fade_in";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_fade_out";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_density";
  ALTER TABLE "pages" DROP COLUMN "hero_color_panels_gradient";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_positions";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_wave_x";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_wave_x_shift";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_wave_y";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_wave_y_shift";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_mixing";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_grain_mixer";
  ALTER TABLE "pages" DROP COLUMN "hero_static_mesh_gradient_grain_overlay";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_radius";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_focal_distance";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_focal_angle";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_falloff";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_mixing";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_distortion";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_distortion_shift";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_distortion_freq";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_grain_mixer";
  ALTER TABLE "pages" DROP COLUMN "hero_static_radial_gradient_grain_overlay";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_contrast";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_roughness";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_fiber";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_fiber_size";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_crumples";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_crumple_size";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_folds";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_fold_count";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_fade";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_drops";
  ALTER TABLE "pages" DROP COLUMN "hero_paper_texture_seed";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_color_shadow";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_color_highlight";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_shadows";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_highlights";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_size";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_angle";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_distortion_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_distortion";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_shift";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_stretch";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_blur";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_edges";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_margin";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_grain_mixer";
  ALTER TABLE "pages" DROP COLUMN "hero_fluted_glass_grain_overlay";
  ALTER TABLE "pages" DROP COLUMN "hero_water_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_water_color_highlight";
  ALTER TABLE "pages" DROP COLUMN "hero_water_highlights";
  ALTER TABLE "pages" DROP COLUMN "hero_water_layering";
  ALTER TABLE "pages" DROP COLUMN "hero_water_edges";
  ALTER TABLE "pages" DROP COLUMN "hero_water_caustic";
  ALTER TABLE "pages" DROP COLUMN "hero_water_waves";
  ALTER TABLE "pages" DROP COLUMN "hero_water_size";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_color_highlight";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_type";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_size";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_color_steps";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_original_colors";
  ALTER TABLE "pages" DROP COLUMN "hero_image_dithering_inverted";
  ALTER TABLE "pages" DROP COLUMN "hero_heatmap_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_heatmap_contour";
  ALTER TABLE "pages" DROP COLUMN "hero_heatmap_angle";
  ALTER TABLE "pages" DROP COLUMN "hero_heatmap_noise";
  ALTER TABLE "pages" DROP COLUMN "hero_heatmap_inner_glow";
  ALTER TABLE "pages" DROP COLUMN "hero_heatmap_outer_glow";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_color_tint";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_repetition";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_shift_red";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_shift_blue";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_distortion";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_contour";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_angle";
  ALTER TABLE "pages" DROP COLUMN "hero_liquid_metal_shape";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_color_front";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_size";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_grid";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_radius";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_contrast";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_original_colors";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_inverted";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_grain_mixer";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_grain_overlay";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_grain_size";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_dots_type";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_color_back";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_color_c";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_color_m";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_color_y";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_color_k";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_size";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_min_dot";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_contrast";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_softness";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_grain_size";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_grain_mixer";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_grain_overlay";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_grid_noise";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_flood_c";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_flood_m";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_flood_y";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_flood_k";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_gain_c";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_gain_m";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_gain_y";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_gain_k";
  ALTER TABLE "pages" DROP COLUMN "hero_halftone_cmyk_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_shader_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_shader_speed";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_shader_scale";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_shader_rotation";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_mesh_gradient_distortion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_mesh_gradient_swirl";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_mesh_gradient_grain_mixer";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_mesh_gradient_grain_overlay";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_smoke_ring_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_smoke_ring_thickness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_smoke_ring_radius";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_smoke_ring_inner_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_smoke_ring_noise_iterations";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_smoke_ring_noise_scale";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_neuro_noise_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_neuro_noise_color_mid";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_neuro_noise_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_neuro_noise_brightness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_neuro_noise_contrast";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_orbit_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_orbit_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_orbit_size_range";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_orbit_spreading";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_orbit_steps_per_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_color_fill";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_color_stroke";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_gap_x";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_gap_y";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_stroke_width";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_size_range";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_opacity_range";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dot_grid_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_simplex_noise_steps_per_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_simplex_noise_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_metaballs_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_metaballs_count";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_metaballs_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_amplitude";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_frequency";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_spacing";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_proportion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_waves_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_perlin_noise_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_perlin_noise_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_perlin_noise_proportion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_perlin_noise_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_perlin_noise_octave_count";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_perlin_noise_persistence";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_perlin_noise_lacunarity";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_voronoi_steps_per_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_voronoi_color_gap";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_voronoi_color_glow";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_voronoi_distortion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_voronoi_gap";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_voronoi_glow";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_warp_proportion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_warp_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_warp_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_warp_shape_scale";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_warp_distortion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_warp_swirl";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_warp_swirl_iterations";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_color_bloom";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_bloom";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_intensity";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_density";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_spotty";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_mid_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_god_rays_mid_intensity";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_density";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_distortion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_stroke_width";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_stroke_taper";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_stroke_cap";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_noise";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_noise_frequency";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_spiral_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_band_count";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_twist";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_center";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_proportion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_noise";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_swirl_noise_frequency";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dithering_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dithering_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dithering_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dithering_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_dithering_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_grain_gradient_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_grain_gradient_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_grain_gradient_intensity";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_grain_gradient_noise";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_grain_gradient_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_roundness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_thickness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_margin";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_margin_left";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_margin_right";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_margin_top";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_margin_bottom";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_aspect_ratio";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_intensity";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_bloom";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_spots";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_spot_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_pulse";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_smoke";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_pulsing_border_smoke_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_angle1";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_angle2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_length";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_edges";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_blur";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_fade_in";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_fade_out";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_density";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_color_panels_gradient";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_positions";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_wave_x";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_wave_x_shift";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_wave_y";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_wave_y_shift";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_mixing";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_grain_mixer";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_mesh_gradient_grain_overlay";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_radius";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_focal_distance";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_focal_angle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_falloff";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_mixing";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_distortion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_distortion_shift";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_distortion_freq";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_grain_mixer";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_static_radial_gradient_grain_overlay";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_contrast";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_roughness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_fiber";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_fiber_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_crumples";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_crumple_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_folds";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_fold_count";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_fade";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_drops";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_paper_texture_seed";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_color_shadow";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_color_highlight";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_shadows";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_highlights";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_angle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_distortion_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_distortion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_shift";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_stretch";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_blur";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_edges";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_margin";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_grain_mixer";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_fluted_glass_grain_overlay";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_color_highlight";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_highlights";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_layering";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_edges";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_caustic";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_waves";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_water_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_color_highlight";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_color_steps";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_original_colors";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_image_dithering_inverted";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heatmap_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heatmap_contour";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heatmap_angle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heatmap_noise";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heatmap_inner_glow";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heatmap_outer_glow";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_color_tint";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_repetition";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_shift_red";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_shift_blue";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_distortion";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_contour";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_angle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_liquid_metal_shape";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_color_front";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_grid";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_radius";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_contrast";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_original_colors";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_inverted";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_grain_mixer";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_grain_overlay";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_grain_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_dots_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_color_back";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_color_c";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_color_m";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_color_y";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_color_k";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_min_dot";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_contrast";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_softness";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_grain_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_grain_mixer";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_grain_overlay";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_grid_noise";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_flood_c";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_flood_m";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_flood_y";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_flood_k";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_gain_c";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_gain_m";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_gain_y";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_gain_k";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_halftone_cmyk_type";
  DROP TYPE "public"."enum_pages_hero_shader_type";
  DROP TYPE "public"."enum_pages_hero_dot_grid_shape";
  DROP TYPE "public"."enum_pages_hero_warp_shape";
  DROP TYPE "public"."enum_pages_hero_dithering_shape";
  DROP TYPE "public"."enum_pages_hero_dithering_type";
  DROP TYPE "public"."enum_pages_hero_grain_gradient_shape";
  DROP TYPE "public"."enum_pages_hero_pulsing_border_aspect_ratio";
  DROP TYPE "public"."enum_pages_hero_fluted_glass_shape";
  DROP TYPE "public"."enum_pages_hero_fluted_glass_distortion_shape";
  DROP TYPE "public"."enum_pages_hero_image_dithering_type";
  DROP TYPE "public"."enum_pages_hero_liquid_metal_shape";
  DROP TYPE "public"."enum_pages_hero_halftone_dots_grid";
  DROP TYPE "public"."enum_pages_hero_halftone_dots_type";
  DROP TYPE "public"."enum_pages_hero_halftone_cmyk_type";
  DROP TYPE "public"."enum__pages_v_version_hero_shader_type";
  DROP TYPE "public"."enum__pages_v_version_hero_dot_grid_shape";
  DROP TYPE "public"."enum__pages_v_version_hero_warp_shape";
  DROP TYPE "public"."enum__pages_v_version_hero_dithering_shape";
  DROP TYPE "public"."enum__pages_v_version_hero_dithering_type";
  DROP TYPE "public"."enum__pages_v_version_hero_grain_gradient_shape";
  DROP TYPE "public"."enum__pages_v_version_hero_pulsing_border_aspect_ratio";
  DROP TYPE "public"."enum__pages_v_version_hero_fluted_glass_shape";
  DROP TYPE "public"."enum__pages_v_version_hero_fluted_glass_distortion_shape";
  DROP TYPE "public"."enum__pages_v_version_hero_image_dithering_type";
  DROP TYPE "public"."enum__pages_v_version_hero_liquid_metal_shape";
  DROP TYPE "public"."enum__pages_v_version_hero_halftone_dots_grid";
  DROP TYPE "public"."enum__pages_v_version_hero_halftone_dots_type";
  DROP TYPE "public"."enum__pages_v_version_hero_halftone_cmyk_type";`)
}
