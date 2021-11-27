import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Nav from './nav'

export default function Layout({ preview, children, categories }) {
  return (
    <> 
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
