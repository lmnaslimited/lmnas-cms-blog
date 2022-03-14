import { useState, useContext } from "react";
import AppContext from "context/appContext";
export default function ToggleMobileMenu() {
    const hiddenClass = ' hidden'
    //Important step to have the context data accessible inside this function
    const appContext = useContext(AppContext);
    return (
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-th border-th-accent-medium "
                onClick={() => {
                    //Set the toggleMobile state to true or false using useState of Appcontext
                    appContext.setToggleMobileMenu(!appContext.displayMobileMenu);
                }}
            >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
    )

}