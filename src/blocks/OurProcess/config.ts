import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const OurProcess: Block = {
  slug: 'ourProcess',
  interfaceName: 'OurProcessBlock',
  labels: {
    plural: 'Our Process Blocks',
    singular: 'Our Process',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Process',
    },
    {
      name: 'subHeading',
      type: 'text',
      defaultValue:
        'Structured, iterative framework used to solve complex problems and create user-centered products or services',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      labels: {
        singular: 'Step',
        plural: 'Steps',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
