import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'godRays'

export const godRaysFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 5, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  colorField({ name: `${key}ColorBloom`, label: 'Bloom Color', shaderKey: key }),
  numberField({ name: `${key}Bloom`, label: 'Bloom', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Intensity`, label: 'Intensity', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Density`, label: 'Density', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Spotty`, label: 'Spotty', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}MidSize`, label: 'Mid Size', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}MidIntensity`,
    label: 'Mid Intensity',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
]
