import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your dashboard!</h4>
      </Banner>
      {!isProduction && (
        <>
          Here&apos;s what to do next:
          <ul className={`${baseClass}__instructions`}>
            <li>
              <SeedButton />
              {' with a few pages, posts, and projects to jump-start your new site, then '}
              <a href="/" target="_blank">
                visit your website
              </a>
              {' to see the results.'}
            </li>
            <li>
              {'Modify your '}
              <a
                href="https://payloadcms.com/docs/configuration/collections"
                rel="noopener noreferrer"
                target="_blank"
              >
                collections
              </a>
              {' and add more '}
              <a
                href="https://payloadcms.com/docs/fields/overview"
                rel="noopener noreferrer"
                target="_blank"
              >
                fields
              </a>
              {' as needed. If you are new to Payload, we also recommend you check out the '}
              <a
                href="https://payloadcms.com/docs/getting-started/what-is-payload"
                rel="noopener noreferrer"
                target="_blank"
              >
                Getting Started
              </a>
              {' docs.'}
            </li>
          </ul>
        </>
      )}
    </div>
  )
}

export default BeforeDashboard
