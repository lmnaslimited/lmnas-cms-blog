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
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="https://lmnas.com/wp-content/uploads/2021/04/lmnas2.png" className="h-8 w-auto sm:h-10" alt=""></img>
      </a>
      <ul className="md:ml-auto bg-black dark:bg-white flex flex-wrap items-center text-base justify-center md:flex md:items-center md:justify-center
           z-[-1] h-10 md:z-auto md:static w-full left-0 md:w-auto  md:py-0 py-4 md:pl-0 pl-7
          md:opacity-100 opacity-0 top-[-400px]">
        <li className=" my-6 md:my-0"><a className="mr-5 hover:text-pink-500 text-white dark:text-black">Home</a></li>
        <div className="group">
          <li className=" my-6 md:my-0"><a className="mr-5 hover:text-pink-500 text-white dark:text-black">Industries
            <svg
              className="fill-current h-4 w-4 ml-4 inline text-white dark:text-black  dark:hover:text-pink-500  hover:text-pink-500"
              xmlns="htt     p://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
            <ul className="absolute   hidden text-black inline  bg-gray-800 dark:bg-white pt-1 group-hover:block">
              <li className=" top-2">
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
                  className="text-white dark:text-black bg-gray-800 dark:bg-white hover:bg-pink-500 dark:hover:text-pink-500 py-2 px-4 block whitespace-no-wrap"
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

          </a>
          </li>
        </div>
        <li className=" my-6 md:my-0">
          <a href="#" class="hover:text-pink-500 text-white dark:text-black  md:mx-2">Pricing</a></li>
        <li className=" my-6 md:my-0"><a href="#" class="hover:text-pink-500 text-white dark:text-black md:mx-2">Blog</a></li>
        <li className=" my-6 md:my-0"><a href="#" class="hover:text-pink-500 text-white dark:text-black md:mx-2">Contact</a></li>
        <li className=" my-6 md:my-0"><a href="#" class="hover:text-pink-500 text-white dark:text-black md:mx-2">Subscriptions</a></li>
        <li className=" my-6 md:my-0"><a href="#" class="hover:text-pink-500 text-white dark:text-black mr-40 md:mx-2">Login</a></li>
      </ul>

      <span class="text-3xl text-teal-400 cursor-pointer mr-5 md:hidden block top-10 ">
        <ion-icon name="menu-outline" onclick="Menu(this)"></ion-icon> </span>

    </div>
  </div>
  )
}


export default Navbar