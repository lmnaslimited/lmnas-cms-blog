import React from "react"
import Link from "next/link"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];

const Nav = ({ categories }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="antialiased font-sans h-full w-full bg-th-background text-th-primary-dark">
      <nav>
        <header class="text-gray-600 body-font flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <Link href={process.env.BACKEND_URL + `/`}>
                <a class="ml-3 text-xl text-th-accent-medium">LMNAs Press</a>
              </Link>

            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {categories.map((category) => {
                return (

                  <Link href={process.env.BACKEND_URL + `/category/${category.slug}`}>
                    <a className="mr-5 hover:text-gray-900">{category.name}</a>
                  </Link>

                )
              })}
            </nav>
            <select
              name="theme"
              id="theme-select"
              className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
              onChange={(e) => setTheme(e.currentTarget.value)}
              value={theme} >
              <option value="">Select Theme</option>
              {themes.map((t) => (
                <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </header>
      </nav>
    </div>
  )
}

export default Nav
