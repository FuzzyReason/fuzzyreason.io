import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import Contacts from "../components/contacts";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Description = styled.p`
  padding: 0;
  margin: 1rem 0;
`;

const About = ({ pageText, imgSrc }) => (
  <OuterContainer>
    <Img fixed={imgSrc} />
    <Description dangerouslySetInnerHTML={{ __html: pageText }} />
    <Contacts />
  </OuterContainer>
);

About.propTypes = {
  pageText: PropTypes.string.isRequired,
  imgSrc: PropTypes.object,
};

export default About;
