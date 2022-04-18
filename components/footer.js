import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-th-backgorund border-t border-th-accent-light">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">

        <div className='text-xl col-span-2 lg:col-span-1 my-2 text-th-primary-medium' >
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
            <ul className=''>
              <li className='my-2' >
                <a href="https://lmnas.com/" >
                  Home
                </a>
              </li>
              <li className='my-2'>
                <a href="https://lmnas.com/cloud/career/">
                  Career
                </a>
              </li>
              <li className='my-2'>
                <a href="https://lmnas.com/contact/" >
                  Contact
                </a>
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
              <li>
                <div className='flex justify-start'>
                  <a href="https://www.linkedin.com/company/lmnaslimited/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 mr-2 my-2  transform transition hover:-translate-y-1"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path></svg></a>
                  <a href="https://www.instagram.com/lmnaslimited/?igshid=1nyjwzzvr2rrc"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" className="w-8 h-8 mr-2 my-2  transform transition hover:-translate-y-1"><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path></svg></a>
                  <a href="https://www.facebook.com/lmnaslimited"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 mr-2 my-2  transform transition hover:-translate-y-1"><linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0d61a9"></stop><stop offset="1" stopColor="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path></svg></a>
                  <a href="https://www.youtube.com/channel/UCq5S8zxFv7e0bd23nq_hpWg"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 mr-2 my-2  transform transition hover:-translate-y-1"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path></svg></a>
                </div>
                <li>
                  <div className='flex justify-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-6 md:w-6 h-4 w-4 inline text-th-accent-medium " viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className='text-sm md:text-lg ml-2'>
                      +91 98840 44470
                    </span>
                  </div>
                </li>
                <div className='flex justify-start'>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-6 md:w-6 h-4 w-4 inline text-th-accent-medium " viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className='text-sm md:text-lg ml-2'>
                    hello@lmnas.com
                    </span>
                  </li>
                </div>
              </li>
            </ul>
          </nav>

        </div>
      </div>
      {/**
      <div className="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-2 grid-cols-2 ">

        <div className="lg:row-span-1 lg:col-span-1 row-span-1 col-span-2  sm:px-5 md:px-0 my-6  py-4">
          <h2 className="text-md md:text-lg lg:text-xl font-semibold  text-th-primary-medium">About Us</h2>
          <p className="mt-2 md:w-4/5 lg:mt-10 w-full font-medium text-th-primary-medium text-md lg:text-lg md:text-md" >LMNAs, the most adaptable business solution for growing small and midmarket organizations. We create solutions with our uniquely deep knowledge of the industries we serve.</p>
        </div>
        <div className="lg:row-span-1 row-span-1 col-span-1 mx-2 px-2 my-5 py-5">
          <h2 className="text-md md:text-lg lg:text-xl font-semibold ml-4   text-th-primary-medium">Menu</h2>
          <nav className="list-none mb-10 lg:mt-10 ">
            <li className="md:px-6 md::w-3/4 xl:w-3/5">
              <a href="#" className="text-gray-900">
                <h1 className="text-sm md:text-lg -ml-2 font-medium text-th-accent-medium inline">Home</h1>
                </a>
            </li>
            <li className="md:px-6 mb-4 md::w-3/4 xl:w-3/5 ">
              <a href="#" className="text-gray-900">
                <h1 className="text-sm md:text-lg -ml-2 font-medium text-th-accent-medium  inline ">Career </h1></a>
            </li>
            <li className=" -mt-4 md:px-6 mb-4 md::w-3/4 xl:w-3/5 ">
              <a href="#" className="text-gray-900">
                <h1 className="text-sm md:text-lg -ml-2 font-medium text-th-accent-medium  inline ">Contact </h1></a>
            </li>

          </nav>
        </div>

        <div className="lg:row-span-1 row-span-1 col-span-1 mx-5 px-5 my-5 py-5">
          <h2 className="font-semibold text-md md:text-lg lg:text-xl text-th-primary-medium md:mr-5">Connect Us</h2>
          <nav className="mt-2 lg:mt-10">
            <div className="grid grid-cols-4 gap-4 ">
              <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 shadow-lg transform transition hover:-translate-y-1"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path></svg></a></div>
              <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" className="w-8 h-8 shadow-lg transform transition hover:-translate-y-1"><path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path></svg></a></div>
              <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 shadow-lg transform transition hover:-translate-y-1"><linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0d61a9"></stop><stop offset="1" stopColor="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path></svg></a></div>
              <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" className="w-8 h-8 shadow-lg transform transition hover:-translate-y-1"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path></svg></a></div>
            </div>
            <ul>
              <li className="rounded-full mt-4   md::w-3/4 xl:w-3/4">
                <a href="#" className="text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-th-accent-medium " viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg><h1 className="text-sm md:text-lg lg:ml-0 font-medium inline text-th-primary-dark">+91 98840 44470</h1></a>
              </li>
              <li className="rounded-full  mb-4 md::w-3/4 xl:w-3/4 ">
                <a href="#" className="text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-th-accent-medium " viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg> <h1 className="text-sm md:text-lg lg:ml-0 md:ml-8 font-medium  inline text-th-primary-dark">hello@lmnas.com</h1></a>
              </li>
            </ul>

          </nav>
          <nav className="list-none mb-10 lg:mt-10 ">

          </nav>
        </div>

      </div>  */}



    </footer>
  )
}
