import { useState, useEffect, useRef } from 'react';
export default function CollapseMenu({ subMenus }) {
  const hiddenClass = ' hidden'
  const [collapse, setCollapse] = useState(true);
  // create a React ref for the dropdown element
  const dropdown = useRef(null);
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (collapse) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setCollapse(true);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [collapse]);

  
  return (
    <button
      onClick={() => {
        setCollapse(!collapse);
      }}>
      <div  ref={dropdown} className="block  lg:inline-block text-th-primary-medium hover:text-th-accent-medium">
        <svg
          className="fill-current h-4 w-4 ml-4 text-th-primary-dark  dark:hover:text-pink-500  hover:text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
      <ul className={"absolute -ml-8 py-20 md:h-20 pt-1 group-hover:block" + (collapse ? hiddenClass : null)}>
        {
          subMenus.map((subMenu) => (
            <li key={subMenu.name} className="">
              <a href={`/blog/category/${subMenu.slug}`} className="px-12 bg-th-primary-light text-th-background-secondary  hover:bg-th-accent-medium hover:text-th-primary-light py-2 block whitespace-no-wrap">
                {subMenu.name}
              </a>
            </li>))
        }
      </ul>
    </button>
  )
}