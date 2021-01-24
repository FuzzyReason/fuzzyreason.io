import React, { useContext } from "react";

import { MenuContext } from "../context/nav-state";
import getIcon from "../tools/icon";

const HamburgerButton = () => {
  const BurgerIcon = getIcon("menu");
  const { toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return <BurgerIcon aria-label="Open menu" onClick={clickHandler} />;
};

export default HamburgerButton;
