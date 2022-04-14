import Link from "next/link";
import DynamicHeroIcon from "../hero-icons";

export default function CategoryCard({ category, color }) {
const colorClass = color? ('bg-' + color) : 'bg-th-accent-light'
  return (

    <div className="py-4 md:p-4 md:w-1/4 mx-4 sm:w-1/2 w-full">

      <Link href={process.env.BACKEND_URL + `/category/${category.slug}`}>
        <button type="button" className="bg-th-primary-light shadow-sm text-th-background inline-flex  pt-3 pb-2 px-5 rounded-lg items-center hover:bg-th-accent-medium hover:text-th-primary-light focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out">
        <div className={"shadow-sm text-th-background  py-6 -mt-4 -mb-3 px-1 -ml-5  items-center hover:bg-th-accent-medium hover:text-th-primary-light focus:outline-none " + colorClass}>
          </div>
          <DynamicHeroIcon icon={category.svg} />

          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs  mb-1">{category.name.toUpperCase()}</span>

          </span>
          <span ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 mb-1 ml-8 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg> </span>
        </button>

      </Link>
    </div>
  )
}