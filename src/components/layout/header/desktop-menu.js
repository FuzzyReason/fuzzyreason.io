import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { HeaderTitle, MenuItem } from "./shared-styles";
import Logo from "./logo";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DesktopMenu = ({ menuList, siteTitle }) => {
  const menuItems = menuList.map((item) => (
    <MenuItem to={item.path}>{item.title}</MenuItem>
  ));

  return (
    <Wrapper>
      <MenuItem aria-label="home page" to="/">
        <Logo />
      </MenuItem>
      <TextItems>
        <HeaderTitle to="/">{siteTitle}</HeaderTitle>
        <Navbar>{menuItems}</Navbar>
      </TextItems>
    </Wrapper>
  );
};

DesktopMenu.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  siteTitle: PropTypes.string.isRequired,
};

export default DesktopMenu;
