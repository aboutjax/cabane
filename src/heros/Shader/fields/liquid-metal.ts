import type { Field } from 'payload'
import { colorField, numberField, selectField } from './helpers'

const key = 'liquidMetal'

export const liquidMetalFields: Field[] = [
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  colorField({ name: `${key}ColorTint`, label: 'Tint Color', shaderKey: key }),
  numberField({
    name: `${key}Repetition`,
    label: 'Repetition',
    min: 1,
    max: 10,
    step: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}ShiftRed`, label: 'Shift Red', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}ShiftBlue`, label: 'Shift Blue', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}Distortion`, label: 'Distortion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Contour`, label: 'Contour', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}Angle`,
    label: 'Angle',
    min: 0,
    max: 360,
    step: 1,
    shaderKey: key,
  }),
  selectField({
    name: `${key}Shape`,
    label: 'Shape',
    options: ['none', 'circle', 'daisy', 'diamond', 'metaballs'],
    defaultValue: 'none',
    shaderKey: key,
  }),
]
