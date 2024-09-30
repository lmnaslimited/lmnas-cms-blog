// "use client"; // this is a client component
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const language = [
  {
    id:'en',
    name: "EN",
    avatar:"/blog/ukflag.svg"
  },
  {
    id:'de',
    name: "DE",
    avatar:"/blog/germanflag.svg"
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageMenu() {
  const router = useRouter();
  const [selected, setSelected] = useState(language[0]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      const parsedLanguage = JSON.parse(storedLanguage);
      setSelected(parsedLanguage);
    }
  }, []);

  useEffect(() => {
    const { locale } = router;
    if (locale) {
      const selectedLanguage = language.find((lang) => lang.id === locale);
      if (selectedLanguage) {
        setSelected(selectedLanguage);
        localStorage.setItem(
          "selectedLanguage",
          JSON.stringify(selectedLanguage)
        );
      }
    }
  }, [router.locale, router]);

  const handleLanguageChange = (selectedLanguage) => {
    setSelected(selectedLanguage);
    localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage));
    const locale = selectedLanguage.id;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Listbox value={selected} onChange={handleLanguageChange}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-pointer py-1.5 pr-2 font-medium tracking-wide text-left text-th-textsecondary sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <Image
                  src={selected.avatar}
                  alt="lmnas-language-icon"
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                  width={20}
                  height={20}
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-dark ring-opacity-5 focus:outline-none sm:text-sm">
                {language.map((language) => (
                  <Listbox.Option
                    key={language.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-th-secondary text-white"
                          : "text-th-textprimary",
                        "relative cursor-pointer select-none py-2 pl-1 pr-2"
                      )
                    }
                    value={language}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center">
                          <Image
                            src={language.avatar}
                            alt="lmnas-language-icon"
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                            width={20}
                            height={20}
                          />
                          <span
                            className={classNames(
                              selected ? "font-bold" : "font-normal",
                              "ml-2 block truncate"
                            )}
                          >
                            {language.name}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
