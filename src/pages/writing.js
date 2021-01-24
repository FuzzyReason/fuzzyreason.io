import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import WritingItem from "../components/writing-item";
import CvButton from "../components/cv-button";

const Content = styled.div`
  margin: 0 auto;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "blog-posts" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              rawDate: date
              path
            }
            fields {
              slug
              readingTime {
                text
              }
            }
            html
            excerpt
          }
        }
      }
    }
  `);

  const writingPost = data.allMarkdownRemark.edges.map(({ node }) => {
    const {
      frontmatter: { title, date, path },
      fields: {
        slug,
        readingTime: { text },
      },
      id,
      html,
      excerpt,
    } = node;

    return {
      id,
      title,
      date,
      slug,
      html,
      excerpt,
      text,
      path,
    };
  });

  return (
    <Layout>
      <SEO title="Writing" />
      <Content>
        {writingPost.map((node) => (
          <WritingItem
            path={node.path}
            key={node.id}
            title={node.title}
            date={node.date}
            text={node.text}
            excerpt={node.excerpt}
          />
        ))}
        <CvButton page="Writing" />
      </Content>
    </Layout>
  );
};

export default IndexPage;
