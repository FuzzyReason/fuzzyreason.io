import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import About from "../components/about";
import Card from "../components/card";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import CvButton from "../components/cv-button";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageData {
      markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
        frontmatter {
          pageTitle
        }
        html
      }
      file(relativePath: { eq: "cms/photo.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const {
    markdownRemark: {
      frontmatter: { pageTitle },
      html,
    },
    file: {
      childImageSharp: { fixed },
    },
  } = data;

  return (
    <Layout>
      <SEO title={pageTitle} keywords={[`gatsby`, `application`, `react`]} />
      <Card page={pageTitle} large>
        <About pageText={html} imgSrc={fixed} />
      </Card>
      <CvButton page={pageTitle} />
    </Layout>
  );
};

export default IndexPage;
