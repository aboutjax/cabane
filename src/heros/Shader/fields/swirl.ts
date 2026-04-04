import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'swirl'

export const swirlFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({
    name: `${key}BandCount`,
    label: 'Band Count',
    min: 0,
    max: 15,
    step: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}Twist`, label: 'Twist', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Center`, label: 'Center', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Proportion`, label: 'Proportion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Noise`, label: 'Noise', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}NoiseFrequency`,
    label: 'Noise Frequency',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
]
