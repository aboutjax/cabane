import type { Field } from 'payload'
import { colorField, numberField, selectField } from './helpers'

const key = 'flutedGlass'

export const flutedGlassFields: Field[] = [
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  colorField({ name: `${key}ColorShadow`, label: 'Shadow Color', shaderKey: key }),
  colorField({ name: `${key}ColorHighlight`, label: 'Highlight Color', shaderKey: key }),
  numberField({ name: `${key}Shadows`, label: 'Shadows', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Highlights`, label: 'Highlights', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Size`, label: 'Size', min: 0, max: 1, shaderKey: key }),
  selectField({
    name: `${key}Shape`,
    label: 'Grid Shape',
    options: ['lines', 'linesIrregular', 'wave', 'zigzag', 'pattern'],
    defaultValue: 'lines',
    shaderKey: key,
  }),
  numberField({ name: `${key}Angle`, label: 'Angle', min: 0, max: 180, step: 1, shaderKey: key }),
  selectField({
    name: `${key}DistortionShape`,
    label: 'Distortion Shape',
    options: ['prism', 'lens', 'contour', 'cascade', 'flat'],
    defaultValue: 'prism',
    shaderKey: key,
  }),
  numberField({ name: `${key}Distortion`, label: 'Distortion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Shift`, label: 'Shift', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}Stretch`, label: 'Stretch', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Blur`, label: 'Blur', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Edges`, label: 'Edges', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Margin`, label: 'Margin', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}GrainMixer`, label: 'Grain Mixer', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}GrainOverlay`,
    label: 'Grain Overlay',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
]
