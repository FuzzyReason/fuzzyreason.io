import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { HeaderTitle } from "./shared-styles";
import HamburgerButton from "../../burger";
import { SideMenu } from "../../menu";

import { MenuItem } from "./shared-styles";
import Logo from "./logo";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 600px) {
    display: none;
  }
`;

const MobileMenu = ({ menuList, siteTitle }) => {
  const menuItems = menuList.map((item) => (
    <MenuItem key={item.title} to={item.path}>{item.title}</MenuItem>
  ));

  return (
    <Wrapper>
      <MenuItem aria-label="home page" to="/">
        <Logo />
      </MenuItem>
      <HeaderTitle to="/">{siteTitle}</HeaderTitle>
      <div>
        <HamburgerButton />
        <SideMenu>{menuItems}</SideMenu>
      </div>
    </Wrapper>
  );
};

MobileMenu.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  siteTitle: PropTypes.string,
};

export default MobileMenu;
