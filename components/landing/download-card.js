import Script from 'next/script'
import CoverImage from '../cover-image'
export default function DownloadCard({ size, imageSrc, post }) {
    const cardSizeclassName = ' md:w-full lg:w-' + size

    //const categoryUpper = category.toUpperCase()
    return (
        <div className="my-16 md:my-0 h-full border-2 border-th-primary-medium border-opacity-60 rounded-lg overflow-hidden bg-th-accent-medium">

           <a href="#"><h1 className="text-6xl mt-8 py-10 hover:underline px-4 tracking-wide text-center text-gray-100 ">Download Case Studies form Our Resource centre
            </h1></a> 

            <div className="">
                
                <div className='mx-4'>
                    <button className=" top-0 bg-purple-500 text-th-primary-light p-4 rounded hover:bg-th-background xl:text-lg font-semibold my-8 transform transition hover:scale-105 duration-300 ease-in-out w-full">Download Now</button>
                </div>
            </div>
        </div>
    )
}