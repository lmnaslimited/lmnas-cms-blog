import React from "react"
import Link from "next/link"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];

const Navbar = ({ categories }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (<div>
  <nav className="p-5 h-20 bg-gray-800 dark:bg-white dark:text-black md:w-full md:w-auto shadow md:flex md:items-center md:justify-between">
  <div className=" flex items-center justify-between bg-gray-800 dark:bg-white w-full  ">
      <span>
          <a href="#">
              <img src="https://lmnas.com/wp-content/uploads/2021/04/lmnas2.png" className="md:mx-40 w-50  h-10 md:26 inline"></img>
          </a>
      </span>
      
     
          <span class="text-3xl text-teal-400 cursor-pointer mr-5 md:hidden block ">
              <ion-icon name="menu-outline" onclick="Menu(this)"></ion-icon> </span>
          
      </div>
     
      <ul className="md:flex relative md:items-center md:justify-center z-[-1] md:h-20 md:z-auto md:static bg-gray-800 dark:bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7
      md:opacity-100 opacity-0 top-[-400px] ">
  <li className="mx-4 my-6 md:my-0">
      <a href="#" className="text-md text-white dark:text-black hover:text-pink-500 dark:hover:text-pink-500 duration-500">Home</a>
  </li>
  <li  className="mx-auto my-6 md:my-0">
      <div className="group">
          <button
            className="bg-gray-800 dark:bg-white dark:hover:text-pink-500  hover:text-pink-500 text-md py-2 px-4 rounded inline-flex items-center"
          >
            <span className=" mr-1  text-white dark:text-black  dark:hover:text-pink-500  hover:text-pink-500 duration-500">Industries</span>
            <svg
              className="fill-current h-4 w-4 text-white dark:text-black  dark:hover:text-pink-500  hover:text-pink-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <ul className="absolute md:h-20  hidden text-black  bg-gray-800 dark:bg-white pt-1 group-hover:block">
            <li className="">
              <a
                className="text-white dark:text-black rounded-t bg-gray-800 dark:bg-white hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap"
                href="#"
                >Retail</a
              >
            </li>
            <li className="">
              <a
                className="text-white dark:text-black bg-gray-800 dark:bg-white hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap"
                href="#"
                >Education</a
              >
            </li>
            <li className="">
              <a
                className="text-white dark:text-black bg-gray-800 dark:bg-white hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap"
                href="#"
                >Health care</a
              >
            </li>
            <li className="">
                <a
                  className="text-white dark:text-black bg-gray-800 dark:bg-white hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  >Distribution</a
                >
              </li>
              <li className="">
                <a
                  class="text-white dark:text-black bg-gray-800 dark:bg-white hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  >Manufacturing</a
                >
              </li>
              <li className="">
                <a
                  className="text-white dark:text-black rounded-b bg-gray-800 dark:bg-white hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                  >Agriculture</a
                >
              </li>
          </ul>
        </div>
  </li>
  <li  className="mx-4 my-6 md:my-0">
    <a href="#" className="text-md text-white dark:text-black hover:text-pink-500 dark:hover:text-pink-500  duration-500">Pricing</a>
  </li>
  <li  class="mx-4 my-6 md:my-0">
    <a href="#" className="text-md text-white dark:text-black hover:text-pink-500 dark:hover:text-pink-500 duration-500">Blog</a>
  </li>
  <li  class="mx-4 my-6 md:my-0">
    <a href="#" className="text-md text-white dark:text-black hover:text-pink-500 dark:hover:text-pink-500  duration-500">Contact</a>
  </li>
  <li  class="mx-4 my-6 md:my-0">
    <a href="#" className="text-md text-white dark:text-black  hover:text-pink-500 dark:hover:text-pink-500   duration-500">Subscriptions</a>
  </li>
  <li  class="mx-4 mr-40 my-6 md:my-0">
    <a href="#" className="text-md text-white dark:text-black hover:text-pink-500 dark:hover:text-pink-500  duration-500">Login</a>
  </li>
</ul>
</nav>
  </div>
  )
}


export default Navbar