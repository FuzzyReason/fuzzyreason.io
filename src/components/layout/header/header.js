import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React, { useContext, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useWindowSize } from 'react-use';

import DesktopMenu from "./desktop-menu"
import MobileMenu from "./mobile-menu"
import { MenuContext } from "../../../context/nav-state"
import useOnClickOutside from "../../../hooks/on-click-outside"
import { size } from "../../../constants/window-sizes"
import { MenuItem } from "./shared-styles"

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 10px;
  @media (max-width: 600px) {
    justify-content: space-between;
    width: 90%;
    align-items: center;
    margin: 0 auto;
  }
`

const Header = () => {
  let pathname = typeof window !== "undefined" ? window.location.pathname : ""
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuItems {
            title
            path
          }
        }
      }
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(height: 114) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: {
        title,
        menuItems
      }
    }
  } = data;
  const node = useRef()
  const { width } = useWindowSize();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext)
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode()
    }
  })
  const currentPage = pathname.replace(/\//g, "")

  return (
    <SiteHeader ref={node}>
      <MenuItem to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </MenuItem>
      {width <= size.mobile ? 
        <MobileMenu 
          currentPage={currentPage}
          siteTitle={title}
          menuList={menuItems}
        /> :
        <DesktopMenu
          siteTitle={title}
          menuList={menuItems}
        />
      }
    </SiteHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Vadim Smirnov",
}

export default Header
