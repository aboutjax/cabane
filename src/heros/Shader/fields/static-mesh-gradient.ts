import type { Field } from 'payload'
import { colorArrayField, numberField } from './helpers'

const key = 'staticMeshGradient'

export const staticMeshGradientFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  numberField({
    name: `${key}Positions`,
    label: 'Positions',
    min: 0,
    max: 100,
    step: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}WaveX`, label: 'Wave X', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}WaveXShift`, label: 'Wave X Shift', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}WaveY`, label: 'Wave Y', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}WaveYShift`, label: 'Wave Y Shift', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Mixing`, label: 'Mixing', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}GrainMixer`, label: 'Grain Mixer', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}GrainOverlay`,
    label: 'Grain Overlay',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
]
