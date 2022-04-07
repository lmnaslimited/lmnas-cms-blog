import Link from "next/link";

/* HeroIcon.tsx
import * as SolidIcons from '@heroicons/react/solid'
import * as OutlineIcons from '@heroicons/react/outline';

interface Props {
  icon: string;
  color?: string;
  size?: number;
  outline?: boolean;
}

export const HeroIcon = (props: Props): JSX.Element => {
  const { icon, color, size, outline = false } = props;

  const { ...icons } = outline ? OutlineIcons : SolidIcons;

  // @ts-ignore
  const Icon: JSX.Element = icons[icon];

  const classes = [
    `${color ? color : 'text-black'}`,
    `h-${size ? size : 6}`,
    `w-${size ? size : 6}`
  ];

  return (
     
  );
}; */
export default function CategoryCard({ svg, category }) {
  const IconSvg = (category.svg);
  return (

    <div class="py-4 md:p-4 md:w-1/4 sm:w-1/2 w-full">
      <Link href={process.env.BACKEND_URL + `/category/${category.slug}`}>
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <div dangerouslySetInnerHTML={{ __html: category.svg }} />
          {/**   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="text-indigo-500 w-12 h-12 mb-3 inline-block">
                    <path d="M8 17l4 4 4-4m-4-5v9">
                    </path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29">
                    </path>
                </svg>
                 */}
          <h2 class="title-font font-medium text-2xl text-th-primary-medium hover:text-th-accent-medium">{category.name}
          </h2>

        </div>
      </Link>
    </div>
  )
}