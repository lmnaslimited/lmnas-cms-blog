import { CMS_URL } from '@/lib/constants'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug, height, width }) {
  const imageUrl = `${
    url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
  }${url}`

  const image = (
    <Image
      width={width? width: 2000}
      height={height? height:1000}
      alt={`Cover Image for ${title}`}
      src={imageUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
<div className="sm:mx-0">
  {slug ? (
    <Link href={`${process.env.BACKEND_URL}/posts/${slug}`} aria-label={title}>
      {image}
    </Link>
  ) : (
    image
  )}
</div>
  )
}
