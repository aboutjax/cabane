import type { Field } from 'payload'
import { colorField, numberField } from './helpers'

const key = 'paperTexture'

export const paperTextureFields: Field[] = [
  colorField({ name: `${key}ColorFront`, label: 'Front Color', shaderKey: key }),
  colorField({ name: `${key}ColorBack`, label: 'Background Color', shaderKey: key }),
  numberField({ name: `${key}Contrast`, label: 'Contrast', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Roughness`, label: 'Roughness', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Fiber`, label: 'Fiber', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}FiberSize`, label: 'Fiber Size', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Crumples`, label: 'Crumples', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}CrumpleSize`, label: 'Crumple Size', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Folds`, label: 'Folds', min: 0, max: 1, shaderKey: key }),
  numberField({
    name: `${key}FoldCount`,
    label: 'Fold Count',
    min: 1,
    max: 15,
    step: 1,
    shaderKey: key,
  }),
  numberField({ name: `${key}Fade`, label: 'Fade', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Drops`, label: 'Drops', min: 0, max: 1, shaderKey: key }),
  numberField({ name: `${key}Seed`, label: 'Seed', min: 0, max: 1000, step: 1, shaderKey: key }),
]
