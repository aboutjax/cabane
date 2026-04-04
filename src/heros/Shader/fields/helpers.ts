import type { Field } from 'payload'

export const shaderCondition = (shaderKey: string) => (_: any, { type, shaderType }: any) =>
  type === 'shader' && shaderType === shaderKey

export function numberField(opts: {
  name: string
  label: string
  min: number
  max: number
  defaultValue?: number
  step?: number
  shaderKey: string
}): Field {
  return {
    name: opts.name,
    type: 'number',
    label: opts.label,
    min: opts.min,
    max: opts.max,
    defaultValue: opts.defaultValue,
    admin: {
      step: opts.step ?? 0.01,
      condition: shaderCondition(opts.shaderKey),
    },
  }
}

export function colorField(opts: {
  name: string
  label: string
  defaultValue?: string
  shaderKey: string
}): Field {
  return {
    name: opts.name,
    type: 'text',
    label: opts.label,
    defaultValue: opts.defaultValue,
    admin: {
      condition: shaderCondition(opts.shaderKey),
      description: 'Any CSS color value (e.g. #ff0000, rgba(255,0,0,1))',
    },
  }
}

export function colorArrayField(opts: {
  name: string
  label: string
  maxRows: number
  shaderKey: string
}): Field {
  return {
    name: opts.name,
    type: 'array',
    label: opts.label,
    maxRows: opts.maxRows,
    admin: {
      condition: shaderCondition(opts.shaderKey),
      initCollapsed: true,
    },
    fields: [
      {
        name: 'color',
        type: 'text',
        required: true,
        admin: {
          description: 'CSS color value',
        },
      },
    ],
  }
}

export function selectField(opts: {
  name: string
  label: string
  options: string[]
  defaultValue?: string
  shaderKey: string
}): Field {
  return {
    name: opts.name,
    type: 'select',
    label: opts.label,
    options: opts.options.map((v) => ({ label: v, value: v })),
    defaultValue: opts.defaultValue,
    admin: {
      condition: shaderCondition(opts.shaderKey),
    },
  }
}

export function booleanField(opts: {
  name: string
  label: string
  defaultValue?: boolean
  shaderKey: string
}): Field {
  return {
    name: opts.name,
    type: 'checkbox',
    label: opts.label,
    defaultValue: opts.defaultValue,
    admin: {
      condition: shaderCondition(opts.shaderKey),
    },
  }
}
