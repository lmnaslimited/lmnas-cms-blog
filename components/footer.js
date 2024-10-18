import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-th-background border-t border-th-accent-light">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className='text-xl col-span-2 lg:col-span-2 my-2 text-th-primary-medium'>
          <div className='my-2'>About</div>
          <div className='my-2'>_____</div>
          LMNAs, the most adaptable business solution for growing small and midmarket organizations. We create solutions with our uniquely deep knowledge of the industries we serve.
        </div>
        <div className='text-xl text-th-accent-medium col-span-1 my-2'>
          <div className='text-th-primary-medium'>
            <div className='my-2'>Menu</div>
            <div className='my-2'>_____</div>
          </div>
          <nav>
            <ul>
              <li className='my-2'>
                <a href="https://lmnas.com/">Home</a>
              </li>
              <li className='my-2'>
                <a href="https://lmnas.com/cloud/career/">Career</a>
              </li>
              <li className='my-2'>
                <a href="https://lmnas.com/contact/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='text-xl my-2'>
          <div className='text-th-primary-medium'>
            <div className='my-2'>Contact</div>
            <div className='my-2'>_____</div>
          </div>
          <nav>
            <ul>
              <li className='flex justify-start my-2'>
                <a href="https://www.linkedin.com/company/lmnaslimited/" className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 transform transition hover:-translate-y-1">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                    <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/lmnaslimited/?igshid=1nyjwzzvr2rrc" className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" className="w-8 h-8 transform transition hover:-translate-y-1">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/lmnaslimited" className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 transform transition hover:-translate-y-1">
                    <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#0d61a9"></stop>
                      <stop offset="1" stopColor="#16528c"></stop>
                    </linearGradient>
                    <path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32c1.105,0,2,0.895,2,2V40z"></path>
                    <path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path>
                    <path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path>
                    <path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4h4v11h5V26h3.938l0.618-4H31v-2.62C31.995,17.734,32.579,16,33.365,16z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Container>
        <p className="text-center text-th-primary-light py-4">
          &copy; {new Date().getFullYear()} LMNAs. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
