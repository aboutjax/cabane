import React from 'react'

import { Card, CardPostData, cardGridClassName } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
  relationTo?: 'posts' | 'projects'
}

export const CollectionArchive: React.FC<Props> = ({ posts, relationTo = 'posts' }) => {
  return (
    <div className={cardGridClassName}>
      {posts.map((result, index) => (
        <Card key={index} className="h-full" doc={result} relationTo={relationTo} />
      ))}
    </div>
  )
}
