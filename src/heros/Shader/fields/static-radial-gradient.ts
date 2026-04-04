import type { Field } from 'payload'
import { colorArrayField, colorField, numberField } from './helpers'

const key = 'staticRadialGradient'

export const staticRadialGradientFields: Field[] = [
  colorArrayField({ name: `${key}Colors`, label: 'Colors', maxRows: 10, shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Radius`, label: 'Radius', min: 0, max: 3, shaderKey: key }),
  numberField({
    name: `${key}FocalDistance`,
    label: 'Focal Distance',
    min: 0,
    max: 3,
    shaderKey: key,
  }),
  numberField({
    name: `${key}FocalAngle`,
    label: 'Focal Angle',
    min: 0,
    max: 360,
    step: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}Falloff`, label: 'Falloff', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}Mixing`, label: 'Mixing', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Distortion`, label: 'Distortion', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}DistortionShift`,
    label: 'Distortion Shift',
    min: -1,
    max: 1,
    shaderKey: key,
  }),
  numberField({
    name: `${key}DistortionFreq`,
    label: 'Distortion Frequency',
    min: 0,
    max: 20,
    shaderKey: key,
  }),
  numberField({ name: `${key}GrainMixer`, label: 'Grain Mixer', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}GrainOverlay`,
    label: 'Grain Overlay',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
]
