import React from "react"
import PropTypes from "prop-types"

import { HeaderTitle } from "./shared-styles"
import HamburgerButton from "../../burger"
import { SideMenu } from "../../menu"

import { MenuItem } from "./shared-styles"

const MobileMenu = ({ menuList, siteTitle }) => (
    <>
      <HeaderTitle to="/">{siteTitle}</HeaderTitle>
      <HamburgerButton />
      <SideMenu>
        {menuList.map((item) => 
          <MenuItem to={item.path}>{item.title}</MenuItem>
        )}
      </SideMenu>
    </>
)

MobileMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  siteTitle: PropTypes.string
}

export default MobileMenu
