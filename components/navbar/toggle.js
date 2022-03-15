import { useState } from 'react';
import { useTheme } from 'next-themes';
export default function Toggle() {
    //Determine how many points the slider need to move
    const toggleClass = ' transform translate-x-3';
    const [toggle, setToggle] = useState(false);
    // Refer Blog https://darrenwhite.dev/blog/nextjs-tailwindcss-theming
    // Themes are configured in /styles/index.css
    const { theme, setTheme } = useTheme();
    return (
        <div
            className="w-10 h-6 flex items-center bg-th-primary-dark rounded-full p-1 cursor-pointer"
            onClick={() => {
                setToggle(!toggle);
                setTheme(toggle ? 'light' : 'dark')
            }}
        >
            {/* Switch */}
            <div
                className={"bg-th-background  h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" + (toggle ? toggleClass : null)}
            />
        </div>
    )
}