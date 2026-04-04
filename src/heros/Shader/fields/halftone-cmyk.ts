import type { Field } from 'payload'
import { colorField, numberField, selectField } from './helpers'

const key = 'halftoneCmyk'

export const halftoneCmykFields: Field[] = [
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  colorField({ name: `${key}ColorC`, label: 'Cyan Color', shaderKey: key }),
  colorField({ name: `${key}ColorM`, label: 'Magenta Color', shaderKey: key }),
  colorField({ name: `${key}ColorY`, label: 'Yellow Color', shaderKey: key }),
  colorField({ name: `${key}ColorK`, label: 'Black Color', shaderKey: key }),
  numberField({ name: `${key}Size`, label: 'Size', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}MinDot`, label: 'Min Dot', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Contrast`, label: 'Contrast', min: 0, max: 2, shaderKey: key }),
  numberField({ name: `${key}Softness`, label: 'Softness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}GrainSize`, label: 'Grain Size', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}GrainMixer`, label: 'Grain Mixer', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}GrainOverlay`,
    label: 'Grain Overlay',
    min: 0,
    max: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}GridNoise`, label: 'Grid Noise', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}FloodC`, label: 'Flood C', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}FloodM`, label: 'Flood M', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}FloodY`, label: 'Flood Y', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}FloodK`, label: 'Flood K', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}GainC`, label: 'Gain C', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}GainM`, label: 'Gain M', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}GainY`, label: 'Gain Y', min: -1, max: 1, shaderKey: key }),
  numberField({ name: `${key}GainK`, label: 'Gain K', min: -1, max: 1, shaderKey: key }),
  selectField({
    name: `${key}Type`,
    label: 'Dot Type',
    options: ['dots', 'ink', 'sharp'],
    defaultValue: 'dots',
    shaderKey: key,
  }),
]
