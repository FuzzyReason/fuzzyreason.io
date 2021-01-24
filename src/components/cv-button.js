import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

import { borderColor } from "../tools/border-color";
import colors from "../constants/colors";
import getIcon from "../tools/icon";

import Link from "./link";

const CvButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
`;

const CvButtonBlock = styled(Link)`
  margin: 15px 0 15px 15px;
  width: 180px;
  height: 55px;
  padding: 17px 35px 17px 25px;
  background: ${colors.white};
  border: 1px solid ${colors.black};
  box-sizing: border-box;
  box-shadow: 8px 8px 0px ${(props) => borderColor(props.page)};
`;

const CvButton = ({ page }) => {
  const data = useStaticQuery(graphql`
    query CvQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "cv" } }) {
        frontmatter {
          cvLink
        }
      }
    }
  `);
  const {
    markdownRemark: {
      frontmatter: { cvLink },
    },
  } = data;
  const ArrowIcon = getIcon("arrow");

  return (
    <CvButtonWrapper>
      <ArrowIcon />
      <CvButtonBlock page={page} to={cvLink}>
        Grab my CV!
      </CvButtonBlock>
    </CvButtonWrapper>
  );
};

CvButton.propTypes = {
  page: PropTypes.string,
};

export default CvButton;
