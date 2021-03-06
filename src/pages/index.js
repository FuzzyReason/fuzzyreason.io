import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import LandingBio from "../components/landing-bio";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import CvButton from "../components/cv-button";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageData {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
      <Card page={pageTitle} large>
        <LandingBio pageText={html} />
      </Card>
      <CvButton page={pageTitle} />
    </Layout>
  );
};

export default IndexPage;
