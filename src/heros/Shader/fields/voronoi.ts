import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'voronoi'

export const voronoiFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 5, shaderKey: key }),
  numberField({
    name: `${key}StepsPerColor`,
    label: 'Steps Per Color',
    min: 1,
    max: 3,
    step: 1,
    shaderKey: key,
  }),
  colorField({ name: `${key}ColorGap`, label: 'Gap Color', shaderKey: key }),
  colorField({ name: `${key}ColorGlow`, label: 'Glow Color', shaderKey: key }),
  numberField({ name: `${key}Distortion`, label: 'Distortion', min: 0, max: 0.5, shaderKey: key }),
  numberField({ name: `${key}Gap`, label: 'Gap', min: 0, max: 0.1, shaderKey: key }),
  numberField({ name: `${key}Glow`, label: 'Glow', min: 0, max: 1, shaderKey: key }),
]
