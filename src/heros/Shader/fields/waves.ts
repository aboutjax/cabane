import type { Field } from 'payload'
import { colorField, numberField } from './helpers'

const key = 'waves'

export const wavesFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Shape`, label: 'Shape', min: 0, max: 3, shaderKey: key }),
  numberField({ name: `${key}Amplitude`, label: 'Amplitude', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Frequency`, label: 'Frequency', min: 0, max: 2, shaderKey: key }),
  numberField({ name: `${key}Spacing`, label: 'Spacing', min: 0, max: 2, shaderKey: key }),
  numberField({ name: `${key}Proportion`, label: 'Proportion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
]
