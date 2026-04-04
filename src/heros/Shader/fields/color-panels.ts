import type { Field } from 'payload'
import { booleanField, colorArrayField, colorField, numberField } from './helpers'

const key = 'colorPanels'

export const colorPanelsFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 7, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Angle1`, label: 'Angle 1', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}Angle2`, label: 'Angle 2', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}Length`, label: 'Length', min: 0, max: 3, shaderKey: key }),
  booleanField({ name: `${key}Edges`, label: 'Edges', defaultValue: true, shaderKey: key }),
  numberField({ name: `${key}Blur`, label: 'Blur', min: 0, max: 0.5, shaderKey: key }),
  numberField({ name: `${key}FadeIn`, label: 'Fade In', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}FadeOut`, label: 'Fade Out', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Density`, label: 'Density', min: 0.25, max: 7, shaderKey: key }),
  numberField({ name: `${key}Gradient`, label: 'Gradient', min: 0, max: 1, shaderKey: key }),
]
