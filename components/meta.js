import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants'

export default function Meta({ metaTags }) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {
        metaTags ? metaTags.map((metaTag) => {
          return (
            <meta key={metaTag.name}

              name={metaTag.name}
              content={metaTag.content}
            />
          )
        })
          :
          <>
            <meta

              name="description"
              content="LMNAs Blog for your digital and industry 4.0 transformation, which has business insights covering, ERP, e-commerce and digital marketing."
            />
            <meta

              name="author"
              content="LMNAs"
            />
          </>
      }
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
