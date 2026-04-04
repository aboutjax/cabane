import type { Field } from 'payload'
import { colorField, numberField } from './helpers'

const key = 'spiral'

export const spiralFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Density`, label: 'Density', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Distortion`, label: 'Distortion', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}StrokeWidth`,
    label: 'Stroke Width',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
  numberField({
    name: `${key}StrokeTaper`,
    label: 'Stroke Taper',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}StrokeCap`, label: 'Stroke Cap', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Noise`, label: 'Noise', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}NoiseFrequency`,
    label: 'Noise Frequency',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
]
