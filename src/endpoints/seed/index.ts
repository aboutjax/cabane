import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'
import type { Category } from '@/payload-types'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'
import {
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6,
  projectImage7,
  projectImage8,
  projectImage9,
  projectImage10,
  projectGalleryImage1,
  projectGalleryImage2,
  projectGalleryImage3,
  projectGalleryImage4,
  projectGalleryImage5,
} from './project-images'
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
} from './projects'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'projects',
  'forms',
  'form-submissions',
  'search',
]

const globals: GlobalSlug[] = ['header', 'footer']

const categories = [
  'Technology',
  'News',
  'Finance',
  'Design',
  'Software',
  'Engineering',
  'Residential',
  'Commercial',
  'Hospitality',
  'Public Space',
]

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  // Fetch post/page images
  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
  ])

  // Fetch project images from Unsplash
  payload.logger.info(`— Fetching project images...`)
  const [
    projImg1Buf,
    projImg2Buf,
    projImg3Buf,
    projImg4Buf,
    projImg5Buf,
    projImg6Buf,
    projImg7Buf,
    projImg8Buf,
    projImg9Buf,
    projImg10Buf,
    projGal1Buf,
    projGal2Buf,
    projGal3Buf,
    projGal4Buf,
    projGal5Buf,
  ] = await Promise.all([
    // Featured images
    fetchFileByURL(
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&fm=jpg',
      'project-1-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80&fm=jpg',
      'project-2-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fm=jpg',
      'project-3-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80&fm=jpg',
      'project-4-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&fm=jpg',
      'project-5-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=1920&q=80&fm=jpg',
      'project-6-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=jpg',
      'project-7-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&fm=jpg',
      'project-8-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80&fm=jpg',
      'project-9-featured.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fm=jpg',
      'project-10-featured.jpg',
    ),
    // Gallery images
    fetchFileByURL(
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80&fm=jpg',
      'project-gallery-1.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80&fm=jpg',
      'project-gallery-2.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80&fm=jpg',
      'project-gallery-3.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80&fm=jpg',
      'project-gallery-4.jpg',
    ),
    fetchFileByURL(
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&fm=jpg',
      'project-gallery-5.jpg',
    ),
  ])

  const [demoAuthor, image1Doc, image2Doc, image3Doc, imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category,
        },
      }),
    ),
  ])

  // Create project media documents sequentially to avoid filename uniqueness collisions
  payload.logger.info(`— Creating project media...`)
  const projectMediaData = [
    { data: projectImage1, file: projImg1Buf },
    { data: projectImage2, file: projImg2Buf },
    { data: projectImage3, file: projImg3Buf },
    { data: projectImage4, file: projImg4Buf },
    { data: projectImage5, file: projImg5Buf },
    { data: projectImage6, file: projImg6Buf },
    { data: projectImage7, file: projImg7Buf },
    { data: projectImage8, file: projImg8Buf },
    { data: projectImage9, file: projImg9Buf },
    { data: projectImage10, file: projImg10Buf },
    { data: projectGalleryImage1, file: projGal1Buf },
    { data: projectGalleryImage2, file: projGal2Buf },
    { data: projectGalleryImage3, file: projGal3Buf },
    { data: projectGalleryImage4, file: projGal4Buf },
    { data: projectGalleryImage5, file: projGal5Buf },
  ]
  const projectMediaDocs = []
  for (const item of projectMediaData) {
    const doc = await payload.create({ collection: 'media', data: item.data, file: item.file })
    projectMediaDocs.push(doc)
  }
  const [
    projImg1Doc, projImg2Doc, projImg3Doc, projImg4Doc, projImg5Doc,
    projImg6Doc, projImg7Doc, projImg8Doc, projImg9Doc, projImg10Doc,
    projGal1Doc, projGal2Doc, projGal3Doc, projGal4Doc, projGal5Doc,
  ] = projectMediaDocs

  // Build category lookup by title
  const allCategories = await payload.find({ collection: 'categories', limit: 100 })
  const categoryMap: Record<string, Category> = {}
  for (const cat of allCategories.docs) {
    categoryMap[cat.title] = cat
  }

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: home({ heroImage: imageHomeDoc, metaImage: image2Doc }),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData({ contactForm: contactForm }),
    }),
  ])

  // Seed projects sequentially to preserve createdAt order
  payload.logger.info(`— Seeding projects...`)

  const galleryGroups = [
    [projGal1Doc, projGal2Doc, projGal3Doc],
    [projGal2Doc, projGal3Doc, projGal4Doc],
    [projGal3Doc, projGal4Doc, projGal5Doc],
    [projGal4Doc, projGal5Doc, projGal1Doc],
    [projGal5Doc, projGal1Doc, projGal2Doc],
    [projGal1Doc, projGal3Doc, projGal5Doc],
    [projGal2Doc, projGal4Doc, projGal1Doc],
    [projGal3Doc, projGal5Doc, projGal2Doc],
    [projGal4Doc, projGal1Doc, projGal3Doc],
    [projGal5Doc, projGal2Doc, projGal4Doc],
  ]

  const projectFactories = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
  ]
  const projectFeaturedImages = [
    projImg1Doc,
    projImg2Doc,
    projImg3Doc,
    projImg4Doc,
    projImg5Doc,
    projImg6Doc,
    projImg7Doc,
    projImg8Doc,
    projImg9Doc,
    projImg10Doc,
  ]

  for (let i = 0; i < projectFactories.length; i++) {
    await payload.create({
      collection: 'projects',
      depth: 0,
      context: { disableRevalidate: true },
      data: projectFactories[i]({
        featuredImage: projectFeaturedImages[i],
        galleryImages: galleryGroups[i],
        categories: categoryMap,
      }),
    })
  }

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Posts',
              url: '/posts',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Source Code',
              newTab: true,
              url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Payload',
              newTab: true,
              url: 'https://payloadcms.com/',
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string, filename?: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()
  const resolvedName = filename || url.split('/').pop() || `file-${Date.now()}`
  const ext = resolvedName.split('.').pop()
  const mimetype = ext === 'jpg' ? 'image/jpeg' : `image/${ext}`

  return {
    name: resolvedName,
    data: Buffer.from(data),
    mimetype,
    size: data.byteLength,
  }
}
