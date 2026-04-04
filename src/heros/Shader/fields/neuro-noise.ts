import type { Field } from 'payload'
import { colorField, numberField } from './helpers'

const key = 'neuroNoise'

export const neuroNoiseFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorMid`, label: 'Mid Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Brightness`, label: 'Brightness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Contrast`, label: 'Contrast', min: 0, max: 1, shaderKey: key }),
]
