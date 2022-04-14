import Image from "next/image";
import Link from "next/link";

export default function Logo() {

    return (
        <div className="flex items-center flex-shrink-0 text-th-primary-dark mr-6">
             {/**    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            
    <span className="font-semibold text-xl tracking-tight">LMNAs</span> */}

          <Link href={process.env.BACKEND_URL + "/"}>
                <a aria-label={'LMNAs Cloud Solutions'}><Image src="https://lmnas.com/wp-content/uploads/2021/04/lmnas2.png"
                    height={'30 px'}
                    width={'80 px'} />
                </a>
            </Link>

        </div>
    )
}