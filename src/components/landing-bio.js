import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Contacts from "../components/contacts";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Description = styled.div`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 18px;
`;

const LandingBio = ({ pageText }) => (
  <OuterContainer>
    <Description dangerouslySetInnerHTML={{ __html: pageText }} />
    <Contacts />
  </OuterContainer>
);

LandingBio.propTypes = {
  pageText: PropTypes.string.isRequired,
};

export default LandingBio;
