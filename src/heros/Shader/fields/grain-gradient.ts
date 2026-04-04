import type { Field } from 'payload'
import { colorArrayField, colorField, numberField, selectField } from './helpers'

const key = 'grainGradient'

export const grainGradientFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 7, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Intensity`, label: 'Intensity', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Noise`, label: 'Noise', min: 0, max: 1, shaderKey: key }),
  selectField({
    name: `${key}Shape`,
    label: 'Shape',
    options: ['wave', 'dots', 'truchet', 'corners', 'ripple', 'blob', 'sphere'],
    defaultValue: 'blob',
    shaderKey: key,
  }),
]
