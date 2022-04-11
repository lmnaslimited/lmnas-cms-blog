import Script from 'next/script'
export default function SubscribeCard({ size, imageSrc, post }) {
    const cardSizeClass = ' md:w-' + size

    const imageUrl = `${post.coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${post.coverImage.url}`

    //const categoryUpper = category.toUpperCase()
    return (
        <div class={"py-4 md:p-4 " + cardSizeClass}>
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-violet-400">
                <h1 class="text-5xl p-5 font-medium text-center text-white title-font mb-2 ">Subscribe us to get our Latest Posts and Newsletters
                </h1>
                {/**  <Script src="https://cx.lmnas.com/form/generate.js?id=3"  />
                
          
                <script type="text/javascript" src="//cx.lmnas.com/form/generate.js?id=3"></script>
                <img src={imageUrl} alt="blog" class="lg:h-48 md:h-36 w-full object-cover object-center" />*/}
                <iframe src="//cx.lmnas.com/form/3" width="100%" height="100%" className="inset-0 bg-gray-200 pt-10 p-2" frameBorder="2" title="map" marginHeight="0" marginWidth="4" scrolling="no" ><p>Your browser does not support iframes.</p></iframe>


            </div>
        </div>
    )
}