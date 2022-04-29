import Script from 'next/script'
import CoverImage from '../cover-image'
export default function DownloadCard({ size, imageSrc, post }) {
    const cardSizeclassName = ' md:w-full lg:w-' + size

    //const categoryUpper = category.toUpperCase()
    return (
            <div className="my-8 md:my-0 h-full border-2 border-th-primary-medium border-opacity-60 rounded-lg overflow-hidden bg-th-accent-medium">

                <a href="#"><h1 className="text-5xl p-5 font-medium text-center hover:underline text-gray-100 title-font mb-2 ">Download Case Studies form Our Resource centre
                </h1></a>

                <div className="relative">
                <CoverImage url={imageSrc} title={'Download lmnas resource'} height={1500 / parseInt(size)} />
                    <button className="absolute top-0 bg-purple-500 text-th-primary-light p-4 rounded hover:bg-th-accent-medium xl:text-lg font-semibold ml-20 mt-12 md:ml-24 md:mt-20 lg:m-12 xl:my-20 xl:ml-28  transform transition hover:scale-105 duration-300 ease-in-out">Download Now</button>
                </div>
            </div>
    )
}