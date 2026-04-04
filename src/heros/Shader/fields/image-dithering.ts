import type { Field } from 'payload'
import { booleanField, colorField, numberField, selectField } from './helpers'

const key = 'imageDithering'

export const imageDitheringFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  colorField({ name: `${key}ColorHighlight`, label: 'Highlight Color', shaderKey: key }),
  selectField({
    name: `${key}Type`,
    label: 'Dithering Type',
    options: ['random', '2x2', '4x4', '8x8'],
    defaultValue: 'random',
    shaderKey: key,
  }),
  numberField({ name: `${key}Size`, label: 'Pixel Size', min: 0.5, max: 20, shaderKey: key }),
  numberField({
    name: `${key}ColorSteps`,
    label: 'Color Steps',
    min: 1,
    max: 7,
    step: 1,
    shaderKey: key,
  }),
  booleanField({
    name: `${key}OriginalColors`,
    label: 'Use Original Colors',
    shaderKey: key,
  }),
  booleanField({ name: `${key}Inverted`, label: 'Inverted', shaderKey: key }),
]
