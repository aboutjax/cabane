import type { Field } from 'payload'
import { colorArrayField, colorField, numberField, selectField } from './helpers'

const key = 'pulsingBorder'

export const pulsingBorderFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 5, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Roundness`, label: 'Roundness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Thickness`, label: 'Thickness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Margin`, label: 'Margin', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}MarginLeft`, label: 'Margin Left', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}MarginRight`, label: 'Margin Right', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}MarginTop`, label: 'Margin Top', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}MarginBottom`,
    label: 'Margin Bottom',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
  selectField({
    name: `${key}AspectRatio`,
    label: 'Aspect Ratio',
    options: ['auto', 'square'],
    defaultValue: 'auto',
    shaderKey: key,
  }),
  numberField({ name: `${key}Intensity`, label: 'Intensity', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Bloom`, label: 'Bloom', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Spots`, label: 'Spots', min: 1, max: 20, step: 1, shaderKey: key }),
  numberField({ name: `${key}SpotSize`, label: 'Spot Size', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Pulse`, label: 'Pulse', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Smoke`, label: 'Smoke', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}SmokeSize`, label: 'Smoke Size', min: 0, max: 1, shaderKey: key }),
]
