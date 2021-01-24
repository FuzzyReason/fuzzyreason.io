import React from "react"
import PropTypes from "prop-types"

import { HeaderTitle } from "./shared-styles"
import HamburgerButton from "../../burger"
import { SideMenu } from "../../menu"

import { MenuItem } from "./shared-styles"

const MobileMenu = ({ menuList, siteTitle }) => {
  const menuItems = menuList.map((item) => 
    <MenuItem to={item.path}>{item.title}</MenuItem>
  )

  return (
    <>
      <HeaderTitle to="/">{siteTitle}</HeaderTitle>
      <HamburgerButton />
      <SideMenu>
        {menuItems}
      </SideMenu>
    </>
  )
}

MobileMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  siteTitle: PropTypes.string
}

export default MobileMenu
