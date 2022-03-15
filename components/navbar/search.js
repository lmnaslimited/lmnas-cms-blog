export default function Search() {
    return (
        <div className="lg:flex-grow mt-4 lg:mt-0">
            <form action="/search" >
                <input type="search" name="query" placeholder="Search" required="required" className="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40" />
            </form>

        </div>
    )
}