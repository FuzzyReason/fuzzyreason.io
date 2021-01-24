import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { borderColor } from "../tools/border-color";
import colors from "../constants/colors";

const LargeCard = `
  max-width: 740px;
  padding: 40px 40px 40px 40px;
`;

const SmallCard = `
  max-width: 580px;
  padding: 10px 10px 10px 40px;
`;

const CardWrapper = styled.div`
  margin: 20px auto;
  background: ${colors.white};
  border: 1px solid ${colors.black};
  box-sizing: border-box;
  box-shadow: 8px 8px 0px ${(props) => borderColor(props.page)};
  ${(props) => (props.large ? LargeCard : SmallCard)}
  @media (max-width: 768px) {
    padding: 40px 20px 40px 20px;
  }
`;

const Card = ({ children, page, large }) => (
  <CardWrapper large={large} page={page}>
    {children}
  </CardWrapper>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
  large: PropTypes.bool,
};

export default Card;
