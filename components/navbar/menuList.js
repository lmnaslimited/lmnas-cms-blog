import CollapseMenu from "./collapseMenu"
//Get Menuitems from Layout and build the navbar menu list
export default function MenuList({ menuItems }) {
  // Flex stacks the items by sideways. For Mobile we need the items to be stacked in row
  // We use flex-grow only for large devices
  return (
    <div className="text-sm lg:flex-grow">
      {
        //A Sub function to build individual menu
        menuItems.map((menuItem) => (
          <Menu menuItem={menuItem} />)

        )}
    </div>
  )
}
//Sub function to build the individual menu
function Menu({ menuItem }) {
  return (
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-th-primary-medium hover:text-th-accent-medium mr-4">
      {menuItem.menu}
      {menuItem.subMenus ? (
        <CollapseMenu subMenus={menuItem.subMenus} />
      ) : null
      }
    </a>


  )
}