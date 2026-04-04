import type { Field } from 'payload'

const shaderActive = (_: any, { type }: any) => type === 'shader'

export const commonShaderFields: Field[] = [
  {
    name: 'shaderSpeed',
    type: 'number',
    label: 'Animation Speed',
    defaultValue: 0.3,
    min: -2,
    max: 2,
    admin: {
      step: 0.01,
      condition: shaderActive,
      description: 'Negative values reverse the animation. 0 = static.',
    },
  },
  {
    name: 'shaderScale',
    type: 'number',
    label: 'Scale',
    defaultValue: 1,
    min: 0.01,
    max: 4,
    admin: {
      step: 0.01,
      condition: shaderActive,
    },
  },
  {
    name: 'shaderRotation',
    type: 'number',
    label: 'Rotation (degrees)',
    defaultValue: 0,
    min: 0,
    max: 360,
    admin: {
      step: 1,
      condition: shaderActive,
    },
  },
]
