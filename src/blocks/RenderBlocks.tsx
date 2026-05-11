import React, { Fragment } from 'react'

import type { Page, Project } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { OurProcessBlock } from '@/blocks/OurProcess/Component'
import { GalleryBlock } from '@/blocks/Gallery/Component'
import { Reveal } from '@/components/Reveal'
import { GridFrame } from '@/components/GridFrame'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  ourProcess: OurProcessBlock,
  gallery: GalleryBlock,
}

export const RenderBlocks: React.FC<{
  blocks: (Page['layout'][0] | NonNullable<Project['layout']>[0])[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              const isLast = index === blocks.length - 1
              return (
                <GridFrame
                  key={index}
                  bottomCap={isLast}
                  className={isLast ? 'border-b border-border' : ''}
                >
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} />
                </GridFrame>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
