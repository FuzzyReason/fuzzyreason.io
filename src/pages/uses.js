import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Card from "../components/card";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import CvButton from "../components/cv-button";
import UsesList from "../components/uses-list";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { templateKey: { eq: "uses-page" } }) {
        frontmatter {
          pageTitle
        }
        html
      }
    }
  `);
  const {
    markdownRemark: {
      frontmatter: { pageTitle },
      html,
    },
  } = data;

  return (
    <Layout>
      <SEO title={pageTitle} keywords={[`gatsby`, `application`, `react`]} />
      <Card page={pageTitle}>
        <UsesList usesText={html} />
      </Card>
      <CvButton page={pageTitle} />
    </Layout>
  );
};

export default IndexPage;
