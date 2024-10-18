import Script from 'next/script';
import { useState, FormEvent } from 'react';

export default function SubscribeCard({ size, imageSrc, post }) {
    const cardSizeClass = ' md:w-full lg:w-' + size;

    const imageUrl = `${post.coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
        }${post.coverImage.url}`;

    return (
        <div className="my-8 md:my-0 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-th-secondary bg-opacity-80">
            <h1 className="text-5xl p-5 font-medium text-center text-white title-font mb-2">
                Subscribe us to get our Latest Posts and Newsletters
            </h1>
            <div className='py-11'>{NewsletterSubscribe()}</div>
            {/* <Script
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
            </div> */}
        </div>
    );
} 
function NewsletterSubscribe() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true); 
 
        try {
            const response = await fetch('blog/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
 
            const result = await response.json();
 
            if (response.ok) {
                setMessage(result.message);
                setIsSubscribed(true);  
            } else {
                setMessage(result.error || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false); 
        }
    };
 
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsSubscribed(false);  
        if (e.target.value === "") {
            setMessage("");
        }
    };
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="p-1.5 flex flex-col sm:flex-col items-center gap-2 rounded-lg w-full mx-auto ">
                    <div className="relative w-full">
                        <label htmlFor="hero-input" className="sr-only">Enter your email</label>
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                            <svg className="shrink-0 size-4 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>
                        <input 
                            type="email" 
                            id="hero-input" 
                            name="hero-input" 
                            className="py-2 ps-12 pe-3 block w-full focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={handleEmailChange}  
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full sm:w-auto whitespace-nowrap py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md bg-gradient-to-tl from-th-primary to-th-tertiary text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                        disabled={isSubscribed || loading} 
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4z"></path>
                            </svg>
                        ) : (
                            'Subscribe'
                        )}
                        <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                    <div>
                    {message && (
                    <p className="px-15 text-white  text-sm mb-4"> 
                        {message}
                    </p>
                )}
                    </div>
                </div>
 
               
            </form>
        </div>
    );
}
