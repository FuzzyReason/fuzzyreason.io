import styled from "@emotion/styled";

import Link from "../../link";

const MenuItem = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  @media (min-width: 600px) {
    margin-left: 15px;
  }
`;

const HeaderTitle = styled(MenuItem)`
  font-size: 24px;
  @media (min-width: 600px) {
    margin-left: 15px;
    margin-bottom: 20px;
  }
`;

export { MenuItem, HeaderTitle };
