import type { Field } from 'payload'
import { colorField, numberField, selectField } from './helpers'

const key = 'dithering'

export const ditheringFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  selectField({
    name: `${key}Shape`,
    label: 'Shape',
    options: ['simplex', 'warp', 'dots', 'wave', 'ripple', 'swirl', 'sphere'],
    defaultValue: 'simplex',
    shaderKey: key,
  }),
  selectField({
    name: `${key}Type`,
    label: 'Dithering Type',
    options: ['random', '2x2', '4x4', '8x8'],
    defaultValue: 'random',
    shaderKey: key,
  }),
  numberField({ name: `${key}Size`, label: 'Pixel Size', min: 0.5, max: 20, shaderKey: key }),
]
