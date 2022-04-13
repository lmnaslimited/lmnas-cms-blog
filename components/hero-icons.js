
import * as HIcons from '@heroicons/react/solid'

const DynamicHeroIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="h-7 w-7 " aria-hidden="true" />
    </>
  )
}

export default DynamicHeroIcon
