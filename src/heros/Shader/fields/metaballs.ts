import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'metaballs'

export const metaballsFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 8, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Count`, label: 'Count', min: 1, max: 20, step: 1, shaderKey: key }),
  numberField({ name: `${key}Size`, label: 'Size', min: 0, max: 1, shaderKey: key }),
]
