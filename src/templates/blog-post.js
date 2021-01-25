import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import colors from "../constants/colors";

const PostHeader = styled.h1`
  display: inline;
`;

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: ${colors.grayedTextColor};
`;

const BlogPostTemplate = ({ data }) => {
  const post = data;

  return (
    <Layout>
      <SEO
        title={post.markdownRemark.frontmatter.title}
        description={post.markdownRemark.excerpt}
      />
      <Card large page="Writing">
        <PostHeader>{post.markdownRemark.frontmatter.title}</PostHeader>
        <HeaderDate>
          {post.markdownRemark.frontmatter.date} -{" "}
          {post.markdownRemark.fields.readingTime.text}
        </HeaderDate>
        <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
      </Card>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;

export default BlogPostTemplate;
