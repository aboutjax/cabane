import type { Field } from 'payload'
import { colorArrayField, numberField } from './helpers'

const key = 'meshGradient'

export const meshGradientFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  numberField({ name: `${key}Distortion`, label: 'Distortion', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Swirl`, label: 'Swirl', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}GrainMixer`, label: 'Grain Mixer', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}GrainOverlay`,
    label: 'Grain Overlay',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
]
