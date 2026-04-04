import {
  MeshGradient,
  SmokeRing,
  NeuroNoise,
  DotOrbit,
  DotGrid,
  SimplexNoise,
  Metaballs,
  Waves,
  PerlinNoise,
  Voronoi,
  Warp,
  GodRays,
  Spiral,
  Swirl,
  Dithering,
  GrainGradient,
  PulsingBorder,
  ColorPanels,
  StaticMeshGradient,
  StaticRadialGradient,
  PaperTexture,
  FlutedGlass,
  Water,
  ImageDithering,
  Heatmap,
  LiquidMetal,
  HalftoneDots,
  HalftoneCmyk,
} from '@paper-design/shaders-react'

type ShaderRegistryEntry = {
  component: React.FC<any>
  needsImage: boolean
  colorArrayKeys: string[]
}

function extractProps(
  prefix: string,
  colorArrayKeys: string[],
  data: Record<string, any>,
): Record<string, any> {
  const params: Record<string, any> = {}
  const prefixLen = prefix.length

  for (const [key, value] of Object.entries(data)) {
    if (!key.startsWith(prefix) || value === undefined || value === null) continue

    // Convert prefixed key back to camelCase param name
    const paramName = key[prefixLen].toLowerCase() + key.slice(prefixLen + 1)

    if (colorArrayKeys.includes(paramName) && Array.isArray(value)) {
      params[paramName] = value.map((item: { color: string }) => item.color)
    } else {
      params[paramName] = value
    }
  }

  return params
}

export const shaderRegistry: Record<string, ShaderRegistryEntry> = {
  meshGradient: {
    component: MeshGradient,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  smokeRing: {
    component: SmokeRing,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  neuroNoise: {
    component: NeuroNoise,
    needsImage: false,
    colorArrayKeys: [],
  },
  dotOrbit: {
    component: DotOrbit,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  dotGrid: {
    component: DotGrid,
    needsImage: false,
    colorArrayKeys: [],
  },
  simplexNoise: {
    component: SimplexNoise,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  metaballs: {
    component: Metaballs,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  waves: {
    component: Waves,
    needsImage: false,
    colorArrayKeys: [],
  },
  perlinNoise: {
    component: PerlinNoise,
    needsImage: false,
    colorArrayKeys: [],
  },
  voronoi: {
    component: Voronoi,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  warp: {
    component: Warp,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  godRays: {
    component: GodRays,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  spiral: {
    component: Spiral,
    needsImage: false,
    colorArrayKeys: [],
  },
  swirl: {
    component: Swirl,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  dithering: {
    component: Dithering,
    needsImage: false,
    colorArrayKeys: [],
  },
  grainGradient: {
    component: GrainGradient,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  pulsingBorder: {
    component: PulsingBorder,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  colorPanels: {
    component: ColorPanels,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  staticMeshGradient: {
    component: StaticMeshGradient,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  staticRadialGradient: {
    component: StaticRadialGradient,
    needsImage: false,
    colorArrayKeys: ['colors'],
  },
  paperTexture: {
    component: PaperTexture,
    needsImage: true,
    colorArrayKeys: [],
  },
  flutedGlass: {
    component: FlutedGlass,
    needsImage: true,
    colorArrayKeys: [],
  },
  water: {
    component: Water,
    needsImage: true,
    colorArrayKeys: [],
  },
  imageDithering: {
    component: ImageDithering,
    needsImage: true,
    colorArrayKeys: [],
  },
  heatmap: {
    component: Heatmap,
    needsImage: true,
    colorArrayKeys: ['colors'],
  },
  liquidMetal: {
    component: LiquidMetal,
    needsImage: true,
    colorArrayKeys: [],
  },
  halftoneDots: {
    component: HalftoneDots,
    needsImage: true,
    colorArrayKeys: [],
  },
  halftoneCmyk: {
    component: HalftoneCmyk,
    needsImage: true,
    colorArrayKeys: [],
  },
}

export { extractProps }
