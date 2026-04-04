import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'dotOrbit'

export const dotOrbitFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Size`, label: 'Size', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}SizeRange`, label: 'Size Range', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Spreading`, label: 'Spreading', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}StepsPerColor`,
    label: 'Steps Per Color',
    min: 1,
    max: 4,
    step: 1,
    shaderKey: key,
  }),
]
