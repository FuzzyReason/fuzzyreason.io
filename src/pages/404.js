import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import CvButton from "../components/cv-button";
import NotFound from "../components/404";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundData {
      markdownRemark(frontmatter: { templateKey: { eq: "not-found-page" } }) {
        frontmatter {
          pageTitle
          title
          description
        }
      }
      file(relativePath: { eq: "cms/404.png" }) {
        childImageSharp {
          fixed(height: 220) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const {
    markdownRemark: {
      frontmatter: { pageTitle, title, description },
    },
    file: {
      childImageSharp: { fixed },
    },
  } = data;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Card page={pageTitle}>
        <NotFound title={title} pageText={description} imgSrc={fixed} />
      </Card>
      <CvButton page={pageTitle} />
    </Layout>
  );
};

export default NotFoundPage;
