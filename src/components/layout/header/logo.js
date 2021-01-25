import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(height: 114) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = data;

  return <Img fixed={fixed} alt="logo" />;
};

export default Logo;
