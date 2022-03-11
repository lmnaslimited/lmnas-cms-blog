import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Nav from './nav'
import Navbar from './navbar'

export default function Layout({ preview, children, categories }) {
  return (
    <> 
     <Navbar categories = {categories}/>

      <Nav categories = {categories}/>
      <Meta />
      
      <div className="min-h-screen">
        { preview &&
          <Alert preview={preview} />  
        }
        <main>{children}</main>
      </div>
     
      <Footer />
   
    </>
  )
}
