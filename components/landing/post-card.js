import Link from "next/link"
import CoverImage from "../cover-image"

/**  */

export default function PostCard({ size, imageSrc, post }) {
    const cardSizeclass = ' md:w-full lg:w-' + size

    const imageUrl = `${post.coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${post.coverImage.url}`
    const excerptDisplay = post.excerpt.length < 150 * parseInt(size) ? post.excerpt : (post.excerpt.substring(0, 150 * parseInt(size)) + '...')
    //const categoryUpper = category.toUpperCase()

    return (
        <div className={"py-4 md:p-4 " + cardSizeclass}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                <div classNameName="object-cover object-center lg:h-48 md:h-36 w-full">
                    <CoverImage slug={post.slug} title={post.title} url={post.coverImage.url} width={720 * parseInt(size)} height={400} />
                </div>

                <div className="p-6">

                    <h2 className="tracking-widest text-xs title-font font-medium  text-th-accent-medium  mb-1">{(post.category.name ? post.category.name.toUpperCase() : 'UnclassNameified')}</h2>
                    <h1 className="title-font text-lg font-medium mb-3 text-gray-100">

                        <Link href={process.env.BACKEND_URL + `/posts/${post.slug}`}>
                            <a classNameName="hover:underline">{post.title}</a>
                        </Link>
                    </h1>
                    <p className="w-full text-th-primary-dark leading-relaxed mb-3">{excerptDisplay}</p>
                    <div className="flex items-center flex-wrap">
                        <a href={process.env.BACKEND_URL + `/posts/${post.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                                <path d="M5 12h14">
                                </path>
                                <path d="M12 5l7 7-7 7">
                                </path>
                            </svg></a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"><svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                            </path>
                            <circle cx="12" cy="12" r="3">
                            </circle>
                        </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm"><svg stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-linejoin="round" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                            </path>
                        </svg>6
                        </span>
                    </div>
                </div>
            </div>
        </div>


    )
}