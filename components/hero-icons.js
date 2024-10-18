

// import { AcademicCapIcon, BellIcon, BriefcaseIcon } from '@heroicons/react/solid'

// const DynamicHeroIcon = (props) => {
//   const icons = {
//     AcademicCapIcon,
//     BellIcon,
//     BriefcaseIcon,
//   }

//   const TheIcon = icons[props.icon]

//   if (!TheIcon) {
//     console.error(`Icon "${props.icon}" not found`)
//     return null
//   }

//   return (
//     <TheIcon className="h-7 w-7" aria-hidden="true" />
//   )
// }

// export default DynamicHeroIcon






import * as HIcons from '@heroicons/react/solid'

const DynamicHeroIcon = (props) => {
  const { ...icons } = HIcons
  const TheIcon = icons[props.icon]

  // Check if the icon exists
  if (!TheIcon) {
    console.error(`Icon "${props.icon}" not found in @heroicons/react/solid`)
    return null
  }

  return (
    <>
      <TheIcon className="h-7 w-7" aria-hidden="true" />
    </>
  )
}

export default DynamicHeroIcon













// import * as HIcons from '@heroicons/react/solid'

// const DynamicHeroIcon = (props) => {
//   const {...icons} = HIcons
//   const TheIcon = icons[props.icon]

//   return (
//     <>
//       <TheIcon className="h-7 w-7 " aria-hidden="true" />
//     </>
//   )
// }

// export default DynamicHeroIcon
