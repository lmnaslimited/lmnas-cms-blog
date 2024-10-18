import React, { useState } from 'react';
import Form from '@/components/sections/formSection';
import SectionContainer from '@/components/section-container';

const CasestudyDownload = ( {isolution}) => {
  const [showDetails, setShowDetails] = useState(true);

  const handleDownloadClick = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };
  const form= {
    title: "Get The Case-study",
    first_name: "First Name",
    last_name: "Last Name",
    work_email: "Work Email",
    mobile: "Mobile",
    company: "Company",
    confirmation: "Yes, I would like to receive updates and information about LMNAs products LENS and events. I understand I can unsubscribe at any time.",
    cta: "Download",
    msg: "Thank you for downloading!",
    pdf:isolution.pdf.data[0].attributes.url,
    pdfName: "business_operations.pdf",
    }
  return (
    <SectionContainer>
    <div className="grid md:grid-cols-2 grid-cols-1 justify-center" id="download">
      <div className='flex flex-col justify-center p-2'>
        <div className="space-y-6 py-8 text-base leading-7 text-th-textSecondary">
          <h1 className='text-3xl lg:text-5xl text-th-textPrimary font-bold'>{isolution.Title}</h1>
          
          {/* <p className=''>{isolution.subtitle}</p>
          <ul className="space-y-4">
            {isolution.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-th-primary stroke-2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                </svg>
                <p className="ml-4">{feature}</p>
              </li>
            ))}
          </ul> */}
          
           <p className="mt-4 leading-relaxed rounded-lg text-lg">
            {isolution.excerpt}
            </p>
        </div>
        <div className="pt-8 text-base  leading-7">
          <p className="text-th-textPrimary mb-5 text-lg font-semibold">Want to know more ?</p>
          <button
            className="text-white bg-gradient-to-tl from-th-primary to-th-tertiary hover:from-th-tertiary hover:to-th-primary px-3 py-2 text-xl font-medium rounded-md cursor-pointer hidden sm:block"
            onClick={handleDownloadClick}
          >
            {showDetails ? "Download the Case Study" : 'Close the Case Study'}
          </button>
          <p className='md:hidden'>Download the Case Study</p>
        </div>
      </div>
      <div className="relative py-3">
        <Form form={form}/>
        {showDetails && (
          <div className="absolute inset-0 flex items-center justify-center hidden sm:block">
            <div className="bg-zinc-50 bg-opacity-100 backdrop-filter backdrop-blur-sm absolute inset-0 h-full"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img src='/blog/business_solution.png' alt="Case Study" className="max-w-full max-h-fit object-fit p-3" />
              {/* <p className="text-gray-600 text-center z-10 font-bold mt-4">Case Study</p> */}
            </div>
          </div>
        )}
      </div>
    </div>

    {/* <div className=" mx-auto py-10 lg:py-14">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold mx-24">
            <span className=" text-th-tertiary rounded-full ">Synopsis of Business Solution</span>
          </h2>
          <div className="flex space-x-3 mt-3 p-1 items-center mx-24">
            <div className="w-24 border border-th-primary"></div>
            <div className="w-1 h-2 bg-th-primary"></div>
            <div className="w-1 h-3 bg-th-primary"></div>
            <div className="w-1 h-2 bg-th-primary"></div>
            <div className="w-24 border border-th-primary"></div>
          </div>
          <p className="mt-4 p-5 w-3/4 mx-auto leading-relaxed rounded-lg text-lg bg-th-quinary">
            This is a paragraph with a border. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,This is a paragraph with a border. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
            This is a paragraph with a border. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,This is a paragraph with a border. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-end my-6 mx-24">
            <a href="#download" className="text-th-textPrimary font-semibold">To Read More  <span className='mx-3 text-th-primary hover:text-th-tertiary'>Download the case study </span></a>
          </div>
          
        </div>
      </div>
    </div> */}
    </SectionContainer>
  );
}

export default CasestudyDownload;
