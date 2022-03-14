import { useState } from 'react';
const industries = ['Retail', 'Education', 'Healthcare', 'Distribution', 'Manufacturing', 'Agriculture']

export default function CollapseMenu() {
    const hiddenClass = ' hidden'
    const [collapse, setCollapse] = useState(true);
    return(
     

          <li className="mx-auto my-6 md:my-0">
            <div className="group">
              <button
                className="dark:hover:text-pink-500  hover:text-pink-500 text-md py-2 px-4 rounded inline-flex items-center"
                onClick={() => {
                  setCollapse(!collapse);
                }}
              >
                <span className="mr-1  text-th-primary-dark dark:hover:text-pink-500  hover:text-pink-500 duration-500">Industries</span>
                <svg
                  className="fill-current h-4 w-4 text-th-primary-dark  dark:hover:text-pink-500  hover:text-pink-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul className={"absolute md:h-20 pt-1 group-hover:block" + (collapse ? hiddenClass : null)}>
                {
                  industries.map((industry) => (
                    <li className="">
                      <a className="bg-th-primary-dark text-th-background-secondary rounded-t  hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap" href="#">
                        {industry}
                      </a>
                    </li>))
                }

              </ul>
            </div>
          </li>
        
    )
}