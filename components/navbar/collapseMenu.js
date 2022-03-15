import { useState } from 'react';
export default function CollapseMenu({ subMenus }) {
  console.log(subMenus)
  const hiddenClass = ' hidden'
  const [collapse, setCollapse] = useState(true);
  return (
    <button
      onClick={() => {
        setCollapse(!collapse);
      }}>
      <div className="block  lg:inline-block text-th-primary-medium hover:text-th-accent-medium">
        <svg
          className="fill-current h-4 w-4 text-th-primary-dark  dark:hover:text-pink-500  hover:text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
      <ul className={"absolute md:h-20 pt-1 group-hover:block" + (collapse ? hiddenClass : null)}>
        {
          subMenus.map((subMenu) => (
            <li className="">
              <a className="bg-th-primary-dark text-th-background-secondary rounded-t  hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap" href="#">
                {subMenu}
              </a>
            </li>))
        }
      </ul>
    </button>
  )
}