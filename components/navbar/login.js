import CoverImage from "../cover-image";

export default function Login() {
    return (

        <button type="button" className="mt-4 lg:mt-0 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            <span className="sr-only">Open user menu</span>
            <div className="w-8 h-8 rounded-full">
                <CoverImage url="https://res.cloudinary.com/lmnas/image/upload/v1649993671/user_4d13093a5c.png" height='29' width='29' title='Login' />
            </div>
        </button>
    )
}