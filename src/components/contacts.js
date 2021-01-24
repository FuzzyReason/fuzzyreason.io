import styled from "@emotion/styled";
import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Link from "./link";
import getIcon from "../tools/icon";

const ContactsBlock = styled.p`
  display: flex;
  @media (max-width: 600px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const ContactsItem = styled(Link)`
  @media (min-width: 600px) {
    margin-left: 20px;
  }
`;

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query SocialNetwork {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "socialNetwork" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              type
              url
            }
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges: contactsData },
  } = data;

  return (
    <ContactsBlock>
      {contactsData.map(({ node }) => {
        const Icon = getIcon(node.frontmatter.type);
        return (
          <ContactsItem to={node.frontmatter.url} key={node.frontmatter.type}>
            <Icon />
          </ContactsItem>
        );
      })}
    </ContactsBlock>
  );
};

export default Contacts;
