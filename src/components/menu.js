import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { MenuContext } from "../context/nav-state";
import colors from "../constants/colors";

const Menu = styled.div`
  display: none;

  ${(props) =>
    props.open &&
    `
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 60px;
      top: 80px;
      z-index: 293;
      align-items: stretch;
      background-color: white;
      box-shadow: 8px 8px 0px ${colors.burgerMenuBackground};
      border: 1px solid ${colors.black};
      padding: 40px 65px;
    `}
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};
