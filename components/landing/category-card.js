import Link from "next/link";
import DynamicHeroIcon from "../hero-icons";

export default function CategoryCard({ svg, category }) {
  const IconSvg = (category.svg);
  console.log(category.svg)
  return (

    <div className="py-4 md:p-4 md:w-1/4 sm:w-1/2 w-full">

      <Link href={process.env.BACKEND_URL + `/category/${category.slug}`}>
        <button type="button" className="bg-th-primary-light shadow-sm text-th-background inline-flex py-3 px-5 rounded-lg items-center hover:bg-th-accent-medium hover:text-th-primary-light focus:outline-none">
          <DynamicHeroIcon icon={'CogIcon'} />
          {/* <div dangerouslySetInnerHTML={{ __html: category.svg }} /> 
   
          } <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
            </path>
  </svg> */}
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs mb-1">{category.name.toUpperCase()}</span>

          </span>
          <span ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg> </span>
        </button>

      </Link>
    </div>
  )
}