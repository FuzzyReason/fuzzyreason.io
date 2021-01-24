import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Description = styled.div`
  padding: 0;
  margin: 1rem 0;
`;

const UsesList = ({ usesText }) => (
  <OuterContainer>
    <Description dangerouslySetInnerHTML={{ __html: usesText }} />
  </OuterContainer>
);

UsesList.propTypes = {
  usesText: PropTypes.string.isRequired,
};

export default UsesList;
