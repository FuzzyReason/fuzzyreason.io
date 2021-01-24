import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { Link as GatsbyLink } from "gatsby";
import colors from "../constants/colors";

const StyledInternalLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${colors.black};
`;

const StyledExternalLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
`;

const Link = React.forwardRef(function Link(props, ref) {
  const internal = /^\/(?!\/)/.test(props.to);
  const email = /(.+)@(.+){2,}\.(.+){2,}/.test(props.to);

  if (internal && !email) {
    return <StyledInternalLink ref={ref} {...props} />;
  } else if (email) {
    return (
      <a href={`mailto:${props.to}`} ref={ref} {...props}>
        {props.children}
      </a>
    );
  }
  return (
    <StyledExternalLink
      href={props.to}
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </StyledExternalLink>
  );
});

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Link;
