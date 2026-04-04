import type { Field } from 'payload'
import { colorArrayField, numberField } from './helpers'

const key = 'simplexNoise'

export const simplexNoiseFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  numberField({
    name: `${key}StepsPerColor`,
    label: 'Steps Per Color',
    min: 1,
    max: 10,
    step: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
]
