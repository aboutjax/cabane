import type { Field } from 'payload'
import { colorField, numberField } from './helpers'

const key = 'perlinNoise'

export const perlinNoiseFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Proportion`, label: 'Proportion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}OctaveCount`,
    label: 'Octave Count',
    min: 1,
    max: 8,
    step: 1,
    shaderKey: key,
  }),
  numberField({
    name: `${key}Persistence`,
    label: 'Persistence',
    min: 0.3,
    max: 1,
    shaderKey: key,
  }),
  numberField({
    name: `${key}Lacunarity`,
    label: 'Lacunarity',
    min: 1.5,
    max: 10,
    shaderKey: key,
  }),
]
