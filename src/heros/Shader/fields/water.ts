import type { Field } from 'payload'
import { colorField, numberField } from './helpers'

const key = 'water'

export const waterFields: Field[] = [
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  colorField({ name: `${key}ColorHighlight`, label: 'Highlight Color', shaderKey: key }),
  numberField({ name: `${key}Highlights`, label: 'Highlights', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Layering`, label: 'Layering', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Edges`, label: 'Edges', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Caustic`, label: 'Caustic', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Waves`, label: 'Waves', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Size`, label: 'Size', min: 0.01, max: 7, shaderKey: key }),
]
