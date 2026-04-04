import type { Field } from 'payload'

import { commonShaderFields } from './fields/common'
import { meshGradientFields } from './fields/mesh-gradient'
import { smokeRingFields } from './fields/smoke-ring'
import { neuroNoiseFields } from './fields/neuro-noise'
import { dotOrbitFields } from './fields/dot-orbit'
import { dotGridFields } from './fields/dot-grid'
import { simplexNoiseFields } from './fields/simplex-noise'
import { metaballsFields } from './fields/metaballs'
import { wavesFields } from './fields/waves'
import { perlinNoiseFields } from './fields/perlin-noise'
import { voronoiFields } from './fields/voronoi'
import { warpFields } from './fields/warp'
import { godRaysFields } from './fields/god-rays'
import { spiralFields } from './fields/spiral'
import { swirlFields } from './fields/swirl'
import { ditheringFields } from './fields/dithering'
import { grainGradientFields } from './fields/grain-gradient'
import { pulsingBorderFields } from './fields/pulsing-border'
import { colorPanelsFields } from './fields/color-panels'
import { staticMeshGradientFields } from './fields/static-mesh-gradient'
import { staticRadialGradientFields } from './fields/static-radial-gradient'
import { paperTextureFields } from './fields/paper-texture'
import { flutedGlassFields } from './fields/fluted-glass'
import { waterFields } from './fields/water'
import { imageDitheringFields } from './fields/image-dithering'
import { heatmapFields } from './fields/heatmap'
import { liquidMetalFields } from './fields/liquid-metal'
import { halftoneDotsFields } from './fields/halftone-dots'
import { halftoneCmykFields } from './fields/halftone-cmyk'

export const SHADER_OPTIONS = [
  // Generative
  { label: 'Mesh Gradient', value: 'meshGradient' },
  { label: 'Smoke Ring', value: 'smokeRing' },
  { label: 'Neuro Noise', value: 'neuroNoise' },
  { label: 'Dot Orbit', value: 'dotOrbit' },
  { label: 'Dot Grid', value: 'dotGrid' },
  { label: 'Simplex Noise', value: 'simplexNoise' },
  { label: 'Metaballs', value: 'metaballs' },
  { label: 'Waves', value: 'waves' },
  { label: 'Perlin Noise', value: 'perlinNoise' },
  { label: 'Voronoi', value: 'voronoi' },
  { label: 'Warp', value: 'warp' },
  { label: 'God Rays', value: 'godRays' },
  { label: 'Spiral', value: 'spiral' },
  { label: 'Swirl', value: 'swirl' },
  { label: 'Dithering', value: 'dithering' },
  { label: 'Grain Gradient', value: 'grainGradient' },
  { label: 'Pulsing Border', value: 'pulsingBorder' },
  { label: 'Color Panels', value: 'colorPanels' },
  { label: 'Static Mesh Gradient', value: 'staticMeshGradient' },
  { label: 'Static Radial Gradient', value: 'staticRadialGradient' },
  // Image-based
  { label: 'Paper Texture', value: 'paperTexture' },
  { label: 'Fluted Glass', value: 'flutedGlass' },
  { label: 'Water', value: 'water' },
  { label: 'Image Dithering', value: 'imageDithering' },
  { label: 'Heatmap', value: 'heatmap' },
  { label: 'Liquid Metal', value: 'liquidMetal' },
  { label: 'Halftone Dots', value: 'halftoneDots' },
  { label: 'Halftone CMYK', value: 'halftoneCmyk' },
] as const

export const shaderFields: Field[] = [
  {
    name: 'shaderType',
    type: 'select',
    label: 'Shader',
    options: [...SHADER_OPTIONS],
    admin: {
      condition: (_: any, { type }: any) => type === 'shader',
    },
  },
  ...commonShaderFields,
  // Generative shaders
  ...meshGradientFields,
  ...smokeRingFields,
  ...neuroNoiseFields,
  ...dotOrbitFields,
  ...dotGridFields,
  ...simplexNoiseFields,
  ...metaballsFields,
  ...wavesFields,
  ...perlinNoiseFields,
  ...voronoiFields,
  ...warpFields,
  ...godRaysFields,
  ...spiralFields,
  ...swirlFields,
  ...ditheringFields,
  ...grainGradientFields,
  ...pulsingBorderFields,
  ...colorPanelsFields,
  ...staticMeshGradientFields,
  ...staticRadialGradientFields,
  // Image-based shaders
  ...paperTextureFields,
  ...flutedGlassFields,
  ...waterFields,
  ...imageDitheringFields,
  ...heatmapFields,
  ...liquidMetalFields,
  ...halftoneDotsFields,
  ...halftoneCmykFields,
]
