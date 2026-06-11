import type { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  labels: {
    singular: 'Gallery',
    plural: 'Galleries',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      required: true,
      defaultValue: 'grid',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Carousel', value: 'carousel' },
        { label: 'Masonry', value: 'masonry' },
        { label: 'Full Width Carousel', value: 'fullWidthCarousel' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
        {
          name: 'altOverride',
          type: 'text',
          label: 'Alt text override',
        },
      ],
    },
  ],
}
