import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import SpeakingItem from "../components/speaking-item";
import CvButton from "../components/cv-button";

const Content = styled.div`
  margin: 0 auto;
`;

const SpeakingPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "public-speaking" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              youtubeUrl
            }
          }
        }
      }
    }
  `);

  const publicSpeakingPost = data.allMarkdownRemark.edges.map(({ node }) => {
    const {
      frontmatter: { title, date, youtubeUrl },
      id,
    } = node;

    return {
      id,
      title,
      date,
      youtubeUrl,
    };
  });

  return (
    <Layout>
      <SEO title="Speaking" />
      <Content>
        {publicSpeakingPost.map((node) => (
          <SpeakingItem
            key={node.id}
            title={node.title}
            date={node.date}
            videoUrl={node.youtubeUrl}
          />
        ))}
        <CvButton page="Speaking" />
      </Content>
    </Layout>
  );
};

export default SpeakingPage;
