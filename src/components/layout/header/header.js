import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React, { useContext, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import { MenuContext } from "../../../context/nav-state";
import useOnClickOutside from "../../../hooks/on-click-outside";

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
`;

const Header = () => {
  let pathname = typeof window !== "undefined" ? window.location.pathname : "";
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
    }
  `);
  const {
    site: {
      siteMetadata: { title, menuItems },
    },
  } = data;
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });
  const currentPage = pathname.replace(/\//g, "");

  return (
    <SiteHeader ref={node}>
      <MobileMenu
        currentPage={currentPage}
        siteTitle={title}
        menuList={menuItems}
      />
      <DesktopMenu siteTitle={title} menuList={menuItems} />
    </SiteHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "Vadim Smirnov",
};

export default Header;
