import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Card from "../components/card";
import Link from "../components/link";
import getIcon from "../tools/icon";
import colors from "../constants/colors";

const ArticleDate = styled.h5`
  width: fit-content;
  padding: 5px 8px;
  background-color: ${colors.postDateBackground};
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 24px;
`;

const SpeakingItem = ({ title, date, videoUrl }) => {
  const YoutubeIcon = getIcon("youtube");

  return (
    <Card page="Speaking">
      <Title>{title} </Title>
      <ArticleDate>{date}</ArticleDate>
      <div>
        <Link to={videoUrl}>
          <YoutubeIcon />
        </Link>
      </div>
    </Card>
  );
};

SpeakingItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  videoUrl: PropTypes.string.isRequired,
};

export default SpeakingItem;
