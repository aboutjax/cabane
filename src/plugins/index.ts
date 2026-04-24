import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

import { Page, Post } from '@/payload-types'
import { SITE_NAME, SITE_TITLE } from '@/siteConfig'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | ${SITE_NAME}` : SITE_TITLE
}

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

const muteFieldLabels = (html: string): string =>
  html.replace(
    /<p([^>]*)>([^<>]{1,60}):<\/p>/g,
    (_m, attrs, label) =>
      `<p${attrs} style="margin:18px 0 2px 0;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#a1a1aa;opacity:0.6;">${label}</p>`,
  )

const wrapInEmailTemplate = (innerHtml: string, subject: string) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f4f0;font-family:Georgia,'Times New Roman',serif;color:#18181b;-webkit-font-smoothing:antialiased;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f4f0;">
      <tr>
        <td align="center" style="padding:48px 16px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e7e5e0;">
            <tr>
              <td style="padding:28px 40px;border-bottom:1px solid #e7e5e0;">
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#71717a;">
                  Cabane &nbsp;&middot;&nbsp; New message
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:40px;">
                <h1 style="margin:0 0 24px 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.25;font-weight:400;color:#18181b;letter-spacing:-0.01em;">
                  ${subject}
                </h1>
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.7;color:#27272a;">
                  ${innerHtml}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px;border-top:1px solid #e7e5e0;background:#fafaf7;">
                <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:12px;line-height:1.5;color:#a1a1aa;">
                  Sent from the contact form at
                  <a href="https://cabane.nyc" style="color:#52525b;text-decoration:underline;">cabane.nyc</a>.
                </div>
              </td>
            </tr>
          </table>
          <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#a1a1aa;padding-top:20px;">
            Cabane
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`

export const plugins: Plugin[] = [
  vercelBlobStorage({
    collections: {
      media: true,
    },
    token: process.env.BLOB_READ_WRITE_TOKEN || '',
    clientUploads: true,
  }),
  redirectsPlugin({
    collections: ['pages', 'posts'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    beforeEmail: (emails) =>
      emails.map((email) => ({
        ...email,
        html: wrapInEmailTemplate(
          muteFieldLabels(typeof email.html === 'string' ? email.html : ''),
          typeof email.subject === 'string' ? email.subject : '',
        ),
      })),
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),
  searchPlugin({
    collections: ['posts'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
]
