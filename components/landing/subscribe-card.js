import Script from 'next/script';

export default function SubscribeCard({ size, imageSrc, post }) {
    const cardSizeClass = ' md:w-full lg:w-' + size;

    const imageUrl = `${post.coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${post.coverImage.url}`;

    return (
        <div className="my-8 md:my-0 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-purple-500 bg-opacity-80">
            <h1 className="text-5xl p-5 font-medium text-center text-white title-font mb-2">
                Subscribe us to get our Latest Posts and Newsletters
            </h1>
            <Script
                id="subscribe-form"
                strategy="afterInteractive"
            >
                {`(function() {
                    var iframe = document.createElement('iframe');
                    iframe.src = '//cx.lmnas.com/form/3';
                    iframe.width = '100%';
                    iframe.height = '100%';
                    iframe.className = 'inset-0 bg-gray-200 pt-10 p-2';
                    iframe.frameBorder = '2';
                    iframe.title = 'subscribe form';
                    iframe.marginHeight = '0';
                    iframe.marginWidth = '4';
                    iframe.scrolling = 'no';
                    document.querySelector('.subscribe-form-container').appendChild(iframe);
                })();`}
            </Script>
            <div className="subscribe-form-container">
                <p>Your browser does not support iframes.</p>
            </div>
        </div>
    );
}
