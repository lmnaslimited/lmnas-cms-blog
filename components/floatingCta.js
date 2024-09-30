import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const FloatingCTA = ({ icta }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsCardVisible(false);
      }
    };

    if (isCardVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCardVisible]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="fixed bottom-4 end-4 text-white rounded-lg px-4 py-4 flex gap-2 font-medium z-50 w-42 items-center ring-2 ring-white bg-gradient-to-tl from-th-primary to-th-tertiary"
        onClick={toggleCardVisibility}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-message-chatbot">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2"/>
        </svg>
        <span className="font-medium text-xl hidden sm:block">{icta.btn}</span>
      </button>
      {isCardVisible && (
        <div ref={cardRef} className="fixed bottom-28 end-4 rounded-lg shadow-md z-10 bg-gradient-to-tl from-th-primary via-th-tertiary to-th-tertiary text-white ring-2 ring-white">
          {/* Content of the card */}
          <div className="p-5 flex flex-col space-y-3">
            <Link
              href={`tel:${icta.tel}`}
              className="transition-colors duration-300 md:text-2xl text-lg flex gap-3 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-2"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {icta.tel}
            </Link>
            <Link
              href={`mailto:${icta.mail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 md:text-xl text-lg flex gap-3 items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26" className="size-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              {icta.mail}
            </Link>
            <Link
              href={icta.contacthref}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1 transition-colors duration-300 text-lg"
            >
              {icta.contact}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
