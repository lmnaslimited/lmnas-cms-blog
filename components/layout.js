import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Navbar from './navbar/navbar'
import Script from 'next/script'


export default function Layout({ preview, children, categories }) {
  return (
    <>
      <div className="bg-th-background">
          <Script id='cx-lmnas' strategy="afterInteractive">
              {`
              (function(w,d,t,u,n,a,m){w['MauticTrackingObject'] = n;
              w[n]=w[n]||function(){(w[n].q = w[n].q || []).push(arguments)},a=d.createElement(t),
              m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://cx.lmnas.com/mtc.js','mt');

              mt('send', 'pageview');
            `}
          </Script>
        <Navbar categories={categories} />
        <Meta />

        <div className="min-h-screen">
          {preview &&
            <Alert preview={preview} />
          }
          <main>{children}</main>
        </div>

        <Footer />
      </div>
    </>
  )
}
