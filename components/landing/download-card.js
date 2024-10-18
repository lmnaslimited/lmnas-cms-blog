import Script from 'next/script'
import CoverImage from '../cover-image'
export default function DownloadCard({ size, imageSrc, post }) {
    const cardSizeclassName = ' md:w-full lg:w-' + size

    //const categoryUpper = category.toUpperCase()
    return (
        <div className="my-16 md:my-0 h-full border-2 border-th-primary-medium border-opacity-60 rounded-lg overflow-hidden bg-th-accent-medium">

           <a href="#"><h1 className="text-6xl mt-8 py-10 px-4 tracking-wide text-center text-gray-800 ">Download Case Studies from Our Resource centre
            </h1></a> 

            <div className="">
                
                <div className='mx-4'>
                  <a href="/drylab.pdf" download>  <button className=" top-0 bg-th-secondary text-th-primary-light p-4 rounded hover:bg-th-primary xl:text-lg font-semibold my-8 transform transition hover: text-white hover:scale-105 duration-300 ease-in-out w-full" >Download Now</button>
                  </a>
                </div>
            </div>
        </div>
    )
}