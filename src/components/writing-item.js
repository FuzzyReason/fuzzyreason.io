import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Card from "../components/card";
import Link from "../components/link";
import colors from "../constants/colors";

const ArticleDate = styled.h5`
  width: fit-content;
  padding: 5px 8px;
  background-color: ${colors.postDateBackground};
`;

const Title = styled.h3`
  font-size: 24px;
`;

const ReadingTime = styled.h5`
  display: inline;
  margin-left: 10px;
`;

const DateSection = styled.div`
  display: flex;
  align-items: center;
`;

const WritingItem = ({ path, title, date, text, excerpt }) => {
  return (
    <Link to={path}>
      <Card page="Writing">
        <Title>{title} </Title>
        <DateSection>
          <ArticleDate>{date}</ArticleDate>
          <ReadingTime> - {text}</ReadingTime>
        </DateSection>
        <p>{excerpt}</p>
      </Card>
    </Link>
  );
};

WritingItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
  excerpt: PropTypes.string,
};

export default WritingItem;
