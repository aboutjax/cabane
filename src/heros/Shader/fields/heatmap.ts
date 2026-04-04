import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'heatmap'

export const heatmapFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Contour`, label: 'Contour', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Angle`, label: 'Angle', min: 0, max: 360, step: 1, shaderKey: key }),
  numberField({ name: `${key}Noise`, label: 'Noise', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}InnerGlow`, label: 'Inner Glow', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}OuterGlow`, label: 'Outer Glow', min: 0, max: 1, shaderKey: key }),
]
