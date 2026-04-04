import type { Field } from 'payload'
import { colorArrayField, numberField, selectField } from './helpers'

const key = 'warp'

export const warpFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  numberField({ name: `${key}Proportion`, label: 'Proportion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
  selectField({
    name: `${key}Shape`,
    label: 'Shape',
    options: ['checks', 'stripes', 'edge'],
    defaultValue: 'checks',
    shaderKey: key,
  }),
  numberField({ name: `${key}ShapeScale`, label: 'Shape Scale', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Distortion`, label: 'Distortion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Swirl`, label: 'Swirl', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}SwirlIterations`,
    label: 'Swirl Iterations',
    min: 0,
    max: 20,
    step: 1,
    shaderKey: key,
  }),
]
