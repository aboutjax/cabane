import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'smokeRing'

export const smokeRingFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Thickness`, label: 'Thickness', min: 0.01, max: 1, shaderKey: key }),
  numberField({ name: `${key}Radius`, label: 'Radius', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}InnerShape`, label: 'Inner Shape', min: 0, max: 4, shaderKey: key }),
  numberField({
    name: `${key}NoiseIterations`,
    label: 'Noise Iterations',
    min: 1,
    max: 8,
    step: 1,
    shaderKey: key,
  }),
  numberField({
    name: `${key}NoiseScale`,
    label: 'Noise Scale',
    min: 0.01,
    max: 5,
    shaderKey: key,
  }),
]
