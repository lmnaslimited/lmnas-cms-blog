import Script from 'next/script'
import CoverImage from '../cover-image'
export default function DownloadCard({ size, imageSrc, post }) {
    const cardSizeClass = ' md:w-full lg:w-' + size

    //const categoryUpper = category.toUpperCase()
    return (
            <div class="h-full border-2 border-th-primary-medium border-opacity-60 rounded-lg overflow-hidden bg-th-accent-medium">

                <h1 class="text-5xl p-5 font-medium text-center text-th-primary-light title-font mb-2 ">Download Case Studies form Our Resource centre
                </h1>
                {/**  <Script src="https://cx.lmnas.com/form/generate.js?id=3"  />
                
          
                <script type="text/javascript" src="//cx.lmnas.com/form/generate.js?id=3"></script>
                <img src={imageUrl} alt="blog" class="lg:h-48 md:h-36 w-full object-cover object-center" />
                <iframe src="//cx.lmnas.com/form/3" width="100%" height="100%" className="inset-0 bg-gray-200 pt-10 p-2" frameBorder="2" title="map" marginHeight="0" marginWidth="4" scrolling="no" ><p>Your browser does not support iframes.</p></iframe> */}
                {/**     <div className='relative'>
                    <CoverImage url={imageSrc} title={'Download lmnas resource'} height={1500 / parseInt(size)} />
                    <button className='px-4 top-0 py-4 bg-purple-400 rounded-md transform transition hover:scale-105 duration-300 ease-in-out'>
                        <h1 className='text-lg font-semibold text-th-primary-light'>Download Now !</h1>
                    </button>
                </div> */}
                <div class="relative">
                <CoverImage url={imageSrc} title={'Download lmnas resource'} height={1500 / parseInt(size)} />
                    <button class="absolute top-0 bg-purple-500 text-th-primary-light p-2 rounded hover:bg-th-accent-medium m-20 transform transition hover:scale-105 duration-300 ease-in-out">Download Now</button>
                </div>
            </div>
    )
}