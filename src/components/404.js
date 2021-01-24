import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NotFound = ({ title, pageText, imgSrc }) => (
  <Wrapper>
    <h1>{title}</h1>
    <Img fixed={imgSrc} />
    <p>{pageText}</p>
  </Wrapper>
);

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
  pageText: PropTypes.string.isRequired,
  imgSrc: PropTypes.object.isRequired,
};

export default NotFound;
