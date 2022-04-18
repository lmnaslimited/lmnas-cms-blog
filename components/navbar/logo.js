import Image from "next/image";
import Link from "next/link";

export default function Logo() {

    return (
        <div className="flex items-center flex-shrink-0 text-th-primary-light mr-6">
            <Link href={process.env.BACKEND_URL + "/"}>
                <div>
                    <a aria-label={'LMNAs Cloud Solutions'}>

                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            className="text-th-accent-medium fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 276.000000 276.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.14, written by Peter Selinger 2001-2017
                            </metadata>
                            <g transform="translate(0.000000,276.000000) scale(0.100000,-0.100000)"
                                fill="currentColor" stroke="none">
                                <path d="M306 1780 l2 -981 397 -396 397 -396 671 1 c370 0 678 1 685 1 9 1 12 88 12 401 l0 400 -680 0 -680 0 0 975 0 975 -402 0 -403 0 1 -980z" />
                                <path d="M1680 2152 c-6 -2 -10 -139 -10 -382 l0 -379 238 -3 c130 -2 310 -2 400 0 l162 2 0 383 0 382 -390 0 c-215 0 -395 -1 -400 -3z" />
                            </g>
                        </svg>
                    </a>


                </div>
            </Link>
            <Link href={process.env.BACKEND_URL + "/"}>
                <a aria-label={'LMNAs Cloud Solutions'}>
                    <span className="font-semibold text-xl tracking-tight">LMNAs</span>
                </a>
            </Link>

            {/**   <Link href={process.env.BACKEND_URL + "/"}>
                <a aria-label={'LMNAs Cloud Solutions'}><Image src="https://lmnas.com/wp-content/uploads/2021/04/lmnas2.png"
                    height={'30 px'}
                    width={'80 px'} 
                    alt='LMNAs Logo'/>
                </a>
            </Link>*/}

        </div>
    )
}