import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header/header"
import NavState from "../../context/nav-state"

import "../global.css"

const Main = styled.main`
  padding: 0 1.0875rem;
  max-width: 860px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    site: {
        siteMetadata: { title },
    },
  } = data

  return (
    <NavState>
      <Header siteTitle={title} />
      <Main>{children}</Main>
    </NavState>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
