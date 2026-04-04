import type { Field } from 'payload'
import { booleanField, colorField, numberField, selectField } from './helpers'

const key = 'halftoneDots'

export const halftoneDotsFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Size`, label: 'Size', min: 0, max: 1, shaderKey: key }),
  selectField({
    name: `${key}Grid`,
    label: 'Grid',
    options: ['square', 'hex'],
    defaultValue: 'square',
    shaderKey: key,
  }),
  numberField({ name: `${key}Radius`, label: 'Radius', min: 0, max: 2, shaderKey: key }),
  numberField({ name: `${key}Contrast`, label: 'Contrast', min: 0, max: 1, shaderKey: key }),
  booleanField({
    name: `${key}OriginalColors`,
    label: 'Use Original Colors',
    shaderKey: key,
  }),
  booleanField({ name: `${key}Inverted`, label: 'Inverted', shaderKey: key }),
  numberField({ name: `${key}GrainMixer`, label: 'Grain Mixer', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}GrainOverlay`,
    label: 'Grain Overlay',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}GrainSize`, label: 'Grain Size', min: 0, max: 1, shaderKey: key }),
  selectField({
    name: `${key}Type`,
    label: 'Dot Type',
    options: ['classic', 'gooey', 'holes', 'soft'],
    defaultValue: 'classic',
    shaderKey: key,
  }),
]
