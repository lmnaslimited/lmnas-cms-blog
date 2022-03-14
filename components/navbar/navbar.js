import React from "react"
import { useEffect, useState, useContext } from 'react';
import SunMoon from "./sunMoon";
import Search from "./search";
import Login from "./login";
import MenuList from "./menuList";
import Logo from "./logo";
import ToggleMobileMenu from "./toggleMobileMenu";
import AppContext from "context/appContext";

const industries = ['Retail', 'Education', 'Healthcare', 'Distribution', 'Manufacturing', 'Agriculture']


const Navbar = ({ categories }) => {

  const menuItems = [
    { menu: 'Industries' },
    {
      menu: 'Pricing',
    },
    {
      menu: 'Blog',
      subMenus: { categories }
    }, { menu: 'Contact' }, { menu: 'Subscriptions' }
  ]
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  const appContext = useContext(AppContext);
  if (!mounted) return null;
  return (<div>
    <nav className="mx-auto flex items-center justify-between flex-wrap py-6">
      <Logo />
      {/**Handle Hamburger toggle and set the displayMobileMenu AppContext */}
      <ToggleMobileMenu />
      <div className={"w-full block flex-grow lg:flex  lg:items-center lg:w-auto " + (appContext.displayMobileMenu ? " hidden" : null)}>
        <MenuList menuItems={menuItems} />
        {/**To be replaced with Typesense Search */}
        <Search />
        <div className="flex items-center justify-between flex-row-reverse lg:flex-row">
          <div className="mt-4 lg:mt-0">
            <SunMoon />
          </div>
          <Login />
        </div>
      </div>
    </nav>
  </div>
  )
}


export default Navbar