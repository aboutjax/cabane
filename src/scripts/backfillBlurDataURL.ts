import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'
import sharp from 'sharp'
import { getPayload } from 'payload'
import config from '@payload-config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const staticDir = path.resolve(dirname, '../../public/media')

async function main() {
  const payload = await getPayload({ config })
  let page = 1
  let processed = 0
  let updated = 0

  while (true) {
    const result = await payload.find({
      collection: 'media',
      limit: 50,
      page,
      where: {
        and: [
          { blurDataURL: { exists: false } },
          { mimeType: { like: 'image/' } },
        ],
      },
      depth: 0,
    })

    if (result.docs.length === 0) break

    for (const doc of result.docs) {
      processed++
      if (!doc.filename || !doc.mimeType?.startsWith('image/')) continue
      const filePath = path.join(staticDir, doc.filename)
      try {
        const buffer = await fs.readFile(filePath)
        const out = await sharp(buffer)
          .resize(16, 16, { fit: 'inside' })
          .webp({ quality: 20 })
          .toBuffer()
        const blurDataURL = `data:image/webp;base64,${out.toString('base64')}`
        await payload.update({
          collection: 'media',
          id: doc.id,
          data: { blurDataURL },
        })
        updated++
        console.log(`✓ ${doc.filename}`)
      } catch (err) {
        console.warn(`✗ ${doc.filename}: ${(err as Error).message}`)
      }
    }

    if (!result.hasNextPage) break
    page++
  }

  console.log(`\nDone. Processed ${processed}, updated ${updated}.`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
