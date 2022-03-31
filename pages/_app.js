import { ThemeProvider } from 'next-themes';
import '@/styles/index.css'
import AppContext from "../context/appContext"
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [displayMobileMenu, setToggleMobileMenu] = useState(false);
  // https://www.techomoro.com/how-to-use-context-api-in-a-next-js-app/ : Refer
  // to understand on how to implement Appcontext
  // Appcontext makes the visibility of the functions and variables to Global
  // left side Appcontext variable with which you can access from other modules.
  // right side the Provider or the function or variable for which the state to be 
  // preserved
  return (
    <AppContext.Provider
      value={{
        displayMobileMenu: displayMobileMenu,
        setToggleMobileMenu: setToggleMobileMenu
        // setUser: this.setUser,
        // cart: this.state.cart,
        // addItem: this.addItem,
        // removeItem: this.removeItem,
      }}
    >
      
      <ThemeProvider>
      <div className='bg-th-background'>
        <Component {...pageProps} />
        </div>
      </ThemeProvider>
      
    </AppContext.Provider>
  )
}

export default MyApp
