import type { Field } from 'payload'
import { colorField, numberField, selectField } from './helpers'

const key = 'dotGrid'

export const dotGridFields: Field[] = [
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  colorField({ name: `${key}ColorFill`, label: 'Fill Color', shaderKey: key }),
  colorField({ name: `${key}ColorStroke`, label: 'Stroke Color', shaderKey: key }),
  numberField({ name: `${key}Size`, label: 'Size (px)', min: 1, max: 100, step: 1, shaderKey: key }),
  numberField({ name: `${key}GapX`, label: 'Gap X (px)', min: 2, max: 500, step: 1, shaderKey: key }),
  numberField({ name: `${key}GapY`, label: 'Gap Y (px)', min: 2, max: 500, step: 1, shaderKey: key }),
  numberField({
    name: `${key}StrokeWidth`,
    label: 'Stroke Width (px)',
    min: 0,
    max: 50,
    step: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}SizeRange`, label: 'Size Range', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}OpacityRange`,
    label: 'Opacity Range',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
  selectField({
    name: `${key}Shape`,
    label: 'Shape',
    options: ['circle', 'diamond', 'square', 'triangle'],
    defaultValue: 'circle',
    shaderKey: key,
  }),
]
