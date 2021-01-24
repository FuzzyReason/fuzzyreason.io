import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { HeaderTitle, MenuItem } from "./shared-styles"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
`

const DesktopMenu = ({ menuList, siteTitle }) => {
  const menuItems = menuList.map((item) => 
    <MenuItem to={item.path}>{item.title}</MenuItem>
  )
  
  return (
    <Wrapper>
      <HeaderTitle to="/">{siteTitle}</HeaderTitle>
      <Navbar>
        {menuItems}
      </Navbar>
    </Wrapper>
  )
}

DesktopMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  siteTitle: PropTypes.string.isRequired
}

export default DesktopMenu
